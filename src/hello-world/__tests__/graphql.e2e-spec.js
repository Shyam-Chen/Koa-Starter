import request from 'supertest';
import { gql } from 'apollo-server-koa';

describe('Hello World', () => {
  it('should get a `Hello, World!`', async () => {
    const { statusCode, body } = await request(global.API_URL)
      .post('/graphql')
      .send({
        query: gql`
          query {
            hello
          }
        `,
      });

    expect(statusCode).toEqual(200);

    expect(body).toEqual({
      data: {
        helloWorld: 'Hello, World!',
      },
    });
  });
});
