# es6-style
ES6编程风格
/*
      用let和const可以完全替代var
    */

    // bad
    var a = 1,b = 2,c = 3;

    //good
    const a = 1;
    const b = 2;
    const c = 3;

    //best
    const [a,b,c] = [1,2,3]


    /*
      使用数组成员对变量赋值时，优先使用解构赋值
    */

    const arr = [1,2,3,4];

    //bad
    var first = arr[0];
    var second = arr[1];

    //good
    const [first,second] = arr;

    /*
      3.函数的参数如果是如果是对象成员，优先使用解构赋值
    */

    //bad
    function getFullName(user){
      const firstName = user.firstName;
      const lastName = user.lastName;
    }

    //good
    function getFullName(user){
      const {firstName,lastName} = user;
    }

    //best
    function getFullName({firstName,lastName}){}

    /*
      如果函数返回多个值，优先使用对象的解构赋值，而不是数组的解构赋值，这样便于以后添加返回值，以及更改返回值的顺序
    */

    //bad
    function processInput(input){
      return [top,right,bottom,left];
    }

    //good
    function processInput(input){
      return {top,right,bottom,left};
    }

    const {top,left} = processInput(input);

    /*
     单行定义的对象，最后一个成员不以逗号结尾。多行定义的对象，最后一个成员以逗号结尾。
    */

    // bad
    const a = { k1: v1, k2: v2, };
    const b = {
      k1: v1,
      k2: v2
    };

    // good
    const a = { k1: v1, k2: v2 };
    const b = {
      k1: v1,
      k2: v2,
    };

    /*
      对象尽量静态化，一旦定义，就不得随意添加新的属性。如果添加属性不可避免，要使用Object.assign方法。
    */

    // bad
    const a = {};
    a.x = 3;

    // if reshape unavoidable
    const a = {};
    Object.assign(a, { x: 3 });

    /*
      如果对象的属性名是动态的，可以在创造对象的时候，使用属性表达式定义
        确保一个对象的所有属性在一个地方定义
    */

    // bad
    const obj = {
      id: 5,
      name: 'San Francisco',
    };
    obj[getKey('enabled')] = true;

    // good
    const obj = {
      id: 5,
      name: 'San Francisco',
      [getKey('enabled')]: true,
    };

    /*
      对象的属性和方法，尽量采用简洁表达法，这样易于描述和书写
    */

    var ref = 'some value';

    // bad
    const atom = {
      ref: ref,

      value: 1,

      addValue: function (value) {
        return atom.value + value;
      },
    };

    // good
    const atom = {
      ref,

      value: 1,

      addValue(value) {
        return atom.value + value;
      },
    };

    /*
      使用扩展运算符（...）拷贝数组。
    */

    // bad
    const len = items.length;
    const itemsCopy = [];
    let i;

    for (i = 0; i < len; i++) {
      itemsCopy[i] = items[i];
    }

    // good
    const itemsCopy = [...items];

    /*
      使用Array.from方法，将类似数组的对象转为数组。
    */

    const foo = document.querySelectorAll('.foo');
    const nodes = Array.from(foo);

    /*
      ============== 函数 ==============
    */

    /*
      立即执行函数可以写成箭头函数的形式
    */

    (() => {
      console.log('Welcome to the Internet.');
    })();

    /*
      那些需要使用函数表达式的场合，尽量用箭头函数代替。因为这样更简洁，而且绑定了this
    */

    // bad
    [1, 2, 3].map(function (x) {
      return x * x;
    });

    // good
    [1, 2, 3].map((x) => {
      return x * x;
    });

    // best
    [1, 2, 3].map(x => x * x);

    /*
      箭头函数取代Function.prototype.bind，不应再用self/_this/that绑定 this
    */

    // bad
    const self = this;
    const boundMethod = function(...params) {
      return method.apply(self, params);
    }

    // acceptable
    const boundMethod = method.bind(this);

    // best
    const boundMethod = (...params) => method.apply(this, params);


    /*
      不要在函数体内使用arguments变量，使用rest运算符（...）代替。因为rest运算符显式表明你想要获取参数，而且arguments是一个类似数组的对象，而rest运算符可以提供一个真正的数组
    */

    // bad
    function concatenateAll() {
      const args = Array.prototype.slice.call(arguments);
      return args.join('');
    }

    // good
    function concatenateAll(...args) {
      return args.join('');
    }

    /*
      使用默认值语法设置函数参数的默认值
    */

    // bad
    function handleThings(opts) {
      opts = opts || {};
    }

    // good
    function handleThings(opts = {}) {
      // ...
    }

    /*
      总是用Class，取代需要prototype的操作。因为Class的写法更简洁，更易于理解
    */

    // bad
    function Queue(contents = []) {
      this._queue = [...contents];
    }
    Queue.prototype.pop = function() {
      const value = this._queue[0];
      this._queue.splice(0, 1);
      return value;
    }

    // good
    class Queue {
      constructor(contents = []) {
        this._queue = [...contents];
      }
      pop() {
        const value = this._queue[0];
        this._queue.splice(0, 1);
        return value;
      }
    }

    /*
      使用extends实现继承，因为这样更简单，不会有破坏instanceof运算的危险
      =======================================
    */

    // bad
    const inherits = require('inherits');
    function PeekableQueue(contents) {
      Queue.apply(this, contents);
    }
    inherits(PeekableQueue, Queue);
    PeekableQueue.prototype.peek = function() {
      return this._queue[0];
    }

    // good
    class PeekableQueue extends Queue {
      peek() {
        return this._queue[0];
      }
    }

    /*
      Module语法是JavaScript模块的标准写法，坚持使用这种写法。使用import取代require
    */

    // bad
    const moduleA = require('moduleA');
    const func1 = moduleA.func1;
    const func2 = moduleA.func2;

    // good
    import { func1, func2 } from 'moduleA';

    /*
      使用export取代module.exports
    */

    // commonJS的写法
    var React = require('react');

    var Breadcrumbs = React.createClass({
      render() {
        return <nav />;
      }
    });

    module.exports = Breadcrumbs;

    // ES6的写法
    import React from 'react';

    const Breadcrumbs = React.createClass({
      render() {
        return <nav />;
      }
    });

    export default Breadcrumbs
