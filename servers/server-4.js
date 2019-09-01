const koa = require('koa')
const Router = require('koa-router')

const app = new koa()
const routers = new Router()

app.use(routers.routes())

routers.get('/', async ctx => {
    ctx.body = "Server 4"
})

app.listen('3003', () => {
    console.log("SERVER 4 RUNNING ON PORT 3004")
})