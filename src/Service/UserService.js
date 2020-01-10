const request = require('request');

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
}

export default UserService;