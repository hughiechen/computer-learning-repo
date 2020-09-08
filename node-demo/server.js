// fs模块
// var fs = require('fs');
// var rs = fs.createReadStream('test.md', { highWaterMark: 11 });
// rs.setEncoding('utf8')
// var data = '';
// rs.on("data", function (chunk) {
//     data += chunk;
//     console.log(chunk)
// });
// rs.on("end", function () {
//     console.log(data);
// });

// TCP服务
// var net = require('net');
// var server = net.createServer(function (socket) {
//     socket.on('data', function (data) {
//         socket.write("hi")
//     });
//     socket.on('end', function () {
//         console.log('disconnect');
//     });
//     socket.write("welcome");
// });
// server.listen(8125, function (s) {
//     console.log('server bound');
// });

// UDP服务
// var dgram = require('dgram');
// var server = dgram.createSocket("udp4");
// server.on("message", function (msg, rinfo) {
//     console.log("server got: " + msg + " from " +
//         rinfo.address + ":" + rinfo.port);
// });
// server.on("listening", function () {
//     var address = server.address();
//     console.log("server listening " +
//         address.address + ":" + address.port);
// });
// server.bind(41234);

// cluster.js
// const cluster = require('cluster');
// const http = require('http');
// const numCPUs = require('os').cpus().length;

// if (cluster.isMaster) {
//     // console.log(`Master ${process.pid} is running`);

//     // // Fork workers.
//     // for (let i = 0; i < numCPUs; i++) {
//     //     cluster.fork();
//     // }
//     // cluster.on('online', (worker) => {
//     //     console.log(`worker ${worker.process.pid}`)
//     // })
//     // cluster.on('exit', (worker, code, signal) => {
//     //     console.log(`worker ${worker.process.pid} died`);
//     //     cluster.fork();

//     // });
//     require('./master')
// } else {
//     // Workers can share any TCP connection
//     // In this case it is an HTTP server
//     http.createServer((req, res) => {
//         res.writeHead(200);
//         res.end('hello world\n');
//     }).listen(8000);

// }
// var Benchmark = require('benchmark');
// var suite = new Benchmark.Suite();
// var arr = [0, 1, 2, 3, 5, 6];
// suite.add('nativeMap', function () {
//     return arr.map(callback);
// }).add('customMap', function () {
//     var ret = [];
//     for (var i = 0; i < arr.length; i++) {
//         ret.push(callback(arr[i]));
//     }
//     return ret;
// }).on('cycle', function (event) {
//     console.log(String(event.target));
// }).on('complete', function () {
//     console.log(this)
// }).run();

// const express = require('express');

// // custom middleware create
// const LoggerMiddleware = (req, res, next) => {
//     console.log(`Logged  ${req.url}  ${req.method} -- ${new Date()}`)
//     next();
// }

// const app = express()
// const router = express.Router()


// // application level middleware
// router.use(LoggerMiddleware)
// // users route
// router.get('/users', (req, res) => {
//     res.json({
//         'status': true
//     })
// })


// // save route
// router.post('/save', (req, res) => {
//     res.json({
//         'status': true
//     })
// })
// app.use('/', router)
// app.listen(3002, (req, res) => {
//     console.log('server running on port 3002')
// })

// const connect = require('express')

// const app = connect()

// app.use(function m1(req, res, next) {
//     console.log('m1')
//     next()
//     console.log('m1 end')
// })

// app.use(function m2(req, res, next) {
//     console.log('m2')
//     next()
//     console.log('m2 end')
// })

// app.use(function m3(req, res, next) {
//     console.log('m3')
//     res.end('hello')
// })

// app.listen(8080)

// let Koa = require('./_application')
// let app = new Koa();
// app.on('error', err => {
//     console.log('error happends: ', err.stack);
// });
// app.use(async (ctx, next) => {
//     console.log(1);
//     await next();
//     console.log(6);
// });

// app.use(async (ctx, next) => {
//     console.log(2);
//     await next();
//     console.log(5);
// });

// app.use(async (ctx, next) => {
//     console.log(3);
//     ctx.body = "hello world";
//     console.log(4);
// });

// app.listen(8080, () => {
//     console.log(`listening 8080`)
// })

var cluster = require('cluster');

if (cluster.isMaster) {
    require('./master');
    return;
}

var express = require('express');
var http = require('http');

var app = express();
app.use((res, req, next) => {
    console.log(1111111)
    next()
})
app.all('*', (req, res, next) => {
    // 处理跨域
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    res.header('Access-Control-Allow-Methods', "PUT,POST,GET,DELETE,OPTIONS");
    res.header('Content-Type', 'application/json;charset=utf-8');
    next()

})
app.get('/', function (req, res) {
    res.send('ha fsdgfds gfds gfd!');
    console.log(222222)

});

http.createServer(app).listen(8080, function () {
    console.log('http://localhost:8080');
});
console.log('start')
setTimeout(() => {
    console.log('timer1')
    Promise.resolve().then(function () {
        console.log('promise1')
    })
}, 0)
setTimeout(() => {
    console.log('timer2')
    Promise.resolve().then(function () {
        console.log('promise2')
    })
}, 0)
Promise.resolve().then(function () {
    console.log('promise3')
})
console.log('end')

