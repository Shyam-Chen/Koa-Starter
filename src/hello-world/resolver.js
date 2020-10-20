import { gql } from 'apollo-server-koa';

import service from './service';

export const typeDef = gql`
  type Query {
    hello(text: String): String
  }
`;

export default {
  Query: {
    // http POST :3000/graphql query="{ hello }"
    // http POST :3000/graphql query="{ hello('Koa') }"
    hello() {
      return service.sayHello();
    },
  },
};
