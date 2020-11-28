// class People {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     eat() {
//         alert(`${this.name} eat something`)
//     }
//     speak() {
//         alert(`My name is ${this.name}, age ${this.age}`)
//     }
// }
// class Student extends People{
//     constructor(name,age,number){
//         super(name,age)
//         this.number=number
//     }
//     write(){
//         alert(`${this.name} is writing ${this.number} papers`)
//     }
// }
// let haha=new Student("haha",20,60)
// haha.write()

/***************************************************************/
// class jQuery {
//     constructor(selector) {
//         let slice = Array.prototype.slice
//         let dom = slice.call(document.querySelectorAll(selector))
//         let len = dom ? dom.length : 0
//         for (let i = 0; i < len; i++) {
//             this[i] = dom[i]
//         }
//         this.length = len
//         this.selector = selector || ''
//     }
//     append(node) {

//     }
//     addClass(name) {

//     }
//     html(data) {

//     }
//     // 此处省略若干 API
// }
// window.$ = function (selector) {
//     return new jQuery(selector)
// }

/***************************************************************/

// //类 车
// class Car{
//     constructor(number,name){
//         this.number=number
//         this.name=name
//     }
// }
// //快车
// class quickCar extends Car{
//     constructor(number,name){
//         super(number,name)
//         this.price=1
//     }
// }
// //专车
// class specialCar extends Car{
//     constructor(number,name){
//         super(number,name)
//         this.price=10
//     }
// }
// //行程
// class Trip{
//     constructor(car){
//         this.car=car;
//     }
//     start(){
//         console.log(`行程开始：${this.car.name} ,车牌号：${this.car.number}`)
//     }
//     end(){
//         console.log(`行程结束：${this.car.name} ,车牌号：${this.car.number},使用了${this.car.price}元`)
//     }
// }
// let newCar=new quickCar("123456","快车")
// let trip=new Trip(newCar)
// trip.start()
// trip.end()
/***************************************************************/

// class LoginForm {
//     constructor(){
//         this.state='hide'
//     }
//     show(){
//         if(this.state==='show')
//             console.log('had shown');

//             return;
//         this.state='show'
//         console.log('showd');

//     }
//     hide(){
//         if(this.state==='hide')
//             console.log('had hidden');
//             return;
//         this.state='hide'
//         console.log('hided');

//     }
// }
// LoginForm.getInstance=(()=>{
//     let instance;
//     return ()=>{
//         if(!instance){
//             instance=new LoginForm()
//         }
//         return instance
//     }
// })()
// let LoginForm1=LoginForm.getInstance()
// LoginForm1.show()
// let LoginForm2=LoginForm.getInstance()
// LoginForm2.show()

// proxy模式
// let star = {
//   age: "111",
//   name: "hehe",
//   phone: "111333",
//   customPrice: 23
// };

// let agent = new Proxy(star, {
//   get(target, key, val) {
//     if (key === "phone") {
//       return "agent 134";
//     }
//     return target[key];
//   },
//   set(target, key, value) {
//     if (key === "customPrice") {
//       if (value < 100) {
//         throw new Error("价格低");
//       } else {
//         target[key] = value;
//         return true;
//       }
//     }
//   }
// });
// console.log(agent.phone);
// console.log(agent.name);
// console.log(agent.customPrice);
// agent.customPrice = 20;

// 冒泡正序
// function bubbleSort1(arr) {
//   let old = new Date().getTime()

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         let temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp
//       }

//     }
//   }

//   let cur = new Date().getTime()
//   console.log(cur - old)
//   return arr
// }
// let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1]
// bubbleSort1(arr)
// 冒泡倒叙
// function bubbleSort2(arr) {
//   let old = new Date().getTime()
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = arr.length - 2; j >= i; j--) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j]
//         arr[j] = arr[j + 1]
//         arr[j + 1] = temp
//       }
//     }
//   }
//   let cur = new Date().getTime()
//   console.log(cur - old)
//   return arr
// }
// let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1]

// bubbleSort2(arr)

// 冒泡排序优化
// function bubbleSort3(arr) {
//   let flag = true
//   for (let i = 0; i < arr.length; i++) {
//     flag = false
//     for (let j = arr.length - 2; j >= i; j--) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j]
//         arr[j] = arr[j + 1]
//         arr[j + 1] = temp
//         flag = true
//       }

