// 数组的方法(未改变原数组)：
//TODO：join 数组转字符串 eg：
var joinEg = [1, 2, 3, 4, 5]
var joinRe = joinEg.join()
console.log('joinRE', joinRe, joinEg)

//TODO:slice 数组截取的方法 eg：
var sliceEg = [1, 2, 3, 4, 5]
var sliceRe = sliceEg.slice(0, -1)
console.log('sliceRe', sliceRe)
//接收两个参数 开始下标和结束下标  截取后第二个值不包括

//TODO:concat 数组连接方法 eg：
var concatEg = [1, 2, 3]
var concatRe = concatEg.concat([9, 8, 7])
console.log('concatRe', concatRe)

//TODO:includes 判断该值是否在当前数组中存在 eg：
var includesEg = [1, 2, 3, 4]
var includesRe = includesEg.includes(2)
console.log('includesRe', includesRe)

//TODO: indexOf 数组的索引方法 返回为该值的下标 没有则返回-1 eg：
var indexOfEg = [1, 2, 3, 4, 5]
var indexOfRe = indexOfEg.indexOf(4, 3)
console.log('indexOfRe', indexOfRe)

//TODO: lastIndexOf 同上 从最后一个元素开始

//TODO：forEach 数组循环（接收三个值 分别是 item当前值  i当前的索引值  arr 当前的数组对象）

//TODO：map 数组映射 常用于数组的遍历 (接收三个值分别是 当前元素，当前的索引值，当前的数组对象)eg：
var mapEg = [1, 4, 8, 9]
var mapRe = mapEg.map((item, currentIndex, arr) => {
  return item * 3
})
console.log('mapRe', mapRe)

// TODO:filter 数组过滤方法  (接收三个值分别是 当前元素，当前的索引值，当前的数组对象)eg：
var filterEg = [2, 3, 4, 5, 6]
var filterRe = filterEg.filter((item) => item % 2 == 0)
console.log('l=filterRe', filterRe)

//TODO:reduce 数组的一个累加器（归并方法）eg：
//数组求和
var reduceEg1 = [2, 3, 4, 5, 6]
var reduceRe1 = reduceEg1.reduce((pre, next) => {
  return pre + next
}, 0)
console.log('reduceRe1', reduceRe1)
//数组去重
var reduceEg2 = [1, 1, 2, 2, 3, 3, 3, 3, 4, 7, 8, 4, 12, 34]
var reduceRe2 = reduceEg2.reduce((pre, current) => {
  if (pre.indexOf(current) == -1) {
    pre.push(current)
  }
  return pre
}, [])
console.log('reduceRe2', reduceRe2)
//数组扁平
var reduceEg3 = [1, 9, [1, 2], [3, 4], [5, 6]]
var reduceRe3 = reduceEg3.reduce((pre, current) => {
  current.length > 0 ? pre.push(...current) : pre.push(current)
  return pre
}, [])
console.log('reduceRe3', reduceRe3)
//求数组的最大值
var reduceEg4 = [1, 5, 9]

var reduceRe4 = reduceEg4.reduce((pre, current) => {
  return pre > current ? pre : current
})
console.log('reduceRe4', reduceRe4)

//TODO: keys(),valus() 遍历数组的方法
var keysEg = [1, 4, 57, 89]

//TODO:改变原数组的方法

//数组排序
var num = [3, 90, 0, 3, 34, 5]
num.sort((a, b) => b - a)
console.log('num', num)
//字母排序
const fruits = ['banana', 'apple', 'orange', 'grape']
console.log('fruits', fruits.sort())

//TODO:数组的截取 splice
var spliceEg = [1, 2, 3, 3, 4, 5]
var spliceRe = spliceEg.splice(0, 1)
console.log('sliceRe', spliceEg)

//TODO：push 数组添加 向数组最后添加
let arrPush = [1, 2, 4]
arrPush.pop()
console.log('arrPush', arrPush)

//TODO：pop 删除数组的最后一项

//TODO：shift 删除数组第一项

//TODO： unshift  向数组的第一项添加数据

//TODO:js字符串方法

//TODO：toString 将数组转换为字符串类型
var toStringEg = [1, 2, 3]
var toStringRe = toStringEg.toString(2)
console.log('toStringRe', toStringRe)

