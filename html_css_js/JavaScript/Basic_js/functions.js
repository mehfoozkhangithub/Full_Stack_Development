/* functions */

function sum() {
  // basic nature of function is to return the value, if we not return the value it's give undefine
  console.log(2 + 4);
  return 2 + 4;
}

let x = sum();
console.log(' x:', x);

function sub() {
  // basic nature of function is to return the value, if we not return the value it's give undefine
  return 2 - 4;
}

let ans = sub();
console.log(' ans:', ans);

let num1 = 7;
let num2 = 7;
let num3 = 7;

function mul(a, b, c) {
  return a * b + c;
}

let ans2 = mul(num1, num2, num3);
console.log(' ans2:', ans2);

// /*  demo-2 */

let food = 'pullaov';
khushi(food);

function khushi(value) {
  hetuk(value);
}

function hetuk(value) {
  nishad(value);
}

function nishad(value) {
  farhan(value);
}

function farhan(value) {
  console.log(' value from farhan:', value);
}

function blockScope() {
  let names = 'mehfooz';
  console.log('this is my name:', names);
}

blockScope();

/*  arrow functions */

let stringConcatiation = () => {
  console.log(2 + 2);
};
stringConcatiation();

let myFunction = () => {
  console.log(2 + 1);
};

myFunction();




/* 

step 1  -> create function name calculator 

step 2 -> you should take two number as num1, num2, operaators [+-/*]

step 3 -> switch case condition and exicute the code and return the value expected



*/
