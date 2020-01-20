const request = require('request');
import { USER_AGENT, SESSION_ID, BASE_URL } from '../../config'

class PostService {
  static getUserPosts(user, first = 10, after = null) {
    return new Promise((resolve, reject) => {
      const headers = {
        'Content-Type': 'application/json',
        'User-Agent': USER_AGENT,
        'Cookie': `sessionid=${SESSION_ID};`
      };
      const options = {
        url: `https://www.instagram.com/graphql/query/?query_hash=e769aa130647d2354c40ea6a439bfc08&variables={"id":"${user.id}","first":"${first}","after":${after}}`, 
        method: 'GET',
        headers: headers
      };
      request(options, (error, response, body) => {
        let data = JSON.parse(body);
        if (data.message) {
          reject({
            message: data.message,
            status: 500,
          });
          return;
        }
        data = data.data.user.edge_owner_to_timeline_media;
        if (data.count > 0) {
          const posts = {
            owner: {
              id: user.id,
              username: user.username,
              pictureUrl: user.pictureUrl,
            },
            pageInfo: {
              hasNextPage: data.page_info.has_next_page,
              endCursor: data.page_info.end_cursor,
            },
            posts: [],
            urls: {
              profile: `${BASE_URL}/api/users/${user.username}/profile`,
            }
          }
          data.edges.map(({node}) => {
            const caption = node.edge_media_to_caption.edges.length > 0 && node.edge_media_to_caption.edges[0].node.text;
            posts.posts.push({
              type: node.is_video ? 'video' : 'image',
              dimensions: node.dimensions,
              displayUrl: node.display_url,
              publishingDate: node.taken_at_timestamp,
              videoUrl: node.video_url && node.video_url,
              caption: caption ? caption : null,
              publishingDate: node.taken_at_timestamp,
              location: node.location && node.location.name,
              preview: node.is_video ? node.edge_media_preview_like.count : null,
              like: !node.is_video ? node.edge_media_preview_like.count : null,
            });
          });
          resolve(posts);
        } else {
          reject({
            message: 'Post not found!',
            status: 404,
          });
        }
      });
    })
  }
}

export default PostService;
