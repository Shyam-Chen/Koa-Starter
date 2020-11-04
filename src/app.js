import Koa from 'koa';
import cors from '@koa/cors';
// import ratelimit from 'koa-ratelimit';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';

import rest from '~/core/rest';
import graphql from '~/core/graphql';
// import redis from '~/core/redis';

const app = new Koa();

app.use(cors());
// app.use(ratelimit({ driver: 'redis', db: redis }));
app.use(bodyParser());
app.use(logger());

app.use(rest.routes());
app.use(rest.allowedMethods());
graphql.applyMiddleware({ app });

export default app;
