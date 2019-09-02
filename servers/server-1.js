const koa = require('koa')
const Router = require('koa-router')

const app = new koa()
const routers = new Router()

app.use(routers.routes())

routers.get('*', async ctx => {
    ctx.body = "Server 1"
})

app.listen('3000', () => {
    console.log("SERVER 1 RUNNING ON PORT 3000")
})