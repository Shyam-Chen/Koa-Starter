import request from 'supertest';
import { gql } from 'apollo-server-koa';

describe('Hello World', () => {
  it('should get a `Hello, World!`', async () => {
    // TODO: global.app <- app.callback()
    const { statusCode, body } = await request(global.app)
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
        hello: 'Hello, World!',
      },
    });
  });
});
