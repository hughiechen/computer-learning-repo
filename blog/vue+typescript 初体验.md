
![](https://user-gold-cdn.xitu.io/2019/5/20/16ad5a0ea9cdb80a?w=91&h=96&f=png&s=21892)
# <font color="#0099ff">前言</font>
****
> &nbsp;&nbsp;听说**typescript**最近越来越流行，借着开启新项目，用**vue + typescrip**t尝试了下。夏日炎炎，趁着乘凉的略微时间，进行一下项目总结，望大佬们多多指点！
# <font color="#0099ff">项目配置</font>
****

##   **初始化**  
   `vue-cli3`脚手架走一波，手动选择使用`typescript`，`blablabla...`具体就不细说啦. 首先附上一份官方目录配置：

```
├── public                          // 静态页面
├── src                             // 主目录
    ├── assets                      // 静态资源
    ├── components                  // 组件
    ├── views                       // 页面
    ├── App.vue                     // 页面主入口
    ├── main.ts                     // 脚本主入口
    ├── registerServiceWorker.ts    // PWA 配置
    ├── router.ts                   // 路由
    ├── shims-tsx.d.ts              // 相关 tsx 模块注入
    ├── shims-vue.d.ts              // Vue 模块注入
    └── store.ts                    // vuex 配置
├── tests                           // 测试用例
├── .postcssrc.js                   // postcss 配置
├── package.json                    // 依赖
├── tsconfig.json                   // ts 配置
└── tslint.json                     // tslint 配置
```
然后附上个人的目录

```
├── public                          // 静态页面
├── src                             // 主目录
    ├── api                         // 后端接口
    ├── assets                      // 静态资源
    ├── components                  // 组件
    ├── filters                     // 过滤
    ├── router                      // 路由配置
    ├── store                       // vuex 配置
    ├── utils                       // 工具方法
    ├── mixins                      // 混合
    ├── views                       // 页面
    ├── App.vue                     // 页面主入口
    ├── main.ts                     // 脚本主入口
    ├── registerServiceWorker.ts    // PWA 配置
    ├── shims-tsx.d.ts              // 相关 tsx 模块注入
    ├── shims-vue.d.ts              // Vue 模块注入
├── tests                           // 测试用例
├── .editorconfig                   // 编辑相关配置
├── .npmrc                          // npm 源配置
├── .postcssrc.js                   // postcss 配置
├── babel.config.js                 // preset 记录
├── cypress.json                    // e2e plugins
├── package.json                    // 依赖
├── README.md                       // 项目 readme
├── tsconfig.json                   // ts 配置
├── tslint.json                     // tslint 配置
└── vue.config.js                   // webpack 配置
```
## **ts相关配置**<br>
#### `tsconfig.json` 配置
<br>首先贴一份网上找的配置，传送门：[官方完整配置](http://www.typescriptlang.org/docs/handbook/compiler-options.html)

```
{
  // 编译选项
  "compilerOptions": {
    // 输出目录
    "outDir": "./output",
    // 是否包含可以用于 debug 的 sourceMap
    "sourceMap": true,
    // 以严格模式解析
    "strict": true,
    // 采用的模块系统
    "module": "esnext",
    // 如何处理模块
    "moduleResolution": "node",
    // 编译输出目标 ES 版本
    "target": "es5",
    // 允许从没有设置默认导出的模块中默认导入
    "allowSyntheticDefaultImports": true,
    // 将每个文件作为单独的模块
    "isolatedModules": false,
    // 启用装饰器
    "experimentalDecorators": true,
    // 启用设计类型元数据（用于反射）
    "emitDecoratorMetadata": true,
    // 在表达式和声明上有隐含的any类型时报错
    "noImplicitAny": false,
    // 不是函数的所有返回路径都有返回值时报错。
    "noImplicitReturns": true,
    // 从 tslib 导入外部帮助库: 比如__extends，__rest等
    "importHelpers": true,
    // 编译过程中打印文件名
    "listFiles": true,
    // 移除注释
    "removeComments": true,
    "suppressImplicitAnyIndexErrors": true,
    // 在 .tsx文件里支持JSX： "React"或 "Preserve"。查看 JSX
    "jsx": "preserve",
    // 允许编译javascript文件
    "allowJs": true,
    // 解析非相对模块名的基准目录
    "baseUrl": "./",
    // 指定特殊模块的路径
    "paths": {
      "jquery": [
        "node_modules/jquery/dist/jquery"
      ]
    },
    // 编译过程中需要引入的库文件的列表
    "lib": [
      "dom",
      "es2015",
      "es2015.promise"
    ]
  }
}
```
&nbsp;&nbsp;&nbsp;然后再贴一份自己的配置，可以根据个人定制, 其中，<em>如果指定了<font color="#0099ff">exclude</font>选项，编译器会包含当前目录及子目录下的所有TypeScript文件（*.ts 或 *.tsx），不包括这些指定要排除的文件</em>

```
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "strict": false,
    "jsx": "preserve",
    "importHelpers": true,
    "moduleResolution": "node",
    "experimentalDecorators": true,
    "strictFunctionTypes": false,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "sourceMap": true,
    "baseUrl": ".",
    "types": [
      "webpack-env",
      "mocha",
      "chai"
    ],
    "paths": {
      "@/*": [
        "src/*"
      ]
    },
    "lib": [
      "esnext",
      "dom",
      "dom.iterable",
      "scripthost"
    ]
  },
  "files": [
    "shims-vue.d.ts"
  ],
  "include": [
    "src/**/*.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "tests/**/*.ts",
    "tests/**/*.tsx"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

####  `tslint.json` 配置

```
{
  "defaultSeverity": "error",
  "jsRules": {},
  "rules": {
    // 允许使用 console
    "no-console": false,
    // 单引号
    "quotemark": false,
    // 设置修饰符顺序
    "member-ordering": [
      true,
      {
      "order": [
          "public-static-field",
          "public-static-method",
          "protected-static-field",
          "protected-static-method",
          "private-static-field",
          "private-static-method",
          "public-instance-field",
          "protected-instance-field",
          "private-instance-field",
          "public-constructor",
          "protected-constructor",
          "private-constructor",
          "public-instance-method",
          "protected-instance-method",
          "private-instance-method"
        ]
      }
    ],

    // 允许带一个参数的箭头函数省去括号
    "arrow-parens": [
      true,
      "ban-single-arg-parens"
    ],

    // 对齐方式
    "align": [
      true,
      "parameters",
      "statements",
      "members",
      "elements"
    ]
  },
  "rulesDirectory": []
}
```

#### jsx支持<br>
在vue-cli3 默认可以选择设置支持`jsx`了，具体相关的配置在`tsconfig.json`：

```
{
    "compilerOptions": {
        "jsx": "preserve"
    }，
    "include": [
        "src/**/*.ts",
        "src/**/*.tsx",
        "src/**/*.vue",
        "tests/**/*.ts",
        "tests/**/*.tsx"
    ]
}
``` 
# <font color="#0099ff">typescript基础使用</font>

## **1）数据类型**
<br>typescript中数据类型有<font color="#d14">Boolean，Number，String，Array，Tuple，Enum，Any，Void，Null，Undefined，Never</font>，如下图:
![](https://user-gold-cdn.xitu.io/2019/4/5/169ec2fab43767c4?w=396&h=445&f=png&s=56775)
#### 定义<font color="#d14">Boolean</font><br>
`       let isDone: boolean = false`
#### 定义<font color="#d14">String</font><br>
` let color: string = "blue"`
#### 定义<font color="#d14">Number</font><br>
` let decimal: number = 6;`
#### 定义<font color="#d14">Array</font><br>
有两种方式：<br>
```
//第一种：在元素类型后面用中括号([])来表示这种类型元素的数组
 let list: number[] = [1, 2, 3];
 
 //第二种：使用泛型创建类型数组,Array<elemType/ *数组元素的类型* />
 let list: Array<number> = [1, 2, 3];
```
#### 定义<font color="#d14">Any</font> 
  any 类型，则允许被赋值为任意类型<br>
` let notSure: any = 4;`
#### 定义<font color="#d14">Enum(枚举)</font>
TypeScript增加了一个很实用的<font color="#d14">Enum</font>类型。比如C#，枚举给了我们更友好的名称(数字类型)来辨别数值集合<br>

```
    enum Color {Red = 1, Green = 2, Blue = 4}
    let c: Color = Color.Green;
```
#### 定义<font color="#d14">void</font>
可以用 void 表示没有任何返回值的函数， 也可以声明一个 void 类型的变量，不过只赋值为  <font color="#d14">undefined</font>和<font color="#d14">null</font> <br>
```
function warnUser(): void {
    console.log("This is my warning message");
}
```
#### 定义<font color="#d14">Null and Undefined</font>

```
    let u: undefined = undefined;
    let n: null = null;
```
<font color="#d14">undefined</font> 类型的变量只能被赋值为<font color="#d14">undefined</font>，<font color="#d14">null</font> 类型的变量只能被赋值为 <font color="#d14">null</font>。

与 <font color="#d14">void</font> 的区别是，<font color="#d14">undefined</font> 和 <font color="#d14">null</font> 是所有类型的子类型, <font color="#d14">undefined</font>和<font color="#d14">null</font> 类型的变量，可以赋值给 <font color="#d14">number</font> 类型的变量，而<font color="#d14">void</font>则不行
## **2）函数**
    
#### **函数定义(`define`)**<br>
`typescript`中函数定义有函数声明法、直接量式等,和`es6`差不多，不过就多了参数类型的定义

#### 函数声明法

```
function add(x: number, y: number): number {
    return x + y;
}
```
`add`函数定义了参数x和y都是`number`类型，返回值也是`number`类型，如果传入参数或返回值不是`number`类型，就会报错

#### **直接量式**<br>
如下：
```
    var getInfo=function(name:string,age:number):string{
        return `${name} --- ${age}`;
    }
```

#### **没有返回值时**<br>
使用<font color="#d14">void</font> 标识
```
    function run():void{

        console.log('run')
    }
```

#### **可选参数(Optional)**<br>
定义可选参数在传参数时添加<font color="#d14">？</font>就行，传参时可以传也可以不传

```
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob"); 
```
#### **默认参数(`Default`)**<br>
`ts`默认参数与`es6`默认参数定义一样
```
    function getInfo(name:string,age:number=20):string{
        if(age){

            return `${name} --- ${age}`;
        }else{

            return `${name} ---年龄保密`;
        }
    }
```
#### **剩余参数(`Rest`)**<br>
就是使用拓展字符<font color="#d14">...</font>，接收其余的参数
```
function sum(a:number,b:number,...result:number[]):number{
    var sum=a+b;
    for(var i=0;i<result.length;i++){
        sum+=result[i];  
    }
    return sum;
}
    alert(sum(1,2,3,4,5,6)) ;
```
#### **函数重载**<br>
与`es5`中重复定义函数会造成替换不同，`typecript`中的重载是为同一个函数提供多个函数类型定义来达到处理不同函数参数的情况，实现不同的逻辑功能
```
    function getInfo(name:string):string;
    function getInfo(name:string,age:number):string;
    function getInfo(name:any,age?:any):any{
        if(age){

            return '我叫：'+name+'我的年龄是'+age;
        }else{

            return '我叫：'+name;
        }
    }
    
    alert(getInfo('zhangsan')) //我叫：zhangsan
```
##  **3）类(`class)`**<br>    
    
#### **<font color="#d14">class定义</font>**<br>
`class`定义时对属性和方法进行类型约束
```
    class Person{
        name:string; //属性  前面省略了public关键词
        constructor(n:string){  
            //构造器
            this.name=n;
        }
        run():void{
            alert(this.name);
        }
    }
    var p=new Person('张三');
    p.run()
```
#### **<font color="#d14">class继承</font>**<br>
继承和es6的写法一样，用`extends`和`super`继承父类

```
    class Person{
        name:string;
        constructor(name:string){
             this.name=name;
         }
         run():string{
             return `${this.name}在运动`
         }
    }
    class Web extends Person{
        constructor(name:string){
            super(name);  /*初始化父类的构造函数*/
        }
    }
    var w=new Web('李四');
    alert(w.run());
```
#### <font color="#d14">class修饰符</font><br>
`typescript`有三种修饰符，`public`、`protected`、`private`，属性如果不加修饰符 默认就是 公有 （`public`）;如下：<br>

![](https://user-gold-cdn.xitu.io/2019/5/3/16a7e0afd5b73b9f?w=617&h=241&f=png&s=20689)
<font color="#d14">public</font>属性当前类、外部、子类都可以访问
```
class Person{

    public name:string;  /*公有属性*/

    constructor(name:string){
        this.name=name;
    }

    run():string{

        return `${this.name}在运动`
    }
}

var  p=new Person('哈哈哈');

alert(p.name);
```
- - -
<font color="#d14">protected</font>：保护类型，在类里面、子类里面可以访问 ，在类外部没法访问

```
class Person{
    protected name:string;  /*保护类型*/
    constructor(name:string){
        this.name=name;
    }
    run():string{
        return `${this.name}在运动`
    }
}
var  p=new Person('哈哈哈');
alert(p.name);
```
类外部访问会报错
![](https://user-gold-cdn.xitu.io/2019/5/3/16a7e11d99c1ba05?w=646&h=169&f=png&s=27581)
- - -
<font color="#d14">private</font> ：私有属性，在类里面可以访问，子类、类外部都没法访问

```
class Person{

    private name:string;  /*私有*/

    constructor(name:string){
        this.name=name;
    }

    run():string{

        return `${this.name}在运动`
    }
}


class Web extends Person{

    constructor(name:string){
        super(name)
    }

    work(){

        console.log(`${this.name}在工作`)
    }
}
```
子类访问会报错
![](https://user-gold-cdn.xitu.io/2019/5/3/16a7e16b921f5adb?w=603&h=161&f=png&s=28698)
- - -
####  **抽象类(`abstract`)**<br> 
typescript中的抽象类使用`abstract`定义，它是提供其他类继承的基类，不能直接被实例化。抽象类中`abstract`定义的抽象方法不包含具体实现，但必须在派生类中实现。<br>
首先使用`abstract`定义抽象类`Animal`和抽象方法`eat`

```
abstract class Animal {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract eat(): any; //抽象方法不包含具体实现并且必须在派生类中实现。
  run() {
    console.log("其他方法可以不实现");
  }
}
```
然后在子类`Dog`实现具体方法`eat`，<br>

```
class Dog extends Animal {
  //抽象类的子类必须实现抽象类里面的抽象方法
  constructor(name: any) {
    super(name);
  }
  eat() {
    console.log(this.name + "吃粮食");
  }
}

var d = new Dog("小花花");
d.eat();
```
如果没有定义`eat`方法,就会报错；

![](https://user-gold-cdn.xitu.io/2019/5/4/16a81f718253bbd6?w=729&h=292&f=png&s=45731)
    
##  **4）接口(`Interfaces`)**<br>   
>在 TypeScript 中，我们可以使用<font color="#d14">接口（Interfaces）</font> 定义来对属性、函数、类、可索引数组或对象进行规范和限制

#### **属性接口**<br>
属性接口一般是对json对象类型的约束，定义如下：
```
interface FullName{
firstName:string;  //注意;结束
readonly secondName:string;
optionalVal?:string;
}
function printName(name:FullName){
// 必须传入对象  firstName  secondName
console.log(name.firstName+'--'+name.secondName);
}
var obj={   /*传入的参数必须包含 firstName  secondName*/
age:20,
firstName:'张',
secondName:'三'
};
printName(obj);
```
上面`interface`定义了一个接口<font color="#d14">FullName</font> ，接着定义了一个变量 <font color="#d14">obj</font>传入printName中，它的键值必须具有 <font color="#d14">FullName</font>中定义的firstName和secondName，且类型必须相同。这样，我们就约束了<font color="#d14">obj</font>  的数据类型必须和接口 <font color="#d14">FullName</font> 一致.

其中<font color="#d14">readonly</font>是只读的意思，不能重新赋值，与<font color="#d14">const</font>的区别在于，<font color="#d14">const</font>用于定义<font color="#1CD6D8">变量</font>，<font color="#d14">readonly</font>用于定义<font color="#1CD6D8">属性</font>;<br>

而定义时<font color="#d14">optionalVal</font>后添加<font color="#d14">?</font>号，表示这个是可选的属性，传入时可有可无
#### 函数类型接口<br>
函数类型接口定义时对传入参数和返回值进行约束。

```
// 加密的函数类型接口
interface encrypt{
(key:string,value:string):string;
}
var md5:encrypt=function(key:string,value:string):string{
    //模拟操作
    return key+value;
}
console.log(md5('name','zhangsan'));
```
上面定义了`encrypt`函数接口，规定了传入参数和返回值都是`string`类型。
* **可索引类型接口**<br>
`TypeScript` 定义数组或对象接口时，索引签名必须是 `string` 或者 `number` 或`symbols`<br>
```
//定义数组接口
interface UserArr{
    [index:number]:string
}
var arr:UserArr=['aaa','bbb'];
console.log(arr[0]);

//定义对象接口
interface UserObj{
    [index:string]:string
}
var arr:UserObj={name:'张三'};
```
#### **class类型接口**<br>
定义`class`类型接口和抽象类差不多，不过是使用`implements`来实现具体的派生类，`implements`这个单词有器具、工具、落实、实现的意思。看看怎
样`implements`:

```
//定义class类型
interface Animal {
name: string;
eat(str: string): void;
}

class Cat implements Animal {
name: string;
constructor(name: string) {
this.name = name;
}
eat(food: string) {
console.log(this.name + "吃" + food);
}
}

var c = new Cat("小花");
c.eat("什么猫砂？");
```
`Animal`有`name`属性和`eat`方法，`Cat`实现`Animal`这个类，同样必须有`name`和`eat`方法

#### **接口扩展**<br>
接口的扩展相当于接口的继承，使用`extends`进行继承。

```
interface Animal{
    eat():void;
}
interface Person extends Animal{
    work():void;
}

class Programmer{
    public name:string;
    constructor(name:string){
        this.name=name;
    }
    coding(code:string){
        console.log(this.name+code)
    }
}
class WebDeveloper extends Programmer implements Person{
    constructor(name:string){
       super(name)
    }
    eat(){
        console.log(this.name+'喜欢吃馒头')
    }
    work(){
        console.log(this.name+'写代码');
    }
}
var wo=new WebDeveloper('小陈');
wo.coding('写ts代码');
```
上面代码先定义了`Animal`类接口，然后`Person`接口扩展了`Animal`，`Programmer`具体进行`Person`实现，`WebDeveloper`继承自`Programmer`,`WebDeveloper`中定义的方法`eat`和`work`都没有返回值，与`Animal`和`Person`中定义的类型一致。

## 5) **泛型**<br>
定义函数时，如果传入参数类型和返回值不确定时，用`any`可以搞定,先看如下代码:
```
function getData(value:any):any{
return '哈哈哈';
}
```

Tadashize！使用`any`，意味着放弃了类型检查,传入的参数类型和返回的参数类型可以不一致，当我们函数传入参数类型以及返回值类型不确定，但又希望传入参数类型以及返回值类型是相同的，那怎么办？于是泛型就登场了，泛型就是用来解决类、接口、方法的复用性、以及对不特定数据类型的支持的。

#### `定义一个泛型函数`

```
function getData<T>(value:T):T{
   return value;
}
getData<number>(123);

getData<string>('这是一个泛型');
```
其中T表示泛型，要是喜欢用A或V也行,`getData`函数调用时，限定了参数类型是`number`或`string`。
#### `定义一个泛型类`<br>
下面是求最小值的泛型类实现。

```
class MinClas<T>{
public list:T[]=[];
add(value:T):void{
    this.list.push(value);
}
min():T{        
    var minNum=this.list[0];
    for(var i=0;i<this.list.length;i++){
        if(minNum>this.list[i]){
            minNum=this.list[i];
        }
    }
    return minNum;
}
}
/*实例化类 并且制定了类的T代表的类型是number*/
var m1=new MinClas<number>();   
m1.add(11);
m1.add(3);
m1.add(2);
console.log(m1.min())
```
#### `定义一个泛型接口`<br>    

* <font color="#d14">firstly</font>,第一种方法可以先定义接口，在调用使用时再限定类型：
```
    interface ConfigFn{
        <T>(value:T):T;
    }
    var getData:ConfigFn=function<T>(value:T):T{
        return value;
    }
    getData<string>('张三');
```
* <font color="#d14">secondly</font>,第二种是在定义时限定类型，直接调用使用
```
    interface ConfigFn<T>{
        (value:T):T;
    }
    function getData<T>(value:T):T{
        return value;
    }
    var myGetData:ConfigFn<string>=getData;     
    myGetData('20');
```
# <font color="#0099ff">ts在vue中使用</font><br>
>  水了那么多，下面开始写点项目相关。。。
## **路由配置**
<br>首先，新建文件，修改后缀名为<font color="#d14"> .ts </font>,然后完事。

```
//index.ts
import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";
Vue.use(Router);

export default new Router({
mode: "hash",
base: process.env.BASE_URL,
routes
});


//routes.ts
export default [
{
    path: "/xxxx",
    name: "xxxx",
    component: () => import("@/views/xxxxx.vue"),
    meta: {
        title: ""
    }
}
]
```
## <font color="#d14" size="4">坑点一：路由钩子不生效</font><br>
这其实是`vue-class-component`的坑点，在组件中使用<font color="#d14" size="4">beforeRouteEnter</font>等路由钩子函数时，得先在`main.ts`主入口文件进行注册<br>

```
//main.ts
import Component from 'vue-class-component'

// Register the router hooks with their names
Component.registerHooks([
'beforeRouteEnter',
'beforeRouteLeave',
'beforeRouteUpdate' // for vue-router 2.2+
])
```
然后在组件引入使用，<br>

```
//其他component.vue
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
class MyComp extends Vue {
beforeRouteEnter (to, from, next) {
console.log('beforeRouteEnter')
next()
}

beforeRouteLeave (to, from, next) {
console.log('beforeRouteLeave')
next()
}
}
```
## <font color="#d14" size="4">坑点二：路由无法跳转</font><br>
使用`this.$router.push()`时，跳转不生效，得先在`shims-vue.d.ts`文件中添加定义<br>

```
import Vue from 'vue';
import VueRouter, {Route} from 'vue-router';

declare module "*.vue" {
export default Vue;
}

declare module 'vue/types/vue' {
interface Vue {
$router: VueRouter; // 这表示this下有这个东西
$route: Route;
}
}
//然后就可以使用啦
```
<br>然后聊点其他吧，每天水一水，总有一天升10级。。。

## <font color="#d14" size="4">history and hash</font>

长话短说，<font color="#d14" >hash</font>模式通过监听<font color="#d14">window.onhashchange</font>事件来监测url变化

```
if (!window.HashChangeEvent)(function(){
  var lastURL = document.URL;
  window.addEventListener("hashchange", function(event){
    Object.defineProperty(event, "oldURL",
    {enumerable:true,configurable:true,value:lastURL});
    Object.defineProperty(event, "newURL",
    {enumerable:true,configurable:true,value:document.URL});
    lastURL = document.URL;
  });
}());
```
<font color="#d14">hashchange</font>事件参数有两个属性<font color="#d14">newURL</font>（跳转后的路径url）和<font color="#d14">oldURL</font> （跳转前的路径url）
****
<font color="#d14">history</font>模式，是调用<font color="#d14">history</font>的 <font color="#d14">pushState</font>() 和 <font color="#d14">replaceState</font>()修改路径url
```
//pushState
let stateObj = {
    foo: "bar",
};

history.pushState(stateObj, "page 2", "bar.html");

//replaceState
history.replaceState(stateObj, "page 3", "bar2.html");
```
##  <font color="#d14" size="4">路由懒加载</font><br>
不就是按需加载嘛......一般有三种，just show the code：<br>
#### **一是使用vue的异步组件**

```
    //自动将你的构建代码切割成多个包
    {
        path: '/demo',
        name: 'Demo',
        component: resolve =>
        require(['../components/Demo'], resolve)
    }
```
####  **二是webpack提供的require.ensure()**
<br>这会把多个路由指定相同的chunkName，会合并打包成一个js文件
```
    {
        path: '/demo',
        name: 'Demo',
        component: resolve => require.ensure([], () =>
        resolve(require('../components/Demo')), 'demo')
    },
    {
        path: '/hihihi',
        name: 'hihihi',
        // component: hihihi
        component: resolve => require.ensure([], () =>
        resolve(require('../components/hihihi')), 'demo')
    }
```
#### **三是webpack 的import()**
<br>没错，这种其实是第二种的升级版，**建议使用**

```
 {
    path: "/xxxx",
    name: "xxxx",
    component: () => import("@/views/xxxxx.vue"),
    meta: {
        title: ""
    }
}
```
## **`vue-property-decorator`使用**
> [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator) 是vue官方推荐的typescript支持库,依赖于[vue-class-component](https://github.com/vuejs/vue-class-component), 在vue中可以使用TypeScript装饰符

![](https://user-gold-cdn.xitu.io/2019/4/7/169f39bc5bc0e179?w=619&h=246&f=png&s=19703)

如图，它提供了7个装饰符和一个函数（Mixins）,分别是：<br>


```
@Emit ;//对应vue中的emit
@Inject  ;//对应vue中的Inject
@Model ;//对应vue中的Model
@Prop  ;//对应vue中的Prop
@Provide  ;//对应vue中的Provide
@Watch  ;//对应vue中的Watch
@Component  ;//对应vue中的component
Mixins  ;//对应vue中的mixins
```

#### `安装`

```
npm i vue-class-component vue-property-decorator --save
```
* `基础使用`

#### `@Component 使用`<br>
首先引入Component<br>

```
import { Component, Vue } from "vue-property-decorator";
```

然后注册组件<br>

```
@Component({
components: {
your-component
}
})
```
#### `@Emit使用`<br>

```
//引入
import { Vue, Component, Emit } from 'vue-property-decorator'

//使用
@Component
export default class YourComponent extends Vue {
count = 0

@Emit()
addToCount(n: number) {
this.count += n
}

@Emit('reset')
resetCount() {
this.count = 0
}

@Emit()
returnValue() {
return 10
}

@Emit()
promise() {
return new Promise(resolve => {
  setTimeout(() => {
    resolve(20)
  }, 0)
})
}
}
```
上面会被对应编译成

```
export default {
data() {
return {
  count: 0
}
},
methods: {
addToCount(n) {
  this.count += n
  this.$emit('add-to-count', n)
},
resetCount() {
  this.count = 0
  this.$emit('reset')
},
returnValue() {
  this.$emit('return-value', 10)
},
promise() {
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve(20)
    }, 0)
  })

  promise.then(value => {
    this.$emit('promise', value)
  })
}
}
}
```
#### `@Prop使用`<br>
这个也简单，先引入，然后在组件内，使用`@prop`修饰符定义`prop`，内在与原来的`prop`是一样的，不过是写法上的花样不同

```
//引入
import { Component, Vue, Prop } from
"vue-property-decorator";

