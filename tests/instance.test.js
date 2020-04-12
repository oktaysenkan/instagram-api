import api from '../src';

describe('creating instance', () => {
  test('it should be throw error not given session id', () => {
    expect(() => {
      api({
        foo: 'bar',
      });
    }).toThrow('Session ID cannot be null');
  });

  test('it should not be throw error given session id', () => {
    expect(() => {
      api({
        sessionId: '123',
      });
    }).not.toThrow();
  });
});