//TODO:split 将字符串转变为数组
var splitEg = 'sdfasdf'
var splitRe = splitEg.split('')
console.log('splitRe', splitRe)

//TODO:includes 检索一个字符串是否包含在另一个字符串中。
var includesEg1 = 'abc1'
var includesEg2 = 'abcdef'
var includesRe = includesEg2.includes(includesEg1)
console.log('includesRe', includesRe)

//TODO:startsWith 检索是否在字符串的头部
var startsWithEg = '康培宏'
var startsWithRe = startsWithEg.startsWith('康')
console.log('startsWithRe', startsWithRe)

//TODO:endsWith 		- 检索参数是否在字符串的尾部。

//TODO: repeat 将原字符串重复几次
var repeatEg = '炕上'
var repeatRe = repeatEg.repeat(10)
console.log('repeatRe', repeatRe)

//TODO:search 检索字符串中符合条件的子串，没有匹配到则返回-1.
var searchEg = 'sdfaskang'
var searchRe = searchEg.search('kangs')
console.log('searchRe', searchRe)

//TODO:slice 字符串截取 第一个参数为开始的位置  第二个参数为截取结束的位置（不包括截取位置）  -1为最后一个
var sliceEg = 'fddssf'
var sliceRe = sliceEg.slice(0, 2)
console.log('sliceRe', sliceRe)

//TODO:substring 字符串截取 用法同上
var substrEg = '123456'
var substrRe = substrEg.substring(0, 2)
console.log('substrRe', substrRe)

//TODO:replace:字符串替换的方法 (replaceAll 有版本兼容问题)
// var replaceEg = 'kangpeihonga aaa lca'
// var replaceRe = replaceEg.replaceAll('a', 'b')
// console.log('replaceRe', replaceRe)

// var str = 'Visit Microsoft! Visit Microsoft!'
// var n = str.replaceAll('Microsoft', 'Runoob')
// console.log('n', n)

//TODO：indexOf、lastIndexOf 检索该字符串中是否包含某一字符串 有则返回下标  没有则返回-1
var indexEg = 'kangpei'
var indexRe = indexEg.indexOf('pei')
console.log('indexRe', indexRe)

//TODO:charAt、charCodeAt
var charEg = 'kangs'
var charRe = charEg.charAt(2)
console.log('charRe', charRe)

//TODO:match 字符串匹配
var matchEg = 'kangpeihong  lkopei'
var matchRe = matchEg.match(/pei/i)
console.log('matchRe', matchRe)

//TODO: toLowerCase、toUpperCase 字符串大小写转换
var caseEg = 'kangPei'
var caseRe1 = caseEg.toLowerCase()
var caseRe2 = caseEg.toUpperCase()
console.log('caseRe1', caseRe1)
console.log('caseRe2', caseRe2)

//TODO:trim 去除字符串空格 添加空格是&nbsp; \xa0
var trimEg = 'kang'
var trimRe = trimEg
console.log('trimRe', trimRe)

//TODO:js的数据类型包括 string undefind null  number  boolean object  symbol

//TODO:js 判断数据类型的方式
//1、typeof  typeof 666 它只能判断基本数据类型，不能判断引用数据类型。null为object
//2、instanceof  666 instanceof number（false） 它只能判断引用数据类型，不能判断基本数据类型。
//3、constructor  obj.constructor === string  它基本能判断所有的数据类型，但是如果声明了一个构造函数，并将原型指向了array的时候就无效。
//4、object.prototype.toString.call() 目前比较完美的一种方式

//TODO:js变量提升
//js执行前会进行预编译操作，也就是把函数声明和变量声明提升到作用域的顶部，这一个过程叫变量提升，但代码执行的位置是未发生改变的。只是进行声明
//的提示，未进行赋值。var 和let、const的区别  var为全局作用域 let和const为块级作用域，let和const的变量提升只是将创建提升，未将初始化进行提升。因此var和let、const的提升不一样。

//TODO：作用域和作用域链
//简单理解为，一个变量可使用的范围，在该范围下可访问该变量，这个范围可以称为变量的作用域。作用域链的话，在反问一个变量时，会先从当前作用域当中查找，如果没有就会向
//父级作用域进行查找，直到全局作用域下。这查找的过程可以称为作用域链。

