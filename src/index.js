import api from './src/api';
import configs from './src/configs';

const instagramApi = (options) => {
  configs.defaults.sessionId = options.sessionId;
  return api;
};

export default instagramApi;
