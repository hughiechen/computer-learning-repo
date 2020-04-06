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
function bubbleSort3(arr) {
  let flag = true
  for (let i = 0; i < arr.length; i++) {
    flag = false
    for (let j = arr.length - 2; j >= i; j--) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        flag = true
      }

    }
    if (!flag) break;
  }
  return arr
}
let arr = [2, 1, 7, 6, 5, 4, 3, 8, 9]

bubbleSort3(arr)