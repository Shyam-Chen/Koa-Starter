import Router from 'koa-router';

const router = new Router();

router.get('/', async ctx => {
  ctx.body = { data: 'Hello, World!' };
});

export default router;
