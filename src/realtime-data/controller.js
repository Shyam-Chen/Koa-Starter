import Router from '@koa/router';

// import service from './service';

const router = new Router({ prefix: '/realtime-data' });

router.post('/', async ctx => {
  ctx.body = {};
});

export default router;
