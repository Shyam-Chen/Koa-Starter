import Router from '@koa/router';

import helloWorld from '~/hello-world';
import crudOperations from '~/crud-operations';
import authentication from '~/authentication';
import fileUploads from '~/file-uploads';
import realtimeData from '~/realtime-data';

const router = new Router();

router.use(helloWorld.routes(), helloWorld.allowedMethods());
router.use(crudOperations.routes(), crudOperations.allowedMethods());
router.use(authentication.routes(), authentication.allowedMethods());
router.use(fileUploads.routes(), fileUploads.allowedMethods());
router.use(realtimeData.routes(), realtimeData.allowedMethods());

export default router;
