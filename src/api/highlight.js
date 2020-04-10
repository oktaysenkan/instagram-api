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

    const { owner } = data.data.user.reel;

    const highlights = {
      owner: {
        id: owner.id,
        username: owner.username,
        pictureUrl: owner.profile_pic_url,
      },
      highlights: medias.map(({ node }) => ({
        id: node.id,
        title: node.title,
        pictureUrl: node.cover_media_cropped_thumbnail.url,
        pictureUrlHD: node.cover_media.thumbnail_src,
      })),
    };

    return Promise.resolve(highlights);
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};

export {
  // eslint-disable-next-line import/prefer-default-export
  getHighlights,
};