//     }
//     if (!flag) break;
//   }
//   return arr
// }
let arr = [2, 1, 7, 6, 5, 4, 3, 8, 9];

// bubbleSort3(arr)
// 简单选择排序
// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let min = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         min = j;
//       }
//       console.log(i, min, j, arr);
//     }

//     if (min !== i) {
//       let temp = arr[i];

//       arr[i] = arr[min];
//       arr[min] = temp;
//     }
//   }
//   return arr;
// }
// selectionSort(arr);
// 插入排序
// function insertionSort(arr) {
//   if (arr.length <= 1) return arr;
//   // 从1开始是把数组0索引的值当做初始有序表
//   for (let i = 1; i < arr.length; i++) {
//     // 如果后一位比前一位大，说明不用移动数据
//     if (arr[i] >= arr[i - 1]) continue;
//     // 设置哨兵
//     let flag = arr[i];
//     let j = i - 1;
//     // 遍历未排序表，小的移位到前面，终止条件是找到哨兵适合所在的位置
//     for (; arr[j] > flag; j--) {
//       arr[j + 1] = arr[j];
//     }
//     // 此时j+1是哨兵对应要插入的位置
//     arr[j + 1] = flag;
//   }
//   return arr;
// }
// insertionSort(arr);

// 希尔排序
// function shellSort(arr) {
//   let increment = arr.length;
//   // 增量序列为increment=increment*3+1(1,4,13,40...)时，时间复杂度为O(n^(3/2))
//   while (increment > 1) {
//     increment = Math.floor(increment / 3) + 1;
//     for (let i = increment; i < arr.length; i++) {
//       // 如果第i位数值小于第i-increment位数值，则进行交换
//       if (arr[i] >= arr[i - increment]) continue;
//       // 设置哨兵
//       let flag = arr[i];
//       // 内循环，将索引相距increment的数值作为子集，进行插入排序
//       let j = i - increment;
//       for (; j >= 0; j -= increment) {
//         // 找到哨兵所在的位置,则退出循环
//         if (arr[j] <= flag) break;
//         // 否则，进行记录后移
//         arr[j + increment] = arr[j];
//       }
//       // 哨兵值插入对应位置
//       arr[j + increment] = flag;
//     }
//   }
//   return arr;
// }
// shellSort(arr);

// 快速排序
// function quickSort(arr) {
//   qSort(arr, 0, arr.length - 1);
// }

// function qSort(arr, low, high) {
//   // 设置枢轴值，使得它左边的值都比它小，右边的值都比它大
//   let pivot;
//   if (low < high) {
//     // 将数组一分为二，算出枢轴值
//     pivot = partition(arr, low, high);
//     // 分别对低子表和高子表递归排序
//     qSort(arr, low, pivot - 1);
//     qSort(arr, pivot + 1, high);
//   }
// }

// // 交换顺序表中子表的记录，找到枢轴值，并返回它所在位置
// function partition(arr, low, high) {
//   let pivotKey;
//   // 用字表的第一个记录作枢轴记录
//   pivotKey = arr[low];
//   while (low < high) {
//     while (low < high && arr[high] >= pivotKey) {
//       high--;
//     }
//     // 将比枢轴记录小的值交换到低端
//     [arr[low], arr[high]] = [arr[high], arr[low]];
//     while (low < high && arr[low] <= pivotKey) {
//       low++;
//     }
//     // 将比枢轴记录大的值交换到高端
//     [arr[low], arr[high]] = [arr[high], arr[low]];
//   }
//   return low;
// }
// quickSort(arr);

// 单例
// class S {
//   static getX() {
//     if (!S.X) {
//       S.X = new S();
//     }
//     return S.X;
//   }
//   getP() {
//     return this.property;
//   }
//   setP(p) {
//     this.property = p;
//   }
// }

// let a = S.getX();
// let b = S.getX();
// a.setP("1");
// console.log(b.getP());

// 迭代器模式
// class Iterator {
//   constructor(container) {
//     this.list = container.list;
//     this.current = 0;
//   }
//   next() {
//     if (this.hasNext()) {

