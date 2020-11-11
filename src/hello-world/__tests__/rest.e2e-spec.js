import request from 'supertest';

describe('hello-world', () => {
  it('should get a `Hello, World!`', async () => {
    // TODO: global.app <- app.callback()
    const response = await request(global.app).post('/hello-world', {});
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual({ data: 'Hello, World!' });
  });
});
