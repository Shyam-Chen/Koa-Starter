import Router from '@koa/router';

import multer from '~/core/multer';

// import service from './service';

const router = new Router({ prefix: '/file-uploads' });

// http POST :3000/file-uploads/single
router.post('/single', multer.single('photo'), async ctx => {
  ctx.body = {
    file: ctx.file,
  };
});

export default router;