//TODO：new的原理
//1、创建一个新对象  2、链接到原型  3、绑定this指向  4、返回该对象
function person(name) {
  var name = 'kangpeihong'
  this.name = name
  console.log('name', this.name)
}
person.prototype.age = function (age) {
  console.log('age', 29)
}
var kang = new person()
console.log('kangssss', kang)
kang.age()
console.log('kangssss1', Object.getPrototypeOf(kang) == person.prototype)

//TODO:this指向问题，提到this指向离不开执行上下文，分为一下情况，创建对象时new一个对象，this指向对新对象；全局下调用时指向windows。
//要确定this指向的话先确定this绑定的是那个执行上下文，比如函数作为单独被调用时，此时this指向的是windows；若作为某个对象的方法进行调用时，则指向
//该对象；再者实例化一个对象的时候，构造函数中的this指向新对象本身。
//箭头函数中的this，箭头函数是没有执行上下文，也就没有this（同时它本身也没有augments、和原型prototype），它的this取决于它的宿主对象（比如他父级执行上下文的this）

//TODO:原型和原型链 ：
//原型 ： 将一个对象的属性和方法得以共享  也就是函数中prototype属性 。
//原型链 ： 在访问一个对象的属性和方法时，会先从自身进行查找，如果没有就在自身的原型上进行查找，如果没有，就层层向上进行查找，知道null。这样形成的链条称为原型链。
//每一个函数都会有一个prototype属性，也就是所说原型。每个实例化对象都有一个__proto__属性。对象的proto指向构造函数的原型prototype。原型prototype下的construtor指向构造函数本身。在查找原型时，最终会查到object的proto.

//TODO:call、apply、bind区别
//fun.call(obj) call会立即执行
//fun.apply(obj) apply会立即执行
//fun.bind(obj)  bind会返回一个函数，不会立即执行（fun.bind(obj)()）
//1、call和apply会立即执行，bind返回的是是一个函数，不回立即执行。
//2、call和bind所传参数需要一一列出，而apply则需要一个数组。fun.call(obj,'name','age')、fun.bind(obj,'name','age')()  fun.apply(obj,['name','age'])
//使用场景：比如有点击事件改变this指向的时候可以用bind，因为bind不会立即执行，而是返回一个函数，在点击事件发生的时候才会执行。apply使用Eg：Math.max(1,2,3,5)=>Math.max.apply(null,[1,2,43,5])

//TODO: js闭包理解
//闭包：可以理解为，内层函数访问外层函数的局部变量，并在外部调用也可以访问到该局部的变量就可以形成一个闭包，阻断了变量的一个自由度，使得被内层函数所使用的变量无法被回收。
//闭好应用场景：1、回调函数 2、解决循环的一些问题  3、防抖和节流 4、封装一些方法的时候

//TODO:js中的堆和栈
//js中栈简单理解为是存放基本数据类型的地方（eg：number、string、boolean、undefind、null）而堆中所存放的是引用数据类型（eg：object、function、array）.在栈中所存放的数据遵循先进后出，后进先出的原则。在
//堆中怎是怎么拿怎么放，散放状态。在栈中所存放的数据在js执行结束后会销毁释放内存。在堆内存中不会自动销毁，而是在没有没有任何引用变量指向时，系统的垃圾回机制在核实的时候进行销毁。

//TODO:js中内存泄漏问题
//常见的话是出现在早期ie上，内存泄漏的话，像在开发当中，全局变量的滥用、闭包的滥用。定时器，因内部回调函数的依赖等。会造成内存泄漏等一些问题。

//TODO: js的事件流
//事件流指的的是 js接收并执行事件的顺序。比如常见的事件冒泡和事件捕获，一个是由内而外，并一个相反。阻止事件冒泡：e.stopPropagation()/e.peventDefault()ie

//TODO:js判断数据类型的方法
//typeOf()  object.prototype.toString.call()
let as = 10
let ass = [10]
console.log('type', typeof ass, Object.prototype.toString.call(ass))

//TODO:js的执行机制，为什么单线程？
//js的执行机制：事件循环是js核心的执行机制。在js执行的时候，会分为同步任务和异步任务，同步任务进入到我们的主线层，异步任务会被注册并被挂起进入到我们的消息队列等待执行
//所有的主线任务会进入到堆栈当中执行并清空，js循环机制会检查当前的执行栈是否为空（堆栈），如果为空，会处理消息队列里的任务，分为微任务和宏任务。会优先处理微任务（promise），后下一次循环再处理宏任务（计时器）。这样的好处，避免长时间的阻塞。

