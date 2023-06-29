import { addition, multiplication } from "./mathmaticalFunc.js";
console.log("start");

function diffOfMultiplicationAndSum(a, b) {
  const multi = multiplication(a, b);
  const add = addition(a, b);
  return multi - add;
}

console.log(diffOfMultiplicationAndSum(10, 6));
