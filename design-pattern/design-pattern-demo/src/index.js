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


class LoginForm {
    constructor(){
        this.state='hide'
    }
    show(){
        if(this.state==='show')
            console.log('had shown');

            return;
        this.state='show'
        console.log('showd');

    }
    hide(){
        if(this.state==='hide')
            console.log('had hidden');
            return;
        this.state='hide'
        console.log('hided');

    }
}
LoginForm.getInstance=(()=>{
    let instance;
    return ()=>{
        if(!instance){
            instance=new LoginForm()
        }   
        return instance
    }
})()
let LoginForm1=LoginForm.getInstance()
LoginForm1.show()
let LoginForm2=LoginForm.getInstance()
LoginForm2.show()