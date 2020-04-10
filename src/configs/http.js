import axios from 'axios';

import configs from './defaults';

const http = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'User-Agent': configs.USER_AGENT,
    Cookie: `sessionid=${configs.SESSION_ID};`,
  },
});

export default http;
