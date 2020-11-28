var cluster = require('cluster')
console.log('started master with ' + process.pid);

cluster.fork()
process.on('SIGHUP', function () {
    console.log('reloading')
    var worker = cluster.fork()
    worker.once('listening', function () {
        for (let id in cluster.workers) {
            if (id === worker.id.toString()) continue;
            cluster.worker[id].kill('SIGTERM')
        }
    })
})