import Koa from 'koa';
import cors from '@koa/cors';
import ratelimit from 'koa-ratelimit';
import bodyParser from 'koa-bodyparser';
import session from 'koa-generic-session';
import redisStore from 'koa-redis';
import logger from 'koa-logger';

import router from '~/core/router';
import redis from '~/core/redis';
import passport from '~/core/passport';

const app = new Koa();

app.use(cors());
app.use(ratelimit({ driver: 'redis', db: redis }));
app.use(bodyParser());
app.use(session({ store: redisStore({ client: redis }) }));
app.use(logger());

app.use(passport.initialize());
app.use(passport.session());

app.use(router.routes());
app.use(router.allowedMethods());

export default app;
