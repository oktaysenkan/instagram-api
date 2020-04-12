import * as user from './user';
import * as story from './story';
import * as highlight from './highlight';
import * as post from './post';

export default {
  ...user,
  ...story,
  ...highlight,
  ...post,
};
