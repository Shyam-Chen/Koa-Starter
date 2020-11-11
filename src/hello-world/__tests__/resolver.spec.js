import { graphql, print } from 'graphql';
import { gql } from 'apollo-server-koa';
import { makeExecutableSchema } from '@graphql-tools/schema';

import resolver, { typeDef } from '../resolver';

describe('hello-world', () => {
  it('should get a `Hello, World!`', async () => {
    const schema = makeExecutableSchema({
      typeDefs: typeDef,
      resolvers: resolver,
    });

    const query = gql`
      query {
        hello
      }
    `;

    const response = await graphql(schema, print(query));
    expect(response).toEqual({ data: { hello: 'Hello, World!' } });
  });
});
