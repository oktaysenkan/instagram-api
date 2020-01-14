const request = require('request');
import { USER_AGENT, SESSION_ID, BASE_URL } from '../../config'


class UserService {
  static  getUser = (username) => {
    return new Promise((resolve, reject) => {
      request(`https://www.instagram.com/web/search/topsearch/?context=user&count=0&query=${username}`, (error, response, body) => {
        const user = JSON.parse(body).users[0];
        if (user) {
          resolve({
            id: user.user.pk,
            username: user.user.username,
            fullName: user.user.full_name,
            isPrivate: user.user.is_private,
            pictureUrl: user.user.profile_pic_url,
            isVerified: user.user.is_verified,
            urls: {
              profile: `${BASE_URL}/api/users/${user.user.username}/profile`,
              highlights: `${BASE_URL}/api/users/${user.user.username}/highlights`,
              stories: `${BASE_URL}/api/users/${user.user.username}/stories`,
              posts: `${BASE_URL}/api/users/${user.user.username}/posts`,
            }
          });
        } else {
          reject({
            message: 'User not found!',
            status: 404,
          });
        }
      });
    })
  }

  static getProfile = (userId) => {
    return new Promise((resolve, reject) => {
      const headers = {
        'Content-Type': 'application/json',
        'User-Agent': USER_AGENT,
        'Cookie': `sessionid=${SESSION_ID};`
      };
      const options = {
        url: `https://i.instagram.com/api/v1/users/${userId}/info/`,
        method: 'GET',
        headers: headers
      };
      request(options, (error, response, body) => {
        let data = JSON.parse(body).user;
        if (data) {
          const user = {
            id: userId,
            username: data.username,
            fullName: data.full_name,
            isPrivate: data.is_private,
            isVerified: data.is_verified,
            media_count: data.media_count,
            followerCount: data.follower_count,
            followingCount: data.following_count,
            biography: data.biography,
            pictureUrl: data.profile_pic_url,
            pictureUrlHD: data.hd_profile_pic_url_info.url,
            urls: {
              highlights: `${BASE_URL}/api/users/${data.username}/highlights`,
              stories: `${BASE_URL}/api/users/${data.username}/stories`,
              posts: `${BASE_URL}/api/users/${data.username}/posts`,
            },
          };
          resolve(user);
        } else {
          reject({
            message: 'User not found!',
            status: 404,
          });
        }
      });
    })
  }

  static getHighlights(userId) {
    return new Promise((resolve, reject) => {
      const headers = {
        'Content-Type': 'application/json',
        'User-Agent': USER_AGENT,
        'Cookie': `sessionid=${SESSION_ID};`
      };
      const options = {
        url: `https://www.instagram.com/graphql/query/?query_hash=c9100bf9110dd6361671f113dd02e7d6&variables={"user_id":"${userId}","include_highlight_reels":true,"include_reel":true}`, 
        method: 'GET',
        headers: headers
      };
      request(options, (error, response, body) => {
        let data = JSON.parse(body).data.user.edge_highlight_reels.edges;
        let owner = JSON.parse(body).data.user.reel.owner;

        if (data.length > 0) {
          const highlights = {
            owner: {
              id: owner.id,
              username: owner.username,
              pictureUrl: owner.profile_pic_url,
            },
            highlights: [],
            urls: {
              profile: `${BASE_URL}/api/users/${owner.username}/profile`,
              highlights: data.map(({node}) => {
                return `${BASE_URL}/api/highlights/${node.id}`
              })
            }
          };
          data.map(({node}) => {
            highlights.highlights.push({
              id: node.id,
              title: node.title,
              pictureUrl: node.cover_media_cropped_thumbnail.url,
              pictureUrlHD: node.cover_media.thumbnail_src,
            })
          })
          resolve(highlights);
        } else {
          reject({
            message: 'Highlight not found!',
            status: 404,
          });
        }
      });
    })
  }

  static getUserPosts(user) {
    return new Promise((resolve, reject) => {
      const headers = {
        'Content-Type': 'application/json',
        'User-Agent': USER_AGENT,
        'Cookie': `sessionid=${SESSION_ID};`
      };
      const options = {
        url: `https://www.instagram.com/graphql/query/?query_hash=e769aa130647d2354c40ea6a439bfc08&variables={"id":"${user.id}","first":100}`, 
        method: 'GET',
        headers: headers
      };
      request(options, (error, response, body) => {
        let data = JSON.parse(body).data.user.edge_owner_to_timeline_media.edges;
        if (data.length > 0) {
          const posts = {
            owner: {
              id: user.id,
              username: user.username,
              pictureUrl: user.pictureUrl,
            },
            posts: [],
            urls: {
              profile: `${BASE_URL}/api/users/${user.username}/profile`,
            }
          }
          data.map(({node}) => {
            const caption = node.edge_media_to_caption.edges.length > 0 && node.edge_media_to_caption.edges[0].node.text;
            posts.posts.push({
              type: node.is_video ? 'video' : 'image',
              displayUrl: node.display_url,
              publishingDate: node.taken_at_timestamp,
              videoUrl: node.video_url && node.video_url,
              caption: caption,
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

export default UserService;