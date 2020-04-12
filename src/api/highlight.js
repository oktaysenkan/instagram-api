import { http } from '../configs';

const getHighlights = async (userId) => {
  try {
    const { data } = await http.get(
      `https://www.instagram.com/graphql/query/?query_hash=c9100bf9110dd6361671f113dd02e7d6&variables={"user_id":"${userId}","include_highlight_reels":true,"include_reel":true}`,
    );

    const medias = data.data.user.edge_highlight_reels.edges;

    if (!medias.length > 0) {
      return Promise.reject({
        message: 'Highlight not found!',
        status: 404,
      });
    }

    const highlights = medias.map(({ node }) => ({
      id: +node.id,
      title: node.title,
      pictureUrl: node.cover_media_cropped_thumbnail.url,
      pictureUrlHD: node.cover_media.thumbnail_src,
    }));

    return Promise.resolve(highlights);
  } catch (error) {
    return Promise.reject({
      message: 'Highlight not found!',
      status: 404,
    });
  }
};

const getHightlightedStories = async (hightlightedId) => {
  try {
    const { data } = await http.get(
      `https://www.instagram.com/graphql/query/?query_hash=f5dc1457da7a4d3f88762dae127e0238&variables=%7B%22reel_ids%22:%5B%5D,%22tag_names%22:%5B%5D,%22location_ids%22:%5B%5D,%22highlight_reel_ids%22:%5B%22${hightlightedId}%22%5D,%22precomposed_overlay%22:false,%22show_story_viewer_list%22:true,%22story_viewer_fetch_count%22:50,%22story_viewer_cursor%22:%22%22,%22stories_video_dash_manifest%22:false%7D`,
    );

    const medias = data.data.reels_media;

    if (!medias.length > 0) {
      return Promise.reject({
        message: 'Highlight not found!',
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
    return Promise.reject({
      message: 'Highlight not found!',
      status: 404,
    });
  }
};

export {
  // eslint-disable-next-line import/prefer-default-export
  getHighlights,
  getHightlightedStories,
};