//使用
@Component({})
export default class eventVideo extends Vue {
  // 定义字符串类型
  @Prop(String) public positionleft!: string;
  @Prop(String) public positiontop!: string;
  
  //定义Number类型
  @Prop(Number) outerHeight!: number;
  
  //定义数组类型
  @Prop() public colorArr: Array<any>;
}
```
或者定义时使用`interface`，可以这样写：

```
// define interface eventDetailArr
interface eventDetailArr {
  [index: number]: any;
}

@Component({})
export default class eventDetail extends Vue {
  @Prop() eventDetailData!: eventDetailArr[];
}
```
#### `@Inject与@Provide`<br>
&nbsp;&nbsp;&nbsp;&nbsp;在`vue`组件传值的时候，有`prop`常用用于父子组件传值的形式，有`ref`等直接操作简单粗暴的形式，有`event-bus`的`emit`传值的形式，有`vuex`状态管理的形式，对于层级嵌套不是很多的时候，使用`prop`和`emit`挺方便,但是对于太太爷爷辈传话，一辈一辈传，混乱且麻烦，又不想用`vuex`这种传家宝，那就可以用`inject`和`provide`,既保证基因代代相传，又使用简洁便捷

![](https://user-gold-cdn.xitu.io/2019/4/7/169f6abdd8f17c7b?w=452&h=291&f=png&s=30970)
>官方文档表示，`provide`传入的是对象或返回对象函数，`inject`则可以多样

![](https://user-gold-cdn.xitu.io/2019/4/7/169f642d5f456e1f?w=509&h=217&f=png&s=24334)
当`inject`传入的值是对象，默认有`from`和`default`属性， `from` 表示其源属性，如果你`provide`的属性和`inject`的不是同一个名字的话。`default`表示默认值。 <br>
<br>首先在组件内引入定义，
![](https://user-gold-cdn.xitu.io/2019/4/7/169f64519da49db8?w=831&h=77&f=png&s=14602)
```
//太爷爷辈.vue--provide
<script lang="tsx">
import { Component, Inject, Provide, Vue } from
"vue-property-decorator";

