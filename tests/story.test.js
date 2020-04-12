import instance from './instance';

describe('getStories function', () => {
  it('it should be story object given have user id with story', async () => {
    await expect(instance.getStories(1997256893)).resolves.toContainEqual(
      expect.objectContaining({
        publishingDate: expect.any(Number),
        url: expect.any(String),
      }),
    );
  });

  it('it should be error given private profile id', async () => {
    await expect(instance.getStories(6042765402)).rejects.toStrictEqual({
      message: 'Story not found!',
      status: 404,
    });
  });
});
