import Router from 'koa-router';

import helloWorld from '~/hello-world/rest';

const router = new Router();

router.use('/hello-world', helloWorld.routes(), helloWorld.allowedMethods());

export default router;
