import { http } from '../configs';

const getStories = async (userId) => {
  try {
    const { data } = await http.get(
      `https://www.instagram.com/graphql/query/?query_hash=52a36e788a02a3c612742ed5146f1676&variables={"reel_ids":["${userId}"],"precomposed_overlay":false}`,
    );

    const medias = data.data.reels_media;

    if (!medias.length > 0) {
      return Promise.reject({
        message: 'Story not found',
        status: 404,
      });
    }

    const media = medias.shift();

    const stories = media.items.map((story) => ({
      type: story.is_video ? 'video' : 'image',
      publishingDate: story.taken_at_timestamp,
      url: story.is_video
        ? story.video_resources[story.video_resources.length - 1].src
        : story.display_url,
    }));

    return Promise.resolve(stories);
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};

export {
  // eslint-disable-next-line import/prefer-default-export
  getStories,
};
