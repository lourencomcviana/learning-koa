import Router from 'koa-router';

const router = new Router();

router.get('/', async (ctx:any) => {
  ctx.body = {
    status: 'success',
    message: 'success'
  };
})

export= router;
