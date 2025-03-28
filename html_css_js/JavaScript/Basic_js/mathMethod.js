// useing method

let number = 125;

let ans = Math.pow(number, 3); // cubic value // 15625
// console.log(ans);
// sqrt method
let number2 = Math.sqrt(number); // root value // 5

// console.log(number2);

// without methods

//sqrt method related.
let number3 = 27;

// console.log(number3 ** (1 / 3));

// cubic root.

//ceil
// 7.99->8

//7.1 -> 8

// floor
// 7.1->7

// 7.6 -> 7

let number7 = 125;
// console.log(Math.ceil(Math.pow(number7, 1 / 3)));

let num23 = 3.33;

// console.log(Math.fround(num23));

//random value generat;

let num2 = 6.4;
// console.log(Math.round(num2));

function randomNumber(x) {
  console.log(Math.round(Math.random() * x));
}
randomNumber(num2);

// log value

let num77 = 16;
let num74 = 1;

// console.log(Math.log(num77) / Math.log(num74));
console.log(Math.log2(num77));
