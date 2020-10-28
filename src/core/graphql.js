import { ApolloServer } from 'apollo-server-koa';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';

import { HelloWorld } from '~/hello-world';

const typeDefs = mergeTypeDefs([
  HelloWorld.typeDef,
  // ...
]);

const resolvers = mergeResolvers([
  HelloWorld.resolver,
  // ...
]);

export default new ApolloServer({
  typeDefs,
  resolvers,
  // context,
});