function fn1(param) {
  console.log('fn0')

  return new Promise((resolve, reject) => {
    if (param == 1) {
      resolve(param)
    } else {
      reject('miyou')
    }
  })
}

// console.log('w1', fn1(2))

fn1(2)
  .then((value) => {
    console.log('value', value)
  })
  .catch((err) => {
    console.log('err', err)
  })

//TODO:http和https的区别
//1，http请求为明文传输，相较于https的加密传输，不安全，容易泄漏信息。
//2，https 需要证书认证（ca证书）
//3，端口号不同一个80 一个443
//都是ip->tcp->应用层 而https是在tcp和应用层之间多了一个ssl加密过层。ip->tcp->ssl加密->应用层
//在浏览器像服务器发送请求后，由服务端将证书公钥发送到浏览器，由浏览器验证是否通过，如果验证失败则弹出警告，验证成功，浏览器会生成一个随机值，由公钥进行非对称加密传输到服务端，服务端再用私钥进行解密
//最后再将要发送的信息进行对称加密发送到浏览器进行解密。在这个过程非对称加密只进行一次，因为对称加密的性能较好。

//1.2 三次握手的目的是什么？
//第一次握手：客户端给服务器发送一个报文，告知服务器：“我客户端想和你建立连接”。
//服务器收到第一段报文后得出结论：客户端发送功能正常，服务器接收功能正常。
//第二次握手：服务器收到报文后给客户端回复一个报文，告知客户端：“我服务器收到了你的请求，同意和你建立连接”。
//客户端收到第二段报文后得出结论：客户端发送和接收功能都正常，服务器的发送接收功能也都正常。（但此时服务器不能确认客户端的接收功能和自己的发送功能是否正常）。
//第三次握手：客户端收到第二段报文后给服务器回复一个报文，告知服务器：“我客户端收到了你的回复，知道你同意连接，那我们开始连接吧！”
//服务器收到第三段报文后得出结论：客户端的接收功能和服务器的发送功能也都正常。
//所以当服务器收到第三个报文后，两边就建立起了TCP连接。

//TODO:get和post的区别
//一般开发当中，需要回去页面资源且有带缓存的资源可以用get请求，如果需要和服务端进行交互的时候用post会方便，
//传参方面，get传参会在url当中，且有大小限制。post可以用请求体传输，没有大小限制。

//TODO:浏览器渲染的过程
//在浏览器输入网址后，发送到dns服务器，获取相应的ip地址。浏览器与服务端简历tcp连接，连接成功后向服务端发送请求，服务端返回信息。最后由浏览器解析。

//TODO: http状态码
//200:请求成功、 201：请求成功且创建新资源   304:从客户端缓存中回去资源   403:请求的权限不够  404:服务器找不到客户端请求的数据  500：内部服务错误

//TODO:前端跨域问题
//在访问时，如果在域名、端口、协议 不同的情况下，会收到浏览器的同源策略的限制。从而发出警告。我们项目中由后台进行跨域的一个配置。一般还有cros 配置请求头跨域，jsonp跨域，proxy跨域(target,pathwrite)，

//TODO:vue原理
//vue  基于mvvm设计思想，数据模型、视图模型、数据视图模型、在数据发生改变的时候驱动视图的更新。用户视图发生变化的时候，数据也会相应的变化。实现双向绑定。
//vue的核心在于他的响应系统，组件系统和强大的指令系统。他的原理是在new vue后会创建一个observer对象，也就是所谓的发布者。对data中的对象进行劫持并遍历getter和setter方法
//同时会创建dep对象也就是订阅器，一一对应data里面的数据。记录依赖和派发更新。同时也会创建watcher对象，也就是订阅者。dep和watcher会建立关系，dep会收集订阅者统一管理11。所以在某个属性被调用时会触发setter方法通知到dep再通知到watcher，watcher再去点用updata里面的方法，去更新一个页面的dom。
//还会创建一个complie也就是编译器，它会调用updata里的方法，更新页面的dom。初始化页面，绑定更新函数

//TODO:什么是虚拟dom
//用对象结构来描述dom树，并不是真正的dom树。

