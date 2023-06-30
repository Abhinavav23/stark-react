// named import 
// import { addition, multiplication } from "./mathmaticalFunc.js";

// import myuser from './mathmaticalFunc.js';

// import * as value from './mathmaticalFunc.js'




// commonJS
// const myval = require('./mathmaticalFunc.js');
// const {multiplication} = require('./mathmaticalFunc.js');
const userInfo = require('./mathmaticalFunc.js');
const complexFun = require('./complexMathFunctions.js');


console.log("start");
// console.log(myuser);
// console.log(value);

// console.log('myval', myval);
// console.log(myval.multiplication);

// multiplication(2,4)

console.log(userInfo);
console.log(complexFun);


function diffOfMultiplicationAndSum(a, b) {
  const multi = multiplication(a, b);
  const add = addition(a, b);
  return multi - add;
}

// console.log(diffOfMultiplicationAndSum(10, 6));
