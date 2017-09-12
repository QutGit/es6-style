/*
    Array.from(arrayLike,fn)
    用于将两类对象转为真正的数组：
    1.类数组对象(array-like object) 本质特征是必须有length属性
    2.可遍历对象(iterable)
    第一个参数：要转的类数组
    第二个参数：作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组
  */
  var arrayLike = {
    '0':'a',
    '1':'b',
    '2':'c',
    length:3
  }

  //返回长度为3的数组
  var arrayLike2 = {
    length:3
  }

  var arrayLike3 = {
    name:'jjzhang',
    age:18,
    tall:'180cm',
    length:3
  }

  function fun(){
    //原始数据
    console.log('原始数据',arguments)

    //ES5写法
    var arr1 = [].slice.call(arguments);
    console.log('es5',arr1)

    //ES6写法
    var arr2 = Array.from(arguments)
    console.log('es6',arr2)
  }

  function fun1(...args){
    //原始数据
    console.log('原始数据',args)

    //ES5写法
    var arr1 = [].slice.call(args);
    console.log('es5',arr1)

    //ES6写法
    var arr2 = Array.from(args)
    console.log('es6',arr2)
  }

  // fun1(1,'a',[1,2])

  var doms = $('#assign').find('span');

  // //原始数据
  // console.log('原始数据',doms)

  // //ES5写法
  // var arr1 = [].slice.call(arrayLike3);
  // console.log('es5',arr1)

  // //ES6写法
  // var arr2 = Array.from(arrayLike3)
  // console.log('es6',arr2)

  // //ES5写法
  // var arr1 = [].slice.call([1,2,3]).map(x => x * x);
  // console.log('es5',arr1)

  // //ES6写法
  // var arr2 = Array.from([1,2,3],x => x * x)
  // console.log('es6',arr2)

  /* 获取所有DOM节点的文本内容 */
  //ES5写法
  // var arr1 = [].slice.call(doms).map(s => s.textContent);
  // console.log('es5',arr1)

  // //ES6写法
  // var arr2 = Array.from(doms,s => s.textContent)
  // console.log('es6',arr2)

  /* 将数组中布尔值为false的成员转换成0 */
  // var arr2 = Array.from([1,,2,,3],(n) => n || 0)
  // console.log('es6',arr2)

  // /* 返回各种数据的数据类型 */
  // function typeOf(){
  //   console.log(Array.from(arguments,value => typeof value))
  // }

  // typeOf(null,undefined,1,'hello',false,NaN,{},[]);

  /* 将字符串转为数组 */
  // console.log('=>',Array.from('abcdefg'));


  /*
    Array.of(1，2，3)
    用于将一组值转为数组
    参数：一组数值
    注：这个方法主要目的，是弥补数组构造函数 Array()的不足，因为参数个数不同，会导致 Array()的行为有差异
    对于 Array() 只有当参数个数不少于2个时，Array()才返回由参数组成的新数组，参数只有一个时是指定数组长度
  */

  // console.log(Array.of(2,3,12)) //[2,3,12]
  // console.log(8) // [8]
  // console.log(Array.of(2,3,12).length) //3

  // console.log('========================')

  // console.log(Array()) //[]
  // console.log(Array(3)) // [undefined,undefined,undefined]
  // console.log(Array(2,3,12)) //[2,3,12]

  // // 实现方式
  // function ArrayOf(){
  //   return [].slice.call(arguments);
  // }


  /*
    copyWithin(target,start = 0,end = this.length)
    在当前数组内部，将指定位置的成员复制到其他位置(会覆盖原有成员)，然后返回当前数组，使用这个方法会修改当前数组
    target(必须)：从该位置开始替换数据
    start(可选)：从该位置开始读取数据，默认为0.如果为负数，表示倒数
    end(可选)：到该位置前停止读取数据，默认等于数组长度。如果为负数，表示倒数
    三个参数都是数值，如果没写会自动转为数值
  */

  // console.log([1,2,3,4,5].copyWithin(0,3)) //[4,5,3,4,5]
  // console.log([1,2,3,4,5].copyWithin(0,3,4)) //[4,2,3,4,5]
  // console.log([1,2,3,4,5].copyWithin(0,-2,-1))// [4,2,3,4,5]  -2相当于3号位，-1相当于4号位
  // console.log([].copyWithin.call({length:5,3:1},0,3)) //{0: 1, 3: 1, length: 5}


  /*
    find() 跟 findIndex()
    find： 用于找出第一个符合条件的数组成员。参数是一个回调函数，所有数组成员依次执行该回调函数，直到找到第一个返回值为true的成员
    然后返回该成员，如果没有符合条件的成员，则返回undefined
    findIndex：用法与find类似，返回第一个符合条件的成员的位置，如果都不符合条件，返回 -1
  */

  // var arr = [];
  // arr = [1,4,-5,10].find((n) => n > 3); //4
  // arr = [1,5,10,15].find((value,index,arr) => value > 9); // 10  回调方法有三个参数：当前值，当前位置，当前数组

  // arr = [1,5,10,18].findIndex((value,index,arr) => value > 9) // 2

  // //这两个方法都可以发现NaN，弥补了IndexOf方法的不足
  // var index = [NaN].indexOf(NaN) // -1
  // arr = [NaN].findIndex(y => Object.is(NaN,y)); // 0

  // console.log(index)
  // console.log(arr)


  /*
    fill() 方法
    使用一个给定值，填充一个数组
    三个参数：插入值，插入开始位置，插入结束位置
  */

  // var arr = [];
  // arr = ['a','b','c'].fill(7); // [7,7,7]
  // arr = new Array(3).fill(6); // [6,6,6]
  // arr = ['a','b','c'].fill(10,1,2); //['a',10,'b']


  // console.log(arr)


  /*
    entries() keys()  values()
    用于遍历数组，可以用 for...of 循环进行遍历
    区别：keys 是对键名遍历，values 是对键值遍历， entries是对键值对遍历
  */

  // for(let index of ['a','b'].keys()){
  //   console.log(index) // 0 1
  // }

  // for(let elem of ['a','b'].values()){
  //   console.log(elem) // 0 1
  // }

  // for(let elem of ['a','b'].entries()){
  //   console.log(elem) // 0 1
  // }

  //如果不使用for...of可以手动调用next方法
  // let letter = ['a','b','c'];
  // let entries = letter.entries();
  // console.log(entries.next().value)
  // console.log(entries.next().value)
  // console.log(entries.next().value)
  // console.log(entries.next().value)


  /*
    includes(value,index)
    返回一个布尔值，标识某个数组是否包含给定的值
    第二个参数标识搜索的起始位置，默认为0，如果第二个参数为负数，表示倒数位置，如果大于数组长度，则会重置为从0开始
  */

  // var flag = '';
  // flag = [1,2,3].includes(2); //true
  // flag = [1,2,3].includes(4); //false
  // flag = [1,2,NaN].includes(NaN); //true

  // flag = [1,2,3].includes(3,3); // false
  // flag = [1,2,3].includes(3,-1); //true


  // console.log(flag)

