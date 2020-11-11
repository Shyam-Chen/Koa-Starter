import { gql } from 'apollo-server-koa';

import service from './service';

export const typeDef = gql`
  type Query {
    hello(data: String): String
  }
`;

export default {
  Query: {
    // query { hello }
    // query { hello(data: "Koa") }
    hello(parent, args) {
      return service.sayHello(args.data);
    },
  },
};