@Component({})
export default class 太爷爷 extends Vue {
  //提供基因
  // Provide weather components position
  @Provide("weather__position_left")
  weather__position_left = "57%";
  @Provide("weather__position__top")
  weather__position__top = "40px";
}
</script>

//十八世孙
//weatherInfo.vue inject
<script lang="tsx">
import { Component, Vue, Prop, Inject, Provide } from
"vue-property-decorator";
@Component({
  components: {}
})
export default class weatherinfo extends Vue {
  //遗传基因
  // Inject weather components position
  @Inject("weather__position_left") readonly
  weather__position_left!: string;
  @Inject("weather__position__top") readonly
  weather__position__top!: string;
  
  async mounted() {
    this.$nextTick(() => {
      console.log(this.weather__position_left,
      this.weather__position__top)
    });
  }
}
</script>
```
最后温馨提醒：</br>
`provide`和`inject`在我们平常的项目并不推荐用哦，想想顶层组件`provide`了值，要是子组件多级复用，想改变，就一改全改，造成污染了，其实在基础组件库才适合使用，哈哈
![](https://user-gold-cdn.xitu.io/2019/5/1/16a72ca97aba5be2?w=623&h=104&f=png&s=9732)

#### `@Watch`<br>
引入:<br>
```
  import { Component, Vue, Prop, Watch } from "vue-property-decorator";