//       return this.list[this.current++];
//     }
//   }
//   hasNext() {
//     if (this.current >= this.list.length) {
//       return false;
//     }
//     return true;
//   }
// }
// class Container {
//   constructor(list) {
//     this.list = list;
//   }
//   getIterator() {
//     return new Iterator(this);
//   }
// }
// const iterable = new Container([0, 1, 2, 3, 4, 5, 6]).getIterator();
// console.log(iterable)
// while (iterable.hasNext()) {
//   console.log(iterable.next());
// }

// 适配器模式
// class Adaptee {
//   specificRequest() {
//     return '原有的内容'
//   }
// }
// class Target {
//   constructor() {
//     this.adaptee = new Adaptee()
//   }
//   curRequest() {
//     return `${this.adaptee.specificRequest()}->新有的内容`
//   }
// }
// let target = new Target()
// console.log(target.curRequest())

// 装饰器模式
// class Circle {
//   draw() {
//     console.log('画圆')
//   }
// }
// class Decorator {
//   constructor(circle) {
//     this.circle = circle
//   }
//   draw() {
//     this.circle.draw()
//     this.setBorder()
//   }
//   setBorder() {
//     console.log('设置一个边框')
//   }
// }
// let circle = new Circle()
// let dec = new Decorator(circle)
// dec.draw()
// function readOnly(target, name, descriptor) {
//   console.log(target, name, descriptor)
//   let oldVal = descriptor.value
//   descriptor.value = () => {
//     return oldVal.apply(this, arguments)
//   }
//   descriptor.writable = false;
//   return descriptor
// }

// function mixin(...options) {
//   return function (target) {
//     Object.assign(target.prototype, ...options)
//   }
// }
// const Foo = {
//   i: 1,
//   bar() {
//     console.log('我是bar')
//   }
// }

// @mixin(Foo)
// class Client {
//   init() {
//     this.bar()
//   }
// }

// class Person {
//   @readOnly
//   name() {
//     return 'foo'
//   }
// }
// console.log(new Person().name())
// new Client().init()
// 观察者模式
// class Observer {
//   constructor(name, Subject) {
//     this.name = name
//     this.subject = Subject
//     this.subject.attach(this)
//   }
//   update() {
//     console.log(`${this.name}:${this.subject.getState()}`)
//   }
// }
// class Subject {
//   constructor() {
//     this.Observers = []
//     this.state = '初始化'

//   }
//   getState() {
//     return this.state
//   }
//   setState(state) {
//     this.state = state
//     this.notifyAllObservers()
//   }
//   attach(observer) {
//     this.Observers.push(observer)
//   }
//   notifyAllObservers() {
//     for (const observer of this.Observers) {
//       observer.update()
//     }
//   }
// }
// let sub = new Subject()
// let ob1 = new Observer('o1', sub)
// let ob2 = new Observer('o2', sub)

// sub.setState('改变1次')
// sub.setState('改变2次')
// *****************************************************
// 类继承
// let extendObj = function (parent, child) {
//   let tmpObj = function () {}
//   tmpObj.prototype = parent.prototype
//   child.prototype = new tmpObj()
//   child.prototype.constructor = child
// }

// let Human = function () {}
// Human.prototype = {
//   hair: true,
//   speak() {
//     console.log(this.hair)
//   }
// }

// let Male = function () {}
// extendObj(Human, Male)
// let hehe = new Male()
// Male.prototype.hair = false
// console.log(Human.prototype.speak())
// hehe.speak()
// 函数继承
// let Human = function () {
//   let that = {};
//   that.hair = true;
//   that.speak = function () {
//     console.log(that.hair);
//   };
//   return that;
// };

// let Male = function () {
//   let that = Human();
//   return that;
// };
// let hehe = Male();
// hehe.hair = false;
// hehe.speak();

// 原型继承
if (!Object.hasOwnProperty('create')) {
  console.log(11111);
  Object.prototype.create = function (target) {
    function temp() {}
    temp.prototype = target;
    return new temp();
  };
}
let Human = function () {};
Human.prototype = {
  hair: true,
  speak() {
    console.log(this.hair);
  },
};
let man = function () {
  Human.call(this);
  this.hair = false;
};
man.prototype = Object.create(Human.prototype);
man.prototype.constructor = man;

let hehe = new man();
hehe.speak();
