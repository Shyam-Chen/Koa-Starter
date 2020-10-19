import Koa from 'koa';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';

import router from '~/core/router';

const app = new Koa();

app.use(cors());
app.use(bodyParser());
app.use(logger());

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);

if (module.hot) {
  module.hot.accept();
}

export default app;