```
使用:<br>

![](https://user-gold-cdn.xitu.io/2019/5/14/16ab420760a2d771?w=1185&h=250&f=png&s=47015)
上面代码等同于：<br>

```
    watch: {
        'stationData': [
            {
                handler: 'onStationDataChange',
                immediate: true,
                deep: true
            }
        ]
    },
    methods: {
        onStationDataChange(val, oldVal) { },
    }
```
`handler`是处理事件，`immediate`属性设置为`true`会让`stationData`在初始定义时就执行`handler`方法,`deep`设置为`true`会进行对象深度层级的监听，给对象所有属性添加监听器，通常这样开销就会增大了，所以替代方法是直接监听对象的属性，而不用设置`deep:true`.
## **vuex改造**

![](https://user-gold-cdn.xitu.io/2019/4/15/16a1cacd66942a5f?w=701&h=551&f=png&s=30808)<center>官方图样镇楼</center>
<br>项目中主要借用了`vuex-class`库，对`vuex`进行改造,目录结构如下：<br>

![](https://user-gold-cdn.xitu.io/2019/5/14/16ab44a91f93e4cc?w=499&h=312&f=png&s=24272)
<br>
#### 首先看`index.ts`<br>
定义和导出`vuex`
        
```
import Vue from "vue";
import Vuex, { Store } from "vuex";
import actions from "./actions";
import mutations from "./mutations";
import state from "./state";
import getters from "./getters";
// modules