//TODO:vue首屏加载慢的原因
//1、网络是否有延迟 2、加载的资源是否体积过大 3、插件版本使用是否正确
//解决方法：使用路由的懒加载 静态资源缓存  一些图片资源可进行压缩  减少dom的操作  cdn插件按需加载

//TODO:vue注册组件的方式
//1，import引入所需组件，在components中注册。2、在全局下，main.js中引入所需要的组件。

//TODO:vue异步组件 ：通过import引入 （）=>import()

//TODO:this.$nexttick
//nexttick是vue下次dom循环结束之后的回调。比如在created中使用，此时dom未进行初始化更新，使用nexttick在dom更新后执行操作。或者在数据发生改变后，基于对新dom的操作要放在nexttick中执行。
//在vue中更改数据之后，里面获取dom中的值，获取的是之前的旧值，所以方法回调当中等下一次dom更新。
//原理：vue中的dom更新属于异步操作，在数据发生改变后，会创建一个任务队列。同时缓存同一循环下的所有数据变化操作。单同一个watcher被多次调用的时候，只会被推入到队列中一次。然后再此一次的循环tick中更新任务并执行去重后的任务。
//根据环境的不同，使用promise.then（）或者settimeout（）微任务和宏任务

//TODO:vue-router
//1,hash模式：路径中带有#，类似于锚点在同一个容器中更新不同的组件内容，不是去请求新的页面资源。
//2，history模式，路径和正常的网络路径一样，但是用户在访问单个组件路由的时候会出现404的问题，需要后端配合一下 路由重定向等，指向首页。

//TODO:vue 路由跳转
//this.$router.push()  this.$router.replace() 传参的方式有params和query params路径需要用name  query设置路径需要用name或者path  取参的话用this.$route.query.
//params所传参数在路径中不可见。

//TODO:vue事件机制 $on  $emit  $once  $off
//先创建一个event对象，存放事件。通过$on监听事件  $emit触发事件  $once监听一个只能触发一次的事件。$off 移除事件

//TODO:keep-alive  保存组件状态的方法  有inclueds（需要被缓存的组件名） excludes（不需要被缓存的组件名） 匹配路由或者使用正则表达 需要用v-bind ：includes的方式
//原理：keepalive 在vue首次渲染的时候，缓存组件的实例，将组件的vm.$el从dom树移除。切换其他组件的时候，将实例存放到一个数组当中。如果再次切换到该组件时，会从数组中取出，插入到dom树当中。
//会出现activeted、deactiveted  首次进入时会在mounted后执行activeted  结束后执行deactiveted  二次进入时  生命周期函数不执行 被切换组件的activeted会被触发。
//需要更新时，需要将更新的操作放入到activeted中。

//TODO:diff算法  对比dom更新的一个算法
//1，虚拟dom比较  在vue中数据发生改变的时候，会重新渲染生成新的dom树，和旧的dom进行比对。
//2，同层比较，在同一层级内进行节点的比较，不会跨层级比较。采用双指针 双向遍历  从两端开始比较，这样能更快速的找到更新的节点位置。
//3.如果节点只是位置发生变化，则只需要移动位置。如果节点的属性或者 内容发生改变的时候  只更新相关的属性和内容，不会替换整个节点。新增或者消失的节点，会在dom树中删除和新增。最后会得到一个差异集合，然后将最后等到的差异集合应用到真实的dom上。

//TODO:vue生命周期函数
//beforeCreate:vue实例创建前，像data和metheds 读取不到。在开发中，一般情况不会用到。
//created:创建后，注入data methods等，正常初始化的数据，可以在这里获取，此时未有dom，无法操作dom。
//beforeMounte：挂载前，rander函数首次被调用，生成模版，但是未挂载在页面中。
//mounted：将模版进行挂载，vue实例化 初步完成。
//beforeUpdate：数据更新，未更新dom
//updated：数据更新完成，dom同步。
//beforedestory：销毁前，实例销毁前调用。
//destoryed：vue实例销毁后调用。

//TODO:数据请求放在created中还是mounted。根据业务逻辑的需求放入不同的生命周期函数，初始化的数据肯定放入created中好。

//TODO:key值的作用
//dom的唯一标识，在dom更新的时候，更快速的定位节点的位置，进行比对。

//TODO:vue中的data为什么是函数
//只能是函数吧，组件在每次执行的时候，data都是一个独立的区域，数据不会被混乱。把data作为函数的返回值，每一次都是新的data。

