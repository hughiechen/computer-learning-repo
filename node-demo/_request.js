let url = require('url');
module.exports = {
    get query() {
        console.log(url.parse(this.req.url, true))
        return url.parse(this.req.url, true).query
    }
}