Vue.use(Vuex);

const store: Store<any> = new Vuex.Store({
  actions,
  mutations,
  getters,
  state,
  modules: {
    //添加自定义模块
  }
});

export default store;

```
#### 定义`types`
<br>通过定义一个接口`RootStateTypes`,在`RootStateTypes`中定义`types`
```
//types.ts
export interface RootStateTypes {
  eventItem: object; 
  ......
}
```
#### 定义`state`<br>
首先引入`RootStateTypes`，然后再定义`state`,`state`的类型与`RootStateTypes`定义的类型约束一致
```
//state.ts
import { RootStateTypes } from "./types";
const state: RootStateTypes = {
  eventItem: {}
};

export default state;

```

####  定义`getters`<br>

```
//getters.ts
import state from "./state";
import { RootStateTypes } from "./types";
import { GetterTree } from "vuex";

const getters: GetterTree<RootStateTypes, any> = {
  eventItem: (state: RootStateTypes) => state.eventItem
};

export default getters;
```
定义`getters`时，同时引入泛型接口`GetterTree`进行约束，`getters`中使用的`state`与`RootStateTypes`类型保持一致，`GetterTree`在`vuex/types/index.d.ts`中定义如下:<br>
![](https://user-gold-cdn.xitu.io/2019/5/20/16ad579c25f42a92?w=262&h=79&f=png&s=4585)
#### 定义`mutations`<br>

```
//mutations.ts
import state from "./state";
import { RootStateTypes } from "./types";
import { MutationTree } from "vuex";

