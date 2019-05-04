import Koa from 'koa';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';

import routes from '~/core/rest';

const app = new Koa();

app.use(cors());
app.use(bodyParser());
app.use(logger());

app.use(routes.routes());
app.use(routes.allowedMethods());

app.listen(3000);

if (module.hot) {
  module.hot.accept();
}

export default app;
