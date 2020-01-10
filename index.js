import UserService from './src/Service/UserService';
import StoryService from './src/Service/StoryService';

const express = require('express');
const app = express();
app.disable('etag');
const port = 3000;

app.get('/', (req, res) => {
  res.json({
    'endpoints': [
      "api/stories/{username}",
    ]
  });
});

app.get('/api/users/:username', (req, res) => {
  const username = req.params.username;
  UserService.getUser(username).then((user => {
    res.json(user);
  })).catch(error => {
    res.status(error.status).json(error);
  });
});

app.get('/api/users/:username/stories', (req, res) => {
  const username = req.params.username;
  UserService.getUser(username).then((user => {
    if (user.isPrivate) {
      res.status(400).json({
        message: 'This account is private!',
        status: 400,
      });
    } else {
      StoryService.getStories(user.id).then(stories => {
        res.json(stories);
      }).catch(error => {
        res.status(error.status).json(error);
      });
    }
  })).catch(error => {
    res.status(error.status).json(error);
  });
});

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port} !`);
});

