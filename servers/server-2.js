const koa = require('koa')
const Router = require('koa-router')

const app = new koa()
const routers = new Router()

app.use(routers.routes())

routers.get('/', async ctx => {
    ctx.body = "Server 2"
})

app.listen('3001', () => {
    console.log("SERVER 2 RUNNING ON PORT 3001")
})