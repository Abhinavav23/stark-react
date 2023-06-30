// console.log('inside mathematical function');
// export const addition = (a,b) => {
//     console.log(`addition of number ${a} and ${b} is ${a+b}`);
//     return a+b
// }

// export const multiplication = (a,b) => {
//     console.log(`multiplication of number ${a} and ${b} is ${a*b}`);
//     return a*b
// }

// export const division = (a,b) => {
//     console.log(`division of number ${a} and ${b} is ${a/b}`);
//     return a/b
// }

// multiplication(100,3);

// const username = 'Abhinav';
// const email = 'abhinav@mail'

// export default username
// // export default email

// export means moving this functionality out to be reused in other files
// named export
// the exported member will be exported as it is and while importing we have to use the same name

// default export
// use default keyword while exporting
// while importing dont use any curly braces
// while importing we can choose to have our own name

// module.exports.multiplication = (a,b) => {
//   console.log(`multiplication of number ${a} and ${b} is ${a * b}`);
//   return a * b;
// };

// module.exports.division = (a, b) => {
//   console.log(`division of number ${a} and ${b} is ${a / b}`);
//   return a / b;
// };

module.exports.username = 'Abhinav'
module.exports.email = 'abhinav@mail'
