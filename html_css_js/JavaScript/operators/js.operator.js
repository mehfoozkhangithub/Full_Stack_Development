/* Arithemtic operators */ // done
/* Asignments operators */ // done
/* Comparison operators */

let num1 = 2;
let num2 = 3;

console.log(" checking:", num1 == num2 - 1);

/* 

1. == -> data value 
2. === -> data type  check boths


*/
let num4 = "3";
let num5 = 3;

console.log(" checking1:", num4 === num5 - 1);

console.log(typeof num4);
console.log(typeof num5);

/* 
! = -> != -> data value

! = = -> !== -> vlaue and type
 */

let flag1 = false;

console.log(flag1 !== true);
/*  task */

/* 

!= 
!==
>
<
<=
>=

*/

/* Logical operators */

/* 

&& -> AND
|| -> OR
! -> NOT


*/

console.log(num1 == num2 - 1 && num4 == num5);
// console.log(true && true);

console.log(num1 == num2 - 1 || num4 != num5);
// console.log(true || false);

let flags = true;
console.log(" flags:", !flags);

/* Bitwise operators */

/* String operators */

/* 
     
+ => concatination 
+= => Append string

*/

let name1 = "mehfooz";
let name2 = "khan";

// let full_name = name1 + " " + name2;
// console.log(" full_name:", full_name);

name1 += " " + name2;
console.log(" name1:", name1);

/* Continal (Ternary) operators */

let valCheck = 1 > 18 ? true : false;
console.log(" valCheck:", valCheck);

/* 
 condition ? true :false

*/

/* Type operators */

let str = "Mehfooz khan";
console.log(" str:", typeof str);

let num = 8;
console.log(" num:", typeof num);

/* Spread and rest operators */

let arr = [1, 2, 3, 4];

let newArr = [...arr, 5, 6, 7, 8];
console.log(" newArr:", newArr);

// let finalArr = [...arr, ...newArr];
// console.log(" finalArr:", finalArr);

// here we have to use rest operators

const sum = (...args) => {
  console.log(" args:", args);
};

sum(1, 2, 3);

// this is create the parameters into array.
