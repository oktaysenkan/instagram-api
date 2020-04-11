import api from './api';
import configs from './configs';

const instagramApi = (options) => {
  if (!options.sessionId) {
    throw new Error('Session ID cannot be null');
  }

  configs.defaults.sessionId = options.sessionId;
  return api;
};

export default instagramApi;
