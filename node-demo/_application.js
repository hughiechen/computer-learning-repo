
let http = require('http');
let context = require('./_context');
let request = require('./_request');
let response = require('./_response');
const EventEmitter = require('events').EventEmitter;

/**
 * 一,封装服务类监听端口,执行回调
 * 二,构造request,response,context对象
 * 
 * */
class Application extends EventEmitter {
    constructor() {
        super()
        this.callBackFunc = null;
        this.middleWares = []
    }
    listen(port, cb) {
        let server = http.createServer(this.callBack());
        server.listen(port, cb)
    }
    use(fn) {
        this.callBackFunc = fn;
        this.middleWares.push(fn)
    }
    callBack() {
        return (req, res) => {
            let ctx = this.createContext(req, res);
            let response = () => this.responseBody(ctx)
            let onerror = err => this.onerror(err, ctx)
            let fn = this.compose()
            return fn(ctx).then(response).catch(onerror)
        }
    }
    createContext(req, res) {
        let ctx = Object.create(context);
        ctx.request = Object.create(request);
        ctx.response = Object.create(response);
        ctx.req = ctx.request.req = req;
        ctx.res = ctx.response.res = res
        return ctx
    }
    compose() {
        return async ctx => {
            function createNext(middleWare, oldNext) {
                return async () => {
                    await middleWare(ctx, oldNext)
                }
            }
            let len = this.middleWares.length
            let next = async () => {
                return Promise.resolve()
            }
            for (let i = len - 1; i >= 0; i--) {
                let currentMiddleware = this.middleWares[i];
                next = createNext(currentMiddleware, next)
            }
            await next()
        }
    }
}


module.exports = Application