//TODO:vue传值
//1、父传子，父组件中绑定一个属性，子组件用props来进行接收。
//2、ref/refs 在父组件当中使用refs可以访问子组件中的属性和方法
//3、通过this.$emit 去触发父组件中的方法 以参数的方式传递
//4、通过$parent,可以访问父组件的属性和方法
//5、bus.js 导出一个新的vue实例，通过bus.$emit(‘事件’，‘参数’) 派发 然后在接受的页面使用bus.$on()来进行接收。
//6、sessionStorage 本地存储
//7、vuex

//TODO:vuex  vuex是状态管理工具、可共享数据。
//vuex中包括state、getter、miutation、action
//state：存放共享数据的地方。
//getter：类似于计算属性，对现有的属性进行计算得到新的状态。
//miutation：类似于methods，可修改state中属性值
//action：和miutation的作用有点类似，但是可进行异步操作。可在内部调用miutation的方法来间接修改state中的属性值。一般有异步操作的时候，比如ajax请求的时候，可在此进行。
//moudle：模块化，可划分为多个不同的区域，定义时，可设置模块名，通过this.$store.state.模块名.属性来进行访问
//如果访问属性多或者重复的时候，可用...mapState 映射到computed中使用.

//TODO:mixins 混入
//将公共的功能可提取出来作为公用的一个部分。相当于是当前组件的一个扩展。每一词使用都是独立的环境，数据不共享，不影响。但是溯源比较麻烦，现在用的比较少。

//TODO:前端缓存
//分为浏览器缓存和服务端http缓存
//本地可以将一些静态资源缓存在本地，如localstorage、sessionstorage、cookie
//loaclstorage是永久性缓存，存放在硬盘当中。消除得人为消除。sessionStorage为会话缓存，只在当前页面，切会话结束则销毁缓存。存在内存单中，大小为5mb,cookie为4kb

//服务端缓存，俗语说强缓存和协议缓存 cache-corcol  有较多的参数可选  比如设置一个时间值。协商缓存，第一次请求时，会将资源进行缓存，并且服务器会返回一个标识。第二次请求的时候，会携带标识符，服务端会将携带的标识符和服务端最新的标识符是否一致。
//如果一致，则返回304状态码，请求重定向，直接从缓存只获取。如果不一致，则返回200的状态码，且返回新的资源和新的资源标识符。

//TODO:vue自定义指令 vue-directive
//比如会应用在做权限管理上面。根据角色不同权限不同，所出现的权限按钮不同，可用自定义指令进行权限管理的实现。

//TODO:vue内置动画 transtion / transtionGroup
// 通过name来区分 kang-enter-from 等等

//TODO:v-if和v-for  在2.x版本  v-for权限大  在3.x  v-if的权限大

//TODO:vue中watch和computed
//computed为计算属性有缓存的特质，灵活的获取数据的更新，当前属性依赖于其他属性时，依赖发生改变的时候触发。否则走缓存。
//watch侦听器，也可以监听值的变化。可以进行异步的操作，如果需要新旧值对比操作时，可使用watch，“obj.a:function()”可以监听对象的属性变化。

//TODO: vue 插槽 slot
//默认插槽、具名插槽、动态插槽、 可允许让父组件向子组件内插入内容。

//TODO:es6 开始

//TODO: 变量声明  let、const、var
//let：let声明变量不存在变量提示，且声明的变量不允许重复，let的变量是块级作用域.
//const:声明一个常量，和let同样有块级作用域，声明的常量不可更改,不可更改的只是内存的地址。

//TODO: 解构
// let [a,b,c] = [1,2,3]

//TODO:扩展运算符 //...arr  可用于浅拷贝 或者合并数组等

//TODO: 模版字符串 es5使用的是单双引号 es6使用``和${}

//TODO:新增字符串方法 includes() startsWith('检索对象'，检索位置) endsWith() repeat('重复几次')  trimStart() trimEnd() 去除首尾空格

//TODO:新增数组的方法 entries('键值对') keys('key值') values(' value值')  for(let a of arr.keys())

//TODO:新增的数据类型 symbol 可表示唯一的值，可添加描述,不能参与运算。可作为变量的私有属性使用。let sym = symbol()  {[sym]:'123'}

