const Vue = require('vue');
const server = require('express')();
const renderer = require('vue-server-renderer').createRenderer()
server.get('*', (req, res) => {
    const app = new Vue({
        data() {
            return {
                url: req.url
            }
        },
        template: `<div>访问的 URL 是： {{ url }}</div>`
    })
    renderer.renderToString(app, (err, html) => {
        if (err) {
            res.status(500).end('有毒')
        }
        res.end(`
        <!DOCTYPE html>
        <html lang="en">
          <head><title>Hello</title></head>
          <body>${html}</body>
        </html>
      `)
    })
})
server.listen(8080);
