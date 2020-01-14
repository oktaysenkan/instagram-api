const request = require('request');
import { USER_AGENT, SESSION_ID } from '../../config'


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
        url: `https://www.instagram.com/graphql/query/?query_hash=c9100bf9110dd6361671f113dd02e7d6&variables={"user_id":"${userId}","include_highlight_reels":true}`, 
        method: 'GET',
        headers: headers
      };
      request(options, (error, response, body) => {
        let data = JSON.parse(body).data.user.edge_highlight_reels.edges;
        if (data.length > 0) {
          const highlights = [];
          data.map(({node}) => {
            highlights.push({
              id: node.id,
              title: node.title,
              pictureUrl: node.cover_media_cropped_thumbnail.url,
              pictureUrlHD: node.cover_media.thumbnail_src,
            })
          })
          resolve({
            highlights: highlights
          });
        } else {
          reject({
            message: 'Highlight not found!',
            status: 404,
          });
        }
      });
    })
  }
}

export default UserService;