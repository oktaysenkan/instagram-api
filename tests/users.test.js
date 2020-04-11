import instance from './instance';

describe('getUser function', () => {
  it('it should be object given existing username', async () => {
    await expect(instance.getUser('msaistanbul')).resolves.toMatchObject({
      id: '37473657',
    });
  });

  it('it should be error given not existing username', async () => {
    await expect(instance.getUser('$#!')).rejects.toStrictEqual({
      message: 'User not found!',
      status: 404,
    });
  });
});
