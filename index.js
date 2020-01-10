import UserService from './src/Service/UserService';
import StoryService from './src/Service/StoryService';
import {withData, withErrorMessage} from './src/utils/Response';

const express = require('express')
const app = express()
app.disable('etag');
const port = 3000


app.get('/', (req, res) => {
  res.json({
    'status': 'Hello World!'
  })
})

app.get('/api/stories/:username', (req, res) => {
  const username = req.params.username;
  UserService.getUserId(username).then((userId => {
    StoryService.getStories(userId).then(stories => {
      res.json(withData(stories))
    }).catch(error => {
      res.status(404);
      res.json(withErrorMessage(error))
    });
  })).catch(error => {
    res.status(404);
    res.json(withErrorMessage(error))
  });
})

app.listen(port, () => {
  console.log(`Listening on port ${port}!`)
})

