import Router from '@koa/router'
import taskRoutes from './task.routes'

const router = new Router()

router.get('/ping', async ctx => {
  ctx.body = 'pong'
})

router.use('/v1/tasks', taskRoutes.routes())

export default router
