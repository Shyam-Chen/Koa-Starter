import Router from '@koa/router';

// import service from './service';

const router = new Router({ prefix: '/crud-operations' });

router.post('/', async ctx => {
  ctx.body = {};
});

export default router;
