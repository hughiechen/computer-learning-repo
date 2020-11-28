// 将response/request绑定到koa实例
let proto = {}

// 代理setter
function delegateSet(property, name) {
    proto.__defineSetter__(name, function (val) {
        this[property][name] = val;
    });
}
// 代理getter
function delegateGet(property, name) {
    proto.__defineGetter__(name, function () {
        return this[property][name];
    });
}

let requestSet = [];
let requestGet = ['query'];
let responseSet = ['body', 'status'];
let responseGet = responseSet;

for (const ele of requestSet) {
    delegateSet('request', ele);
}

for (const ele of requestGet) {
    delegateGet('request', ele);
}
for (const ele of responseSet) {
    delegateSet('response', ele);
}

for (const ele of responseGet) {
    delegateGet('response', ele);
}
module.exports = proto;