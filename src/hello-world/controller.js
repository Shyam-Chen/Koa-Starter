import Router from '@koa/router';

import service from './service';

const router = new Router({ prefix: '/hello-world' });

router.get('/', async ctx => {
  ctx.body = { data: service.sayHello() };
});

export default router;
