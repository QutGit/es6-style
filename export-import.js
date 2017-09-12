/*
      export 和 exports

      用法：
      module.exports = ....
      exports = ...

      export ...
      export default ...

      区别：
      export 是es6引入的语法，用于导出模块中的变量，对象，函数，类。对应的导入关键字是 import
      exports 在nodejs中，每一个js文件都被看成是一个模块，所以nodejs会为每一个js文件生成一个module对象，这个对象会有一个exports属性，并且这个属性是一个空对象


      exports 对象，引用的是module的exports属性

      export 跟 export default  都是es6的导出语法
      区别：
      export default 在一个模块中只能有一个，也可以没有，export在一个模块中可以有多个
      export default 的对象，变量，函数，类，可以没有名字，export 必须有名字

      export default 对应的import 和 export 有所区别：
    */

    // test.js
    export default const a = 1;
    export const a = 1;

    // 对应的import分别是
    import a from 'test';
    import {a} from 'test'; // 必须加上 {}

    // import 时取别名的区别
    import b from 'test'; // export default 对应的取别名方式
    import {a as b} from 'test'; // export 对应的取别名方式
