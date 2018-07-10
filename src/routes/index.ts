const Router = require('koa-router');
const router = new Router();

router.get('/', async (ctx:any) => {
  ctx.body = {
    status: 'success',
    message: 'sucess'
  };
})

module.exports = router;
