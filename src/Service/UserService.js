const request = require('request');

class UserService {
  static  getUserId = (username) => {
    return new Promise((resolve, reject) => {
      request(`https://www.instagram.com/web/search/topsearch/?context=user&count=0&query=${username}`, (error, response, body) => {
        const {users} = JSON.parse(body);
        if (users.length > 0) {
          resolve(users[0].user.pk);
        } else {
          reject('User cannot found!');
        }
      });
    })
  }
}

export default UserService;