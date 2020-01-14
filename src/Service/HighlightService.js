const request = require('request');
import { USER_AGENT, SESSION_ID, BASE_URL } from '../../config'

class HighlightService {
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

  static getHightlightedStories(hightlightedId) {
    return new Promise((resolve, reject) => {
      const headers = {
        'Content-Type': 'application/json',
        'Cookie': `sessionid=${SESSION_ID};`
      };
      const options = {
        url: `https://www.instagram.com/graphql/query/?query_hash=52a36e788a02a3c612742ed5146f1676&variables={"highlight_reel_ids":["${hightlightedId}"],"precomposed_overlay":false}`,
        method: 'GET',
        headers: headers
      };
      request(options, (error, response, body) => {
        let data = JSON.parse(body).data.reels_media[0];
        if (data) {
          const stories = {
            owner: {
              username: data.owner.username,
              id: data.owner.id,
              pictureUrl: data.owner.profile_pic_url,
            },
            stories: [],
            urls: {
              user: `${BASE_URL}/api/users/${data.owner.username}`,
            }
          };
          data.items.map(story => {
            stories.stories.push({
              type: story.is_video ? 'video' : 'image',
              publishingDate: story.taken_at_timestamp,
              url: story.is_video ? story.video_resources[story.video_resources.length - 1].src : story.display_url,
            });
          });
          resolve(stories);
        } else {
          reject({
            message: 'Story not found!',
            status: 404,
          });
        }
      });
    })
  }
}

export default HighlightService;
