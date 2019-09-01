const koa = require('koa')
const LB = new koa()

const serverList = ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002', 
                    'http://localhost:3003', 'http://localhost:3004']
let roundRobin = 0

LB.use(async ctx => {
    if(roundRobin >= serverList.length)
        roundRobin = 0
    let route = ctx.req.url
    ctx.redirect(serverList[roundRobin++])
})

LB.listen('8000', () => {
    console.log("LOAD BALANCER RUNNING ON PORT 8000")
})