//TODO:新增的数据结构  set和map
//set 类似于数组 但每个值都是唯一的 new Set() set可进行数组去重。 有add()、delet()、has()、clear() 等方法

//map 本质上是键值的集合  键可以是对象  有 set() get() has() delet() clear()等方法

//TODO:promise  async/await
//promise  处理异步的一种方式同时也处理了回调的问题 其中有三种状态  pending fullfilled  rejected  由pending>fullfilled  或者从pending>rejected 状态无法停止
//有两个函数作为参数 一个resolve成功后所执行 reject失败后所执行。回调函数包括then和catch一个处理成功后的回调 一个是失败后的.
//方法有all()和race()  all：promise.all([p1,p2]).then() 当所有任务执行完毕，都变为fullfilled或者rejected才会去调用.then
//race()赛跑机制 谁先执行完毕 则执行下一步操作。

//TODO: async/await  也是异步的一种方式  promise的语法糖。返回值是一个promsie对象。执行时，遇到await 暂停后面的操作  等异步操作完成之后再继续执行。

//TODO: es6  class  类
//class 定义一个类  其中的constructor 为构造函数本身 所以place.constructor == xuexiao.prototype.constructor
//class{} 所有在类里面定义的方法都在类的protetype上。
//static可定义一个静态方法，静态方法的属性名可以和非静态的属性名相同。
//super 子类继承父类  class child extends father { } 必要使用super  super()调用的是父类的构造函数 在使用this之前 相当于是super.fn.call(this),this指向的是child的实例
//子类通过super来调用父类的方法  static 中  super调用的是staic中的  原型上的  super调用的是原型上的

//TODO:js继承的几种方式
//第一种：原型链继承  通过将子的原型指向父的实例对象 eg：child.prototype = new person  缺点是 所有子对象共享同一个原型对象，原型的修改会相互影响。
//第二种：构造函数继承 通过在子的原型上使用parent.call(this,name)  将父构造函数中的执行上下文 设置为子对象的上下文，实现继承。缺点是只能继承父构造函数中的方法，无法继承父构造函数原型上的方法.
//第三种：原型式继承 将一个已有对象通过object.create()赋与另一个实现原型上属性和方法的继承，但是不能向构造函数传递参数。
//第四种：组合式继承，通过将子类原型指向父类的实例，再将子类的构造函数中改变this的上下文，调用父类的属性和方法。缺点就是调用了两次父类。
//第五种：寄生式继承，通过第三方，创建一个函数，让新对象的原型指向父对象，然后返回该对象。再创建一个函数，完善它自身的属性方法。缺点就是共享了同一块地址。如果别的修改了引用数据相应的都会发生改变。
//第六种：组合寄生式继承：通过创建第三方函数 将子类原型指向由父类原型所创建的对象 object.create.由于子类原型指向了父类的原型，所以要再通过child.prototype.constructor = child 将指向改回来。
//然后在子类的构造函数中，改变this的执行上下文，由此可访问父类的实例方法。 这样的话 多个子类继承修改也不会相互影响。
//第七种：es6的class extends继承。

//TODO:面试题

//TODO:实现水平垂直居中的方式有哪些
//1,使用flex布局 justify-content：center align-item：center
//2，使用绝对定位 position：absolute 使用calc 在知道子元素的宽高的前提下，使用top:calc(50% - 150px)
//3:使用绝对定位 上下左右都为0 然后margin：auto
//4:使用transfrom ，top50% left50% transfrom：translate（-50%，-50%）

//TODO:伪元素和伪类选择器 单冒号：为伪类  双冒号：：为伪元素
//伪类属于一种选择器，像：last-child ：nth-of-type ：hover等
//伪元素 常见的像 ：：after  ：：before ：：placeHolder等
//伪元素常用于万能清浮动 .clearFix:after{content:'',height:0,display:block,visbitity:hidden,clear:both}

//TODO:移动端如何适配不同屏幕的尺寸
//1,使用rem  rem相对于px是一个相对单位，根据根元素的font-size来计算。
//2，使用vw 1vw是1%的屏幕宽度，优势是不需要根据font-size来计算。
//rem和em的区别，rem是根据根节点进行计算，em是根据父元素的font-size来进行计算。

//TODO:数组去重的几种方式。
//1，利用set数据唯一的特性进行去重。
//2,双层for循环
