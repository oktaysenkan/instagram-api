import { http } from '../configs';

const getPosts = async (userId, first = 10, after = null) => {
  try {
    const afterQuery = after ? `,"after":"${after}"` : '';
    const { data } = await http.get(
      `https://www.instagram.com/graphql/query/?query_hash=e769aa130647d2354c40ea6a439bfc08&variables={"id":"${userId}","first":"${first}"${afterQuery}}`,
    );

    const timeline = data.data.user.edge_owner_to_timeline_media;

    if (!timeline.count > 0) {
      return Promise.reject({
        message: 'Post not found!',
        status: 404,
      });
    }

    const media = timeline.edges;

    const result = {
      posts: media.map(({ node }) => ({
        type: node.is_video ? 'video' : 'image',
        dimensions: node.dimensions,
        displayUrl: node.display_url,
        publishingDate: node.taken_at_timestamp,
        videoUrl: node.video_url && node.video_url,
        caption:
          node.edge_media_to_caption.edges.length > 0
            ? node.edge_media_to_caption.edges[0].node.text
            : '',
        location: node.location && node.location.name,
        preview: node.is_video ? node.edge_media_preview_like.count : null,
        like: !node.is_video ? node.edge_media_preview_like.count : null,
      })),
      pageInfo: {
        hasNextPage: timeline.page_info.has_next_page,
        endCursor: timeline.page_info.end_cursor,
      },
    };

    return Promise.resolve(result);
  } catch (error) {
    return Promise.reject({
      message: 'Post not found!',
      status: 404,
    });
  }
};

export {
  // eslint-disable-next-line import/prefer-default-export
  getPosts,
};
