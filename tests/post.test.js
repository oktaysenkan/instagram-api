import instance from './instance';

describe('getPosts function', () => {
  it('it should be post object given have correct user id', async () => {
    await expect(instance.getPosts(37473657)).resolves.toMatchObject({
      pageInfo: expect.objectContaining({
        endCursor: expect.anything(),
        hasNextPage: expect.any(Boolean),
      }),
      posts: expect.any(Array),
    });
  });

  it('it should be error given invalid user id', async () => {
    await expect(instance.getPosts(60427654022)).rejects.toStrictEqual({
      message: 'Post not found!',
      status: 404,
    });
  });
});
