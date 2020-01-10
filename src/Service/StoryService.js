const request = require('request');
require('dotenv').config();

class StoryService {
  static  getStories = (userId) => {
    return new Promise((resolve, reject) => {

      if (!process.env.SESSION_ID) {
        reject('Session ID not found in .env file.');
      };

      const headers = {
        'Content-Type': 'application/json',
        'Cookie': `sessionid=${process.env.SESSION_ID};`
      };

      const options = {
        url: `https://www.instagram.com/graphql/query/?query_hash=52a36e788a02a3c612742ed5146f1676&variables={"reel_ids":["${userId}"],"precomposed_overlay":false}`,
        method: 'GET',
        headers: headers
      };

      request(options, (error, response, body) => {
        let data = JSON.parse(body).data.reels_media;
        if (data.length > 0) {
          data = data[0];
          const stories = {
            owner: {
              username: data.owner.username,
              id: data.owner.id,
              picture_url: data.owner.profile_pic_url,
            },
            stories: []
          };

          data.items.map(story => {
            stories.stories.push({
              type: story.is_video ? 'video' : 'image',
              publishingDate: story.taken_at_timestamp,
              url: story.display_url,
            });
          });
          resolve(stories);
        } else {
          reject('Story not found or this account is private!');
        }
      });
    })
  }
}

export default StoryService;