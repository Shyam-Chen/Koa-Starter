import Koa from 'koa';

const app = new Koa();

app.use(async (ctx) => {
  ctx.body = { hello: 'world' };
});

app.listen(3000);

if (module.hot) {
  module.hot.accept();
}

export default app;
