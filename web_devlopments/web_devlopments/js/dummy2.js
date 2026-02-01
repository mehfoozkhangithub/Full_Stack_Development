// let fruits = [
//   'mango',
//   'banana',
//   'apple',
//   'kiwi',
//   'orange',
//   'mango',
//   'mango',
//   'mango',
//   'mango',
//   'banana',
//   'apple',
//   'kiwi',
//   'orange',
//   'orange',
//   'orange',
//   'orange',
//   'mango',
//   'banana',
//   'apple',
//   'kiwi',
//   'kiwi',
//   'kiwi',
//   'kiwi',
//   'orange',
// ];

// let newData = fruits.filter((el, i, arr) => {
//   return el !== 'mango';
// });
// console.log('🚀 ~ newData:', newData);

// let countElement = fruits.reduce((initialValue, currentValue) => {
//   initialValue[currentValue] = (initialValue[currentValue] || 0) + 1;
//   return initialValue;
// }, {});
// console.log('🚀 ~ countElement:', countElement);

// const acc = [
//   { name: 'mehfooz', age: 20, amt: 200 },
//   { name: 'mehfooz', age: 20, amt: 60 },
//   { name: 'mehfooz', age: 20, amt: 116 },
//   { name: 'mehfooz', age: 20, amt: 986 },
//   { name: 'mehfooz', age: 20, amt: 356 },
//   { name: 'mehfooz', age: 20, amt: 186 },
// ];

// let countValue = acc.reduce((init, curr) => {
//   init += curr.amt;
//   return init;
// }, 0);
// console.log('🚀 ~ countValue:', countValue);

// conversion of number system

let number = 20; // decimal number

// convert into in binary number

// string -> toStiring() number to string

// bin
let ans = number.toString(2);

// console.log('bin', 'type ->', typeof ans, 'ans -> ', ans);
// dec
ans = parseInt(ans, 2);

// console.log('dec', 'type ->', typeof ans, 'ans -> ', ans);

// dec -> octa

let octaVal = number.toString(8);

// console.log('oct', 'type ->', typeof octaVal, 'octaVal -> ', octaVal);

let octTohex = parseInt(octaVal, 8).toString(16);
// console.log('🚀 ~ octTohex:', octTohex);

// hexa

let hexaVal = number.toString(16);

// console.log('oct', 'type ->', typeof hexaVal, 'hexaVal -> ', hexaVal);

// octa -> dec

// octa -> bin

// +
// =+
// +=

let count = '1';

count = count + 2;

count += 4;

let count2 = '3';

count2 = +count2; // unary operator

// console.log('type ->', typeof count2, 'countValue', count2);

// console.log('type ->', typeof +count, 'countValue', +count);
// console.log('countValue', count);

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

let mixArr = [...arr1, ...arr2];
// console.log('🚀 ~ mixArr:', mixArr); // [1,2,3,4,5,6,7,8,9,10]

let [a, b, ...rest] = arr1;
// console.log('🚀 ~ a:', a);
// console.log('🚀 ~ b:', b);
// console.log('🚀 ~ rest:', rest);

// num to str

let num = 30;

console.log('type', typeof num, 'num:', num);

let numTOstr = num + '';

console.log('type', typeof numTOstr, 'numTOstr:', numTOstr);

let strTOnum = +num;
console.log('type', typeof strTOnum, 'strTOnum:', strTOnum);

let methodConvNum = Number(num);
console.log('type', typeof methodConvNum, 'methodConvNum:', methodConvNum);

/* 
function

1. declaration
2. defination
3. calling function
*/

function showValue() {
  let number = 1;
  console.log('🚀 ~ number:', number);
  console.log('hello i am a function');
}

showValue();