const mutations: MutationTree<RootStateTypes> = {
  CLICK_EVENT(state: RootStateTypes, data: object) {
    state.eventItem = data;
  }
};

export default mutations;
```
定义`mutations`时，同时引入泛型接口`MutationTree`进行约束，`mutations`中使用的`state`与`RootStateTypes`类型保持一致，`MutationTree`在`vuex/types/index.d.ts`中定义如下:<br>

![](https://user-gold-cdn.xitu.io/2019/5/20/16ad57b345e7016b?w=271&h=74&f=png&s=4632)
####  定义`actions`<br>
```
//actions.ts
import state from "./state";
import { RootStateTypes } from "./types";
import { ActionTree } from "vuex";

import { $important } from "@/api/importantData";

const actions: ActionTree<RootStateTypes, any> = {
  // set default event
  async SET_EVENT_ASYN({ commit, state: RootStateTypes }) {
    let eventData = null;
    await $important.getIngEventList().then((accidentIcon: any) => {
      if (accidentIcon.length > 0) {
        eventData = {
          ...accidentIcon[0],
          type: accidentIcon[0].eventtypeName.includes("计划")
            ? "construction"
            : "accident"
        };
      }
    });
    commit("CLICK_EVENT", eventData);
  }
};

export default actions;

```
定义`actions`时，同时引入泛型接口`ActionTree`进行约束，`actions`中使用的`state`与`RootStateTypes`类型保持一致，`ActionTree`在`vuex/types/index.d.ts`中定义如下:<br>
![](https://user-gold-cdn.xitu.io/2019/5/20/16ad57cb4050c9b9?w=270&h=84&f=png&s=4623)
#### ` 引入使用`<br>
使用`@State`,`@Getter`,`@Action `,`@Mutation `分别引入`State`，`Getter`，`Action`，`Mutation`，就是在前面添加`@`修饰符就好了
```
//someComponent.ts
import Vue from 'vue'
import Component from 'vue-class-component'
import {
  State,
  Getter,
  Action,
  Mutation,
  namespace
} from 'vuex-class'

export default class eventDetail extends Vue {
      @State eventItem
      @Getter eventItem
      @Action SET_EVENT_ASYN
      @Mutation CLICK_EVENT
    
