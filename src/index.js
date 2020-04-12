import api from './api';
import { defaults } from './configs';

const instagramApi = (options) => {
  if (!options.sessionId) {
    throw new Error('Session ID cannot be null');
  }

  defaults.sessionId = options.sessionId;
  return api;
};

module.exports = instagramApi;
