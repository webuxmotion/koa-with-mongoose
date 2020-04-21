import KoaRouter from 'koa-router'

const router = new KoaRouter()

router.get('/hello', ctx => {
  const name = ctx.query.name || 'world'
  ctx.body = { message: `Hello ${name}!` }
});

export default router
