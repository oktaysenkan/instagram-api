import { http } from '../configs';

const getHighlights = async (userId) => {
  try {
    const { data } = await http.get(
      `https://www.instagram.com/graphql/query/?query_hash=c9100bf9110dd6361671f113dd02e7d6&variables={"user_id":"${userId}","include_highlight_reels":true,"include_reel":true}`,
    );

    const medias = data.data.user.edge_highlight_reels.edges;

    if (!medias.length > 0) {
      return Promise.reject({
        message: 'Highlight not found',
        status: 404,
      });
    }

    const highlights = medias.map(({ node }) => ({
      id: node.id,
      title: node.title,
      pictureUrl: node.cover_media_cropped_thumbnail.url,
      pictureUrlHD: node.cover_media.thumbnail_src,
    }));

    return Promise.resolve(highlights);
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};

const getHightlightedStories = async (hightlightedId) => {
  try {
    const { data } = await http.get(
      `https://www.instagram.com/graphql/query/?query_hash=52a36e788a02a3c612742ed5146f1676&variables={"highlight_reel_ids":["${hightlightedId}"],"precomposed_overlay":false}`,
    );

    const medias = data.data.reels_media;

    if (!medias.length > 0) {
      return Promise.reject({
        message: 'Highlight not found',
        status: 404,
      });
    }

    const media = medias.shift();

    const highlights = media.items.map((highlight) => ({
      type: highlight.is_video ? 'video' : 'image',
      publishingDate: highlight.taken_at_timestamp,
      url: highlight.is_video
        ? highlight.video_resources[highlight.video_resources.length - 1].src
        : highlight.display_url,
    }));

    return Promise.resolve(highlights);
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};

export {
  // eslint-disable-next-line import/prefer-default-export
  getHighlights,
  getHightlightedStories,
};
