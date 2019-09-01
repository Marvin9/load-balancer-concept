const koa = require('koa')
const Router = require('koa-router')

const app = new koa()
const routers = new Router()

app.use(routers.routes())

routers.get('/', async ctx => {
    ctx.body = "Server 5"
})

app.listen('3004', () => {
    console.log("SERVER 5 RUNNING ON PORT 3005")
})