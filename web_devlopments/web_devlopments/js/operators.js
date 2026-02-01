// Arithmatic operators

let num1 = 3;
let num2 = 4;

/* 
+
-
*
/
**

*/

let ans1 = num1 + num2;
console.log('🚀 ~ ans1:', ans1);
let ans2 = num1 - num2;
console.log('🚀 ~ ans2:', ans2);
let ans3 = num1 / num2;
console.log('🚀 ~ ans3:', ans3);
let ans4 = num1 * num2;
console.log('🚀 ~ ans4:', ans4);
let ans5 = num1 ** num2;
console.log('🚀 ~ ans5:', ans5);
// assign operator

let name = 'mehfooz';
let name1 = 20;
let name2 = false;

// var a = 5;

// let a = 5;

//comparision operators

/* 


let a=5;

var a=5;

a == a -> true = check value

=== ->  data value and data type

8 <= 8  -> false 
8 >= 8

*/

let age = process.argv[2];

// age = Number(age);
//age = +age;// unary operator
console.log('🚀 ~ age:', typeof age);

if (age >= 18) {
  // code => logic
  console.log('yes true');
} else if (typeof age === 'string') {
  console.log('please put number value not a string...');
} else {
  console.log('no false');
}

let val1 = 3;
let val2 = '3';

console.log(val1 == val2 && val2 != val1); // true

console.log(val1 === val2 && val1 !== val2); // false  data-value=>true && data-type=> false

//logical

/* 

true && true 

false || true 

!true -> false 

*/

/* 

bit-wise operators

&
|
~
^

>>
<<

>>>
<<<


*/
