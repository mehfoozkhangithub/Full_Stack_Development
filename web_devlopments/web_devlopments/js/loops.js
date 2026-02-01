// loops

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);
// console.log(11);
// console.log(12);
// console.log(13);
// console.log(14);
// console.log(15);
// console.log(16);
// console.log(17);
// console.log(18);
// console.log(19);
// console.log(20);

/* let jhola = '';

for (let i = 1; i <= 20; i++) {
  jhola += ' ' + i;
}
console.log(jhola); */

/* 
steps 

1- initialization
2- condition 
3- code
4- increments

*/

/* for (let i = 100; i >= 1; i--) {
  // console.log(`the table of 5 X ${i} = ${5 * i}`);
  // console.log(5 * i);
  console.log(i);
}
 */

/* let number = 123;

number = number + '';
console.log('🚀 ~ number:', number.length);

let newNumber = '';
for (let i = number.length - 1; i >= 0; i--) {
  newNumber += number[i];
}
console.log('🚀 ~ number:', +newNumber, typeof +newNumber);
 */

let num = 432;
num = num + '';

// num = num.split('').map((el) => +el);

// console.log('num', typeof num, num);
// output become 9;
let count = 0;

// for (let i = 0; i < num.length; i++) {
//   count += +num[i];
// }
// console.log('🚀 ~ count:', count);

let i = 0;

while (i < num.length) {
  count += Number(num[i]);
  i++;
}

// console.log(count);

// 5. Print all numbers between start = 1 and end =  200 that are divisible by both 3 and 5.

/* let start = 1;
let end = 200;

while (start <= end) {
  if (start % 3 === 0 && start % 5 === 0) {
    console.log(start);
  }
  start++;
} */

let start = 1;

let data = Date.now();
console.log('🚀 ~ data:', data);

do {
  console.log(start);
  start++;
} while (start < 3);
