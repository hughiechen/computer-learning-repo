const queuedObservers = new Set();
const observe = fn => queuedObservers.add(fn);
const observable = obj => new Proxy(obj, { set })
const person = observable({
    name: 'hh',
    age: 20
})

function print() {
    console.info(`${person.name} ${person.age}`)
}
function set(target, prop, value, receiver) {
    const result = Reflect.set(...arguments)
    queuedObservers.forEach(fn => fn())
    return result
}
observe(print)
person.name = 222

