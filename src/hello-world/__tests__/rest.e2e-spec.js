import request from 'supertest';

describe('hello-world', () => {
  it('should get a `Hello, World!`', async () => {
    const response = await request(global.API_URL).post('/hello-world', {});

    expect(response.statusCode).toEqual(200);
    expect(response.text).toEqual('Hello, World!');
  });
});
