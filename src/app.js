import Koa from 'koa';
import cors from '@koa/cors';
// import ratelimit from 'koa-ratelimit';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';

import router from './core/router';
// import redis from '~/core/redis';

const app = new Koa();

app.use(cors());
// app.use(ratelimit({ driver: 'redis', db: redis }));
app.use(bodyParser());
app.use(logger());

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
