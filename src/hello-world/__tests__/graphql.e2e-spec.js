import request from 'supertest';
import { gql } from 'apollo-server-koa';

describe('hello-world', () => {
  it('should get a `Hello, World!`', async () => {
    // TODO: global.app <- app.callback()
    const response = await request(global.app).post('/graphql', {
      query: gql`
        query {
          hello
        }
      `,
    });

    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual({ data: { hello: 'Hello, World!' } });
  });
});
