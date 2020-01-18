import {UserService, StoryService, HighlightService, PostService} from './src/Service';
import { PORT } from './config'

const express = require('express');
const app = express();
app.disable('etag');

app.get('/', (req, res) => {
  res.json({
    'endpoints': [
      "api/users/{username}",
      "api/users/{username}/stories",
      "api/users/{username}/profile",
      "api/users/{username}/highlights",
      "api/users/{username}/posts",
      "api/highlights/{highlightedId}",
    ]
  });
});

app.get('/api/users/:username', (req, res) => {
  const username = req.params.username;
  UserService.getUser(username).then((user => {
    res.json(user)
  })).catch(error => {
    res.status(error.status).json(error);
  });
});

app.get('/api/users/:username/profile', (req, res) => {
  const username = req.params.username;
  UserService.getUser(username).then((user => {
    UserService.getProfile(user.id).then(profile => {
      res.json(profile);
    }).catch(error => {
      res.json(error)
    })
  })).catch(error => {
    res.status(error.status).json(error);
  });
});

app.get('/api/users/:username/stories', (req, res) => {
  const username = req.params.username;
  UserService.getUser(username).then((user => {
    if (user.isPrivate) {
      res.status(401).json({
        message: 'This account is private!',
        status: 401,
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

app.get('/api/users/:username/highlights', (req, res) => {
  const username = req.params.username;
  UserService.getUser(username).then((user => {
    if (user.isPrivate) {
      res.status(401).json({
        message: 'This account is private!',
        status: 401,
      });
    } else {
      HighlightService.getHighlights(user.id).then(highlights => {
        res.json(highlights);
      }).catch(error => {
        console.log(error);
        res.status(error.status).json(error);
      });
    }
  })).catch(error => {
    res.status(error.status).json(error);
  });
});

app.get('/api/highlights/:highlightedId', (req, res) => {
  const highlightedId = req.params.highlightedId;
  HighlightService.getHightlightedStories(highlightedId).then((highlights => {
    res.json(highlights);
  })).catch(error => {
    res.status(error.status).json(error);
  });
});

app.get('/api/users/:username/posts', (req, res) => {
  const username = req.params.username;
  UserService.getUser(username).then((user => {
    if (user.isPrivate) {
      res.status(401).json({
        message: 'This account is private!',
        status: 401,
      });
    } else {
      const page = req.query.page ? req.query.page : 1;
      const perPageCount = 10;
      PostService.getUserPosts(user, page * perPageCount).then(posts => {
        const offset = (page - 1) * 10;
        posts.posts = posts.posts.slice(offset, offset + perPageCount);
        res.json(posts);
      }).catch(error => {
        res.status(error.status).json(error);
      });
    }
  })).catch(error => {
    res.status(error.status).json(error);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});

