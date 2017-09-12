//assign方法
  // var obj = {
  //   a:{x:1,y:{s:1,u:{e:2,r:function(){console.log('111')}}}}
  // }

  // function fun(name){
  //   this.name = name;
  // }

  // console.log(fun.toString())

  // var copy = Object.assign({},obj);
  // console.log(JSON.parse(JSON.stringify(copy)))
  // $('#assign').html(JSON.stringify(copy));

  // var o1 = {a:1}
  // var o2 = {b:2}
  // var o3 = {a:3}
  // var o4 = {c:4}

  // var cp = Object.assign(o1,o2,o3,o4)
  // console.log(cp)

  /*=====================================*/
  //defineProperties  在一个对象上定义新的属性或修改现有属性，并返回该对象
  // var obj = {};
  // Object.defineProperties(obj,{
  //   'property1':{
  //     value:true,
  //     writable:true
  //   },
  //   'property2':{
  //     value:'hello',
  //     writable:false
  //   }
  // })

  // obj.property1 = 1;

  // console.log(obj)

  /*=====================================*/
  // Object.create() 使用指定的原型对象和其属性创建了一个新对象
  // function Shape(){
  //   this.x = 0;
  //   this.y = 0;
  //   this.move=function(x,y){
  //     this.x *= x;
  //     this.y *= y;
  //   }
  // }

  // Shape.prototype.move = function(x,y){
  //   this.x += x;
  //   this.y += y;
  //   console.log('Shape moved.');
  // }

  // function Rectangle(){
  //   Shape.call(this);
  // }

  // //会把Shape中的所有属性赋值，包括自身属性跟原型链中的属性
  // // Rectangle.prototype = new Shape();


  // //只会把原型中的属性赋值到 Rectangle中
  // Rectangle.prototype = Object.create(Shape.prototype);
  // // Rectangle.prototype.constructor = Rectangle;

  // var rect = new Rectangle();
  // var shape = new Shape();

  // console.log(rect instanceof Rectangle)
  // console.log(rect instanceof Shape)

  // rect.move(3,3);

  // console.log(rect)
  // console.log(shape)

  /*=====================================*/
  // Object.freeze(obj) 方法可以冻结一个对象，冻结指的是不能向这个对象添加新的属性，不能修改其已有属性的值，
  // 不能删除已有属性，以及不能修改该对象已有属性的可枚举性、可配置性。也就是说，这个对象是不可改变的，返回被冻结的对象
  // 但是如果一个属性的值是个对象，则这个对象中的属性是可以修改的，除非他也是个冻结对象

  // var obj = {
  //   prop:function(){},
  //   foo:'bar'
  // }

  // //可以添加新的属性，已有的属性可以被修改或删除
  // obj.foo = 'baz';
  // obj.lump = 'woor';
  // delete obj.prop;

  // console.log('冻结前',obj);

  // var o = Object.freeze(obj);
  // obj.foo = 'update';
  // obj.update = 'hahah';

  // console.log('冻结后',obj);

  // //在严格模式中
  // function fail(){
  //   "use strict";
  //   obj.foo = 'strict';
  //   delete obj.lump;
  //   console.log('严格模式',obj)
  // }

  // // fail();

  // //使用defineProperty方法同样会报错
  // Object.defineProperty(obj,'ohai',{value:17});
  // Object.defineProperty(obj,'foo',{value:'eit'})

  // console.log('defineProperty',obj)

  /*=====================================*/
  // Object.getOwnPropertyNames(obj) 返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性）组成的数组
  //不能获取原型链属性
  // var arr = ['a','b','c'];
  // console.log(Object.getOwnPropertyNames(arr).sort())
  // var obj = {name:'a',type:'b',age:'c'};
  // console.log(Object.getOwnPropertyNames(obj).sort())
  // Object.getOwnPropertyNames(obj).forEach(function(val,idx,array){
  //   console.log(val + '->' + obj[val])
  // })

  // //不可枚举属性
  // var my_obj = Object.create({},{
  //   getFoo:{
  //     value:function(){return this.foo;},
  //     enumerable:false
  //   }
  // })
  // my_obj.foo = 1;
  // console.log(Object.getOwnPropertyNames(my_obj).sort())
  // console.log(Object.getOwnPropertyDescriptors(my_obj,'getFoo'))

  /*=====================================*/
  // Symbol是一种特殊的不可改变的数据类型，可以作为对象属性的标识使用。
  // Symbol对象是一个symbol primitive data type （原始数据类型） 的隐式对象包装器


  /*=====================================*/
  // Object.getOwnPropertySymbols(obj) 返回一个数组，该数组包含了指定对象自身的（非继承）所有symbol属性键
  // var obj = {};
  // var a = Symbol('a');
  // var b = Symbol.for('b')

  // console.log(a)
  // console.log(b)

  // obj[a] = 'localSymbol';
  // obj[b] = 'globalSymbol';

  // console.log(obj)

  // var objectSymbols = Object.getOwnPropertySymbols(obj);

  // console.log(objectSymbols.length)
  // console.log(objectSymbols)

  /*=====================================*/
  // Object.getPrototypeOf(obj) 返回指定对象的原型，即内部prototype属性值
  // var proto = {};
  // var obj = Object.create(proto);
  // console.log(obj)
  // proto.prototype = function(){
  //   console.log('proto 原型方法')
  // }
  // proto.prototype.name = 'jjj';
  // console.log(Object.getPrototypeOf(obj))
  // console.log(proto);

  /*=====================================*/
  // Object.is(value1,value2) 确定两个值是否是相同值
  // 这种相等性判断逻辑和传统的 == 运算符所用的不同，==运算符会对两边的操作数做隐式的类型转换，然后进行相等性比较，所以才有类似： '' == false 为true
  // 当然，严格相等运算符 === 也不会对操作数进行类型转换，但是他会把 -0 和 +0 这两个数值视为相同的 还会把NaN看成是不相等的

  // console.log(Object.is('foo','foo'));//true
  // console.log(Object.is(window,window));//true
  // console.log(Object.is('foo','bar')) //false
  // console.log(Object.is([],[]))//false

  // var test = {a:1};
  // console.log(Object.is(test,test))//true

  // console.log(Object.is(null,null))//true

  // //特例
  // console.log(Object.is(0,-0))//false
  // console.log(Object.is(-0,-0))//true
  // console.log(Object.is(NaN,0/0))//true

  // //兼容性处理
  // if (!Object.is) {
  //   Object.is = function(x, y) {
  //     // SameValue algorithm
  //     if (x === y) { // Steps 1-5, 7-10
  //       // Steps 6.b-6.e: +0 != -0
  //       return x !== 0 || 1 / x === 1 / y;
  //     } else {
  //       // Step 6.a: NaN == NaN
  //       return x !== x && y !== y;
  //     }
  //   };
  // }

  /*=====================================*/
  // Object.isExtensible() 判断一个对象是否可扩展的（是否可以在他上面添加新的属性）
  // Object.preventExtensions，Object.seal 或 Object.freeze 方法都可以标记一个对象为不可扩展

  /*=====================================*/
  // Object.preventExtensions(obj) 让一个对象变的不可扩展，注：不可扩展的对象的属性通常仍然可以被删除。
  // preventExtensions() 只能阻止一个对象不能再添加新的自身属性，仍然可以为该对象的原型添加属性

  /*=====================================*/
  // Object.seal() 让一个对象密封，并返回密封后的对象。密封后的对象将会阻止想对象添加新的属性，并且会将所有属性的可配置性
  // （configurable）置为不可配置（false），即不可修改属性的描述或删除属性。但是可写性描述（writable）为可写true的属性值
  // 仍然可以被修改
  // var obj = {
  //   prop:function(){},
  //   foo:'bar'
  // }

  // //可以添加新的属性，已有属性的值可以修改，可以删除
  // obj.foo = 'haha';
  // obj.lumpy = 'woof';
  // delete obj.prop;
  // console.log(obj)

  // var o = Object.seal(obj);
  // console.log(Object.isSealed(obj))

  // //仍然可以修改密封对象上的属性值
  // obj.foo = 'kkkk';

  // //不能把一个数据属性重定义成访问属性器
  // // Object.defineProperty(obj,"foo",{get:function(){return 'ss'}});

  // //任何属性值以外的需改操作都会失败
  // obj.quaxxor = 'duck';
  // delete obj.foo;
  // console.log(obj)