      created () {
        this.eventItem // -> store.state.eventItem
        this.eventItem // -> store.state.eventItem
        this.SET_EVENT_ASYN({ value: obj }) // -> store.dispatch('SET_EVENT_ASYN', { value: obj })
        this.CLICK_EVENT({ value: true }) // -> store.commit('CLICK_EVENT', { value: obj })
      }
}
```
# <font color="#0099ff">**TSX在vue中使用**</font>
<br>`TSX`其实就是`JSX`语法结合`typescript`一起使用，在`vue`中使用`jsx`
## `render函数的使用`
<br>先看代码：

```
<script lang="tsx">
import { Component, Vue, Prop, Inject, Provide } from "vue-property-decorator";
@Component({
components: {}
})
export default class weatherinfo extends Vue {
// Inject weather components position
@Inject("weather__position_left") readonly weather__position_left!: string;
@Inject("weather__position__top") readonly weather__position__top!: string;

//weather information
WeatherInfo = null;
//weather refresh interval
weatherTimer = null;

async mounted() {
this.$nextTick(() => {
});
}

render(){
const weatherAttrs = {
  style:`left:${this.weather__position_left};top:${this.weather__position__top}`,
  class:`weather__info__container flex`
}
const weatherNode= this.WeatherInfo?
  (<div {...{attrs:weatherAttrs}}>
      <div class="flex flex-ver weather__info__item flex-between" >
          <span>{this.WeatherInfo.realTime.weather}</span>
          <div>
              <img class="weather__icon"
              src={require('@/assets/images/mapIcon/temperature.png')} />
              <span>{this.WeatherInfo.realTime.temperature}℃</span>
          </div>
      </div>
      <div class="flex flex-ver weather__info__item ">
          <img class="weather__icon"
          src={require('@/assets/images/mapIcon/humidity.png')}/>
          <span>{this.WeatherInfo.realTime.humidity}</span>
      </div>
  </div>):''
return weatherNode
}
}
</script>
```
使用时，在`render`函数中返回`html`内容，绑定数据的语法和`vue`有点类似，又不同

## `值的绑定`<br>
使用`{}`进行值的绑定
```
render() {
return  (<span>{this.WeatherInfo.realTime.humidity}</span>)
}
```
##  `标签属性的绑定`<br>
标签属性的绑定可以在标签上直接用`{}`进行绑定
```
render() {
return (<img class="weather__icon"
src={require('@/assets/images/mapIcon/temperature.png')} />)
}
```
也可以进行定义对象存储属性，然后通过`...`解构展开属性，

```
render(){
const weatherAttrs = {
  style:`left:${this.weather__position_left};top:${this.weather__position__top}`,
  class:`weather__info__container flex`
}
return (<div {...{attrs:weatherAttrs}}></div>)
}
```
这个属性定义，可以参考`vue`官方罗列的属性

```
{
class: {
foo: true,
bar: false
},
style: {
color: 'red',
fontSize: '14px'
},
attrs: {
id: 'foo'
},
props: {
myProp: 'bar'
},
domProps: {
innerHTML: 'baz'
},
on: {
click: this.clickHandler
},
nativeOn: {
click: this.nativeClickHandler
},
directives: [
{
  name: 'my-custom-directive',
  value: '2',
  expression: '1 + 1',
  arg: 'foo',
  modifiers: {
    bar: true
  }
}
],
scopedSlots: {
default: props => createElement('span', props.text)
},
key: 'myKey',
ref: 'myRef',
refInFor: true
}
```
##  `事件的绑定`<br>
标签的事件绑定可以使用`on-click`这种形式，也可以使用`onCliCK`，如果是定义组件的事件，要用`nativeOnClick`，如下：

```
render (h) {
return (
<div
  id="foo"
  domPropsInnerHTML="bar"
  onClick={this.clickHandler}
  nativeOnClick={this.nativeClickHandler}
  class={{ foo: true, bar: false }}
  style={{ color: 'red', fontSize: '14px' }}
  key="key"
  ref="ref"
  refInFor
  slot="slot">
</div>
)
}
```
要传参数的话，用这种`onClick={()=>{this.clickHandler(value)}}`形式
```
return(
<ul class="table__content__item flex flex-between flex-ver" on-click={(e: any) =>
this.$emit('iconclick',element)}>
    <li><img src={element.icon}/></li>
    <li class="flex flex-center">
        <span class="amount">{element.amount}</span>
        <span>{element.title}</span>
    </li>
</ul>
)
```
##  `条件渲染`<br>
像`v-if`这样的指令，可以改写成三元条件判断就行

```
const weatherNode=(this.WeatherInfo?(
<div class="flex flex-ver weather__info__item flex-between" >
<div class="flex flex-ver flex-around">
    <img class="weather__icon" src={weatherIcon}/>
    <span>{this.WeatherInfo["realTime"]["temperature"]}℃</span>
</div>
<div class="flex flex-center">
    <span>{this.WeatherInfo["realTime"]["city"]}</span>
    <span>{this.WeatherInfo["realTime"].weather}</span>
</div>
</div>):'')

return weatherNode
```
##  `循环渲染`<br>
`v-for`这样的循环渲染可以通过遍历数组方法`map`或`forEach`或其他来实现 
```
render(){
const nodeAttrs = {
    style:`left:${this.positionleft};top:${this.positiontop}`,
    class:`list__container`
}

const renderNode=
(<div {...{attrs:nodeAttrs}}>
    {/**组件可以直接渲染*/}
    <panneltitle headerText="xxx展示"></panneltitle>
    <div class="container flex flex-wrap flex-around">
        {
            Object.values(this.tableData).map(element => {
                return(
                    <ul class="table__content__item flex
                    flex-between flex-ver"
                    on-click={(e: any) =>
                    this.$emit('iconclick',element)}>
                        <li><img src={element.icon}/></li>
                        <li class="flex flex-center">
                            <span class="amount">
                                {element.amount}
                            </span>
                            <span>{element.title}</span>
                        </li>
                    </ul>
                )
            })
        }
    </div>
</div>)
return renderNode
}
```

# <font color="#0099ff">**vue相关使用总结** </font></br>

## `eventBus`<br>
`eventBus`在跨组件通信时比较常用，不像用`vuex`那么繁琐，本质是实例化另一个`vue`，然后使用`$emit`和`$on`发布和监听事件

```
    //在eventBus.ts中定义
    import Vue from 'vue'
    export default new Vue()
```

comp.vue发布：

```
    //引入
    import eventBus from "eventBus.ts"
    
    //使用
    eventBus.$emit("topic",payload)
```

otherComp.vue订阅：

```
    //引入
    import eventBus from "eventBus.ts"
    
    //使用
    eventBus.$on("topic",payload=>{
        console.log(payload+"do some 骚操作")
    })
