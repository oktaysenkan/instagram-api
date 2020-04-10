import { http } from '../configs';

const request = require('request');

const getUser = async (username) => {
  try {
    const { data } = await http.get(
      `https://www.instagram.com/web/search/topsearch/?context=user&count=0&query=${username}`,
    );

    const { users } = data;

    if (!users.length > 0) {
      return Promise.reject('User not found!');
    }

    const user = users.pop();

    return Promise.resolve({
      id: user.user.pk,
      username: user.user.username,
      fullName: user.user.full_name,
      isPrivate: user.user.is_private,
      pictureUrl: user.user.profile_pic_url,
      isVerified: user.user.is_verified,
    });
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};

const getProfile = (userId) => {
  return new Promise((resolve, reject) => {
    const headers = {
      'Content-Type': 'application/json',
      'User-Agent': USER_AGENT,
      Cookie: `sessionid=${SESSION_ID};`,
    };
    const options = {
      url: `https://i.instagram.com/api/v1/users/${userId}/info/`,
      method: 'GET',
      headers: headers,
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
          category: data.category,
          mediaCount: data.media_count,
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
  });
};

export { getUser };
