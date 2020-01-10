import UserService from './src/Service/UserService';
import StoryService from './src/Service/StoryService';

UserService.getUserId('galatasaray').then((userId => {
  StoryService.getStories(userId).then(stories => {
    console.log(stories);
  }).catch(error => {
    console.log(error);
  });
})).catch(error => {
  console.log(error);
});