import { http } from '../configs';

const getUser = async (username) => {
  try {
    const { data } = await http.get(
      `https://www.instagram.com/web/search/topsearch/?context=user&count=0&query=${username}`,
    );

    const { users } = data;

    if (!users.length > 0) {
      return Promise.reject({
        message: 'User not found!',
        status: 404,
      });
    }

    const { user } = users.shift();

    if (user.username !== username) {
      return Promise.reject({
        message: 'User not found!',
        status: 404,
      });
    }

    return Promise.resolve({
      id: +user.pk,
      username: user.username,
      fullName: user.full_name,
      isPrivate: user.is_private,
      pictureUrl: user.profile_pic_url,
      isVerified: user.is_verified,
    });
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};

const getProfile = async (userId) => {
  try {
    const { data } = await http.get(`https://i.instagram.com/api/v1/users/${userId}/info/`);

    const { user } = data;

    return Promise.resolve({
      id: userId,
      username: user.username,
      fullName: user.full_name,
      isPrivate: user.is_private,
      isVerified: user.is_verified,
      category: user.category,
      mediaCount: user.media_count,
      followerCount: user.follower_count,
      followingCount: user.following_count,
      biography: user.biography,
      pictureUrl: user.profile_pic_url,
      pictureUrlHD: user.hd_profile_pic_url_info.url,
    });
  } catch (error) {
    return Promise.reject({
      message: 'User not found!',
      status: 404,
    });
  }
};

export { getUser, getProfile };
