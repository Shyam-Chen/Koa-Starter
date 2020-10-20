import Router from '@koa/router';

import service from './service';

const router = new Router({ prefix: '/hello-world' });

// http POST :3000/hello-world
// http POST :3000/hello-world data=Koa
router.post('/', async ctx => {
  ctx.body = {
    data: service.sayHello(ctx.request.body.data),
  };
});

export default router;
