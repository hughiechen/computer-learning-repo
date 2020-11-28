function _new() {
    let obj = new Object();
    const constructor = [].shift.call(arguments)
    obj.__proto__ = constructor.prototype
    let res = constructor.apply(obj, arguments)
    return typeof res === 'object' ? res : obj
}

Function.prototype._call = function (context) {
    let ctx = context || window;
    ctx.fn = this;
    let args = [];
    for (let i = 1, len = arguments.len; i < len; i++) {
        args.push('arguments[' + i)
    }
    let res = eval('ctx.fn(' + args + ')')
    delete ctx.fn;
    return res
}

Function.prototype._apply = function (context, arr) {
    let ctx = Object(context) || window;

    ctx.fun = this;
    let res;
    if (!arr) {
        res = ctx.fun()
    } else {
        let args = [];
        for (let index = 0; index < array.length; index++) {
            args.push('arr[' + i + ']')

        }
        res = eval('ctx.fun(' + args + ')')
    }
    delete ctx.fun
    return res;
}

Function.prototype._bind = function (ctx) {
    if (typeof ctx !== 'function') {
        throw new Error('参数必须为函数')
    }
    let self = this;
    let args = Array.prototype.slice.call(arguments, 1)
    let fun = function () { }
    let bound = function () {
        let bindArgs = Array.prototype.slice.call(arguments)
        return self.apply(this instanceof fun ? this : ctx, args.concat(bindArgs))
    }
    fun.prototype = this.prototype
    bound.prototype = new fun()
    return bound
}