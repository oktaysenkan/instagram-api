import UserService from './src/Service/UserService'
const request = require('request');
require('dotenv').config()

const userId = 301557358;
const headers = {
  'Content-Type': 'application/json',
  'Cookie': `sessionid=${process.env.SESSION_ID};`
};
const options = {
  url: `https://www.instagram.com/graphql/query/?query_hash=52a36e788a02a3c612742ed5146f1676&variables={"reel_ids":["${userId}"],"precomposed_overlay":false}`,
  method: 'GET',
  headers: headers
};

UserService.getUserIdByUsername('oktaysenkan').then((userId => {
  console.log(userId);
  request(options, (error, response, body) => {
    console.log(body);
    console.log(response.statusCode);
  });
})).catch(error => {
  console.log(error);
});


