import instance from './instance';

describe('getUser function', () => {
  it('it should be user object given existing username', async () => {
    await expect(instance.getUser('msaistanbul')).resolves.toMatchObject({
      id: expect.any(Number),
      username: expect.any(String),
      fullName: expect.any(String),
      isPrivate: expect.any(Boolean),
      pictureUrl: expect.any(String),
      isVerified: expect.any(Boolean),
    });
  });

  it('it should be error given not existing username', async () => {
    await expect(instance.getUser('$#!')).rejects.toStrictEqual({
      message: 'User not found!',
      status: 404,
    });
  });
});

describe('getProfile function', () => {
  it('it should be profile object given existing user id', async () => {
    await expect(instance.getProfile(37473657)).resolves.toMatchObject({
      username: expect.any(String),
      fullName: expect.any(String),
      isPrivate: expect.any(Boolean),
      isVerified: expect.any(Boolean),
      followerCount: expect.any(Number),
      followingCount: expect.any(Number),
    });
  });

  it('it should be error given not existing user id', async () => {
    await expect(instance.getProfile('$#!')).rejects.toStrictEqual({
      message: 'User not found!',
      status: 404,
    });
  });
});
