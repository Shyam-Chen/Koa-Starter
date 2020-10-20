import { ApolloServer } from 'apollo-server-koa';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';

// import { helloWorldTypeDef, helloWorldResolver } from '~/hello-world';

const typeDefs = mergeTypeDefs([
  // helloWorldTypeDef,
]);

const resolvers = mergeResolvers([
  // helloWorldResolver,
]);

export default new ApolloServer({
  typeDefs,
  resolvers,
  // context,
});
