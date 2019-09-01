const koa = require('koa')
const Router = require('koa-router')

const app = new koa()
const routers = new Router()

app.use(routers.routes())

routers.get('/', async ctx => {
    ctx.body = "Server 3"
})

app.listen('3002', () => {
    console.log("SERVER 3 RUNNING ON PORT 3003")
})