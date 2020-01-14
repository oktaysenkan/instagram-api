const request = require('request');
import { SESSION_ID, BASE_URL } from '../../config'

class StoryService {
  static getStories = (userId) => {
    return new Promise((resolve, reject) => {
      const headers = {
        'Content-Type': 'application/json',
        'Cookie': `sessionid=${SESSION_ID};`
      };
      const options = {
        url: `https://www.instagram.com/graphql/query/?query_hash=52a36e788a02a3c612742ed5146f1676&variables={"reel_ids":["${userId}"],"precomposed_overlay":false}`,
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

export default StoryService;