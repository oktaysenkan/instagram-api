/* eslint-disable no-param-reassign */
import axios from 'axios';

import configs from './defaults';

const http = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'User-Agent': configs.userAgent,
  },
});

http.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Cookie: `sessionid=${configs.sessionId};`,
  };

  return config;
});

export default http;
