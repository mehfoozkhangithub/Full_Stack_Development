let num1 = 0;

// let num2 = '9';

// if (num1 === num2) {
//   console.log('this is a equal number...');
// } else {
//   console.log('this is not a equal number...');
// }

// if (num1 > 0) {
//   console.log('this is positive number...');
// } else if (num1 < 0) {
//   console.log('this is negative number...');
// } else {
//   console.log('this is equal to zero...');
// }

let value = true;

// switch (value) {
//   case true:
//     console.log('the value is true....');
//     break;

//   case false:
//     console.log('the value is false....');
//     break;

//   default:
//     console.log('default value');
//     break;
// }

/* 

for 

while

do while

*/

let end = 5;

// for (let i = 1; i <= end; i++) {
//   console.log('from for loop', i);
// }

let start = 1;

// do {
//   //   console.log('from do while loop', start);
//   start++;
//   console.log('from do while loop', start);
// } while (start <= 2);

function sum() {
  let number1 = 7;
  let number2 = 19;

  //   console.log(number1 + number2);

  return number1 + number2;
}
// console.log('this is outSide from func', sum());

function sub() {
  let number3 = 20;
  let first_func = sum();

  let finalAns = first_func - number3;

  return finalAns;
}

let ansSub = sub();

console.log('this is sub ans', ansSub);
