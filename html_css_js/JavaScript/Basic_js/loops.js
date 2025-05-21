/*  for loops  */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // console.log(" arr:", arr.length);

for (let i = 0; i < arr.length; i++) {
  // console.log(" i:", arr[i]);
  // code
}

/* while loop */
let num = 9;
let i = 0; // 0+1+2+3+4+5+6+7+8
let sum = null;
while (i < num) {
  sum += i;
  i++;
}
// console.log(" sum:", sum);

/*  start 1 -  end 100 */

/* let start = 1;
let end = 100;

while (start <= end) {
  console.log(" start:", start);
  start++;
}
 */

/* let N = parseInt(process.argv[2]);
let i1 = 2;
while (i1 <= N) {
  if (i1 % 2 == 0) {
    console.log("this is even number", i1);
  }
  i1++;
} */

/* 
let n = process.argv[2];
let m = process.argv[1];
console.log(" m:", m);
console.log(" n:", n);
*/

/*  summ unit user enter */

/* let sum1 = 0;
let num1 = parseInt(process.argv[2]);

while (num1 !== 0) {
  sum1 += num1;
  num1 = parseInt(process.argv[2]);
}

console.log("Total sum:", sum); */

/*  reverse the strings */

// let str = process.argv[2]; // arguments
// let length = str.length - 1; // hello -> 5
// let index = 0; // strat initial stage
// let reversStr = ""; // bag -> olleh <-- output

// while (length >= index) {
//   reversStr += str[length];
//   length--;
// }
// console.log(" reversStr:", reversStr);

/* do while loop */
let numbers = 6;

do {
  console.log(numbers);
  numbers++;
} while (numbers < 5);
