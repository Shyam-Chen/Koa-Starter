import Koa from 'koa';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';

import rest from '~/core/rest';
// import graphql from '~/core/graphql';

const app = new Koa();

app.use(cors());
app.use(bodyParser());
app.use(logger());

app.use(rest.routes());
app.use(rest.allowedMethods());
// graphql.applyMiddleware({ app });

app.listen(3000);

if (module.hot) {
  module.hot.accept();
}

export default app;