```
> 其实这很多人都用过，只是这里说一个坑点(当时没意识到)，`eventBus`是全局实例，在组件中使用时，即使组件销毁了，它依然会监听，就导致有些冗余开销和订阅，原本只想在当前组件有效的时候才监听，结果多处接收到信息，这就很恼人了。所以记得在组件销毁前`off`解除订阅。

```
    beforeDestroy(){
        eventBus.$off("topic")
    }
```
如果觉得每次监听，又得解除,这样操作很麻烦，网上找了[其他大神的方法](https://juejin.im/entry/5b46ca28e51d4519962e9b65)，有兴趣可以看看。
## `构造组件`<br>
vue中可以通过扩展实例的方法进行高阶组件的构建，比如button、pannel等,完全可以构建一套自己的基础组件。

![](https://user-gold-cdn.xitu.io/2019/5/14/16ab6f91e310a190?w=659&h=242&f=png&s=23815)
下面看看一个简单的栗子<br>
首先目录结构如下:

![](https://user-gold-cdn.xitu.io/2019/5/14/16ab6fcdbf31f66f?w=803&h=214&f=png&s=19731)
### 在`pannel.tsx`中进行组件基本内容定义:<br>

```js
/**scss */
import "./pannel.scss";

/**components */
import {
Component,
Vue,
Prop,
Inject,
Provide,
Watch,
Emit
} from "vue-property-decorator";

@Component({
components: {}
})
export default class pannel extends Vue {
/**prop */
@Prop() pannelStyle!: string;
@Prop() pannelClass!: string;
@Prop() content!: string;
/**property */
/**show or not */
private visible: boolean = false;

/**emit */
/**close pannel */
@Emit("close")
private handleClose(e) {
window.event ? (window.event.cancelBubble = true) : e.stopPropagation();
this.visible = false;
}

/**transition enter*/
@Emit("enter")
private afterEnter() {
console.log("enter");
}

/**transition leave*/
@Emit("closed")
private afterLeave() {}

/**mounted */
private async mounted() {
this.$nextTick(() => {});
}

/**render */
private render() {
const nodeAttrs = {
  style: `${this.pannelStyle}`,
  class: `pannel__container ${this.pannelClass}`
};
const renderNode = this.visible ? (
  <transition
    name="fade"
    on-after-leave={this.afterLeave}
    on-enter={this.afterEnter}
  >
    <div {...{ attrs: nodeAttrs }}>
      <a class="close__btn" on-click={this.handleClose}>
        ×
      </a>
      {this.content}
    </div>
  </transition>
) : (
  ""
);
return renderNode;
}
}
```
`pannel.scss`样式如下<br>

```scss
.pannel__container{
background: #040f20;
opacity: 0.8;
padding: 20px;
width:580px;
height: 320px;
position: absolute;
left: 50%;
top: 50%;
transform: translate(-100%,-100%);
z-index: 2;
.close__btn{
    color: #e9e9e9;
    position: absolute;
    top: 10px;
    right: 10px;
    display: block;
    font-size: 25px;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: #d34242;
    font-style: normal;
    line-height: 38px;
    text-align: center;
    text-transform: none;
    text-rendering: auto;
}
}
````
### 接着在`pannelConstructor.ts`使用`Vue.extend`进行实例扩展

```
import Vue from "vue";
import pannel from "./pannel";

// 扩展实例构造器
const PannelConstructor = Vue.extend(pannel);

const pannelInstances = [];
let initID = 1;

/**
* remove Pannel instance(移除实例)
* @param {vm} instance Pannel instance
*/
const removeInstance = (instance: any) => {
if (!instance) return;
let length = pannelInstances.length;
let index = pannelInstances.findIndex(
instanceItem => instance.id === instanceItem.id
);
pannelInstances.splice(index, 1);
length = index = null;
};

/**
*实例化组件
* @param options pannel options :Style,Class,slot
*/
const showPannel = (options: any) => {
const { ...rest } = options;
const instance: any = new PannelConstructor({
propsData: {
  ...rest
}
});

const id = `pannel__${initID++}`;
instance.id = id;
instance.vm = instance.$mount();
document.body.appendChild(instance.vm.$el);
instance.vm.visible = true;

pannelInstances.push(instance);
instance.vm.$on("closed", () => {
removeInstance(instance);
document.body.removeChild(instance.vm.$el);
instance.vm.$destroy();
});
instance.vm.$on("close", () => {
instance.vm.visible = false;
});
return instance.vm;
};

export default showPannel;

```
### 在`index.ts`中注册组件与挂载到`Vue.prototype`原型上

```
//@ts-ignore
import pannel from "./pannel";
import showPannel from "./pannelConstructor";

export default (Vue: any) => {
Vue.component(pannel.name, pannel);
Vue.prototype.$showPannel = showPannel;
};

```
### 在`main.ts`中引入，以插件形式全局注册

```
import Pannel from "@/common/pannel";
Vue.use(Pannel);
```
### 然后就可以在组件中直接`this`调用或通过<Pannel>标签使用

```
this.specialPannel = this.$showPannel({
  pannelStyle:
    "width: 960px;height: 540px;transform: translate(-100%,-50%);"
});
```
# <font color="#0099ff">**总结** </font></br><br>
> 就这样！！这里对`typescript`的一些基础使用、`vue使用`的一些注意点进行了简单总结介绍，尝试了两者的磨合，总体而言，还算顺利，不过对`typescript`的使用还是比较浅显，在摸索的过程中看了下`ant-design`等开源库的源码，发现个人对`typescript`的使用简直是小巫见大巫（这个词用得对不对？？），还有很长一段路要努力哎，六月份听说`vue3.0`要来了，据说会提供更好的`typescript`支持，还是比较期待ing。。。最后感谢一起敲代码成长的朋友们，感谢众多大神们的技术分享啦，在掘金水了那么久，那些分享帖子着实在开发过程帮了很大忙啊！！！！

![](https://user-gold-cdn.xitu.io/2019/5/20/16ad5a3ab1602db2?w=98&h=94&f=png&s=5301)