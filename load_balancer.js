const koa = require('koa')
const LB = new koa()
const debug = require('debug')

const serverList = ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002', 
                    'http://localhost:3003', 'http://localhost:3004']

debugServerList = debug('Servers')(serverList)

let roundRobin = 0

LB.use(async ctx => {
    requestCame = debug('Request ')(ctx.req.url)
    if(roundRobin >= serverList.length)
        roundRobin = 0
    let route = ctx.req.url

    if(ctx.req.url === '/')
        ctx.redirect(serverList[roundRobin++])
    else
        ctx.redirect(serverList[roundRobin++]+'/'+ctx.req.url)
    debug('Server used ')(serverList[roundRobin-1])
})

LB.listen('8000', () => {
    console.log("LOAD BALANCER RUNNING ON PORT 8000")
})