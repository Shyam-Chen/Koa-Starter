import Koa from 'koa';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';

import delay from '~/middlewares/delay';
import sleep from '~/middlewares/sleep';

import recaptcha from '~/modules/recaptcha';

const app = new Koa();

app.use(cors());
app.use(bodyParser());
app.use(logger());
app.use(delay());
app.use(sleep());

app.use(recaptcha.routes(), recaptcha.allowedMethods());

export default app;
