import Router from '@koa/router';

import helloWorld from '../hello-world';

const router = new Router();

router.use(helloWorld.routes(), helloWorld.allowedMethods());

export default router;
