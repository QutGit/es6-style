/*
      1.对象克隆
    */

    // var obj = { a: 1 };
    // var copy = Object.assign({}, obj);
    // console.log(copy); // { a: 1 }

    /*
      2.合并对象
    */

    // var o1 = {a:1};
    // var o2 = {b:2};
    // var o3 = {c:3};

    // var obj = Object.assign(o1,o2,o3);
    // console.log(obj);
    // console.log(o1) // target object itself is changed
    // console.log(o2)
    // console.log(o3)

    /*
      问题1
    */

    // var obj = {
    //   title: {
    //     text:'object1',
    //     subtext:'title1'
    //   }
    // };

    // var opt = Object.assign({},obj,{
    //   title:{
    //     subtext:'title2'
    //   }
    // })

    // console.log(opt) //{title: { subtext: 'title2' }}

    // opt = Object.assign({},obj)
    // opt.title.subtext = 'title2';
    // console.log(opt) //{title: { subtext: 'title2',text:'object1' }}

    /*
      问题2
    */

    // var obj = {
    //   title: {
    //     text:'object1',
    //     subtext:'title1'
    //   }
    // };

    // var opt1 = Object.assign({},obj)
    // var opt2 = Object.assign({},obj)
    // opt1.title.subtext = 'title2';

    // // 说明在title对象层只是简单的浅拷贝，而没有继续深入的深拷贝，只是对顶层属性做了赋值，没有继续递归把子类进行深拷贝
    // // 只是一级属性复制，比浅拷贝多了一层
    // console.log(opt1)
    // console.log(opt2)


    /*
      Polyfill
    */

    if (!Object.assign) {
      // 定义assign方法
      Object.defineProperty(Object, 'assign', {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function(target) { // assign方法的第一个参数
          'use strict';
          // 第一个参数为空，则抛错
          if (target === undefined || target === null) {
            throw new TypeError('Cannot convert first argument to object');
          }

          var to = Object(target);
          // 遍历剩余所有参数
          for (var i = 1; i < arguments.length; i++) {
            var nextSource = arguments[i];
            // 参数为空，则跳过，继续下一个
            if (nextSource === undefined || nextSource === null) {
              continue;
            }
            nextSource = Object(nextSource);

            // 获取改参数的所有key值，并遍历
            var keysArray = Object.keys(nextSource);
            for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
              var nextKey = keysArray[nextIndex];
              var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
              // 如果不为空且可枚举，则直接浅拷贝赋值
              if (desc !== undefined && desc.enumerable) {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
          return to;
        }
      });
    }
