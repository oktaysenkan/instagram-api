import instance from './instance';

describe('getHighlights function', () => {
  it('it should be highlight object given have user id with highlight', async () => {
    await expect(instance.getHighlights(37473657)).resolves.toContainEqual(
      expect.objectContaining({
        id: expect.any(Number),
        pictureUrl: expect.any(String),
        pictureUrlHD: expect.any(String),
        title: expect.any(String),
      }),
    );
  });

  it('it should be error given private profile id', async () => {
    await expect(instance.getHighlights(6042765402)).rejects.toStrictEqual({
      message: 'Highlight not found!',
      status: 404,
    });
  });
});

describe('getHightlightedStories function', () => {
  it('it should be story object given have correct highlight id', async () => {
    await expect(instance.getHightlightedStories(17843774746706188)).resolves.toContainEqual(
      expect.objectContaining({
        publishingDate: expect.any(Number),
        type: expect.any(String),
        url: expect.any(String),
      }),
    );
  });

  it('it should be error given invalid highlight id', async () => {
    await expect(instance.getHightlightedStories(12345)).rejects.toStrictEqual({
      message: 'Highlight not found!',
      status: 404,
    });
  });
});
