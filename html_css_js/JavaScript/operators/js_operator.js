/* Arithemtic operators */ // done

let n1 = 3;
let n2 = 4;

let mul = n1 * n2;
let dev = n1 / n2;
let sum1 = n1 + n2;
let sub1 = n1 - n2;
let expo = n1 ** n2;
console.log('🚀 ~ expo:', expo);
// console.log(' sum1:', sum1);
// console.log(' sub1:', sub1);
// console.log(' dev:', dev);
// console.log(' mul:', mul);

/* Asignments operators */ // done

let name = 'mehfooz-khan';
let age = 26;
let maried1 = false;
// console.log(' name:', typeof name);

/* Comparison operators */

let num1 = 3;
console.log('🚀 ~ num1:', typeof num1);

// let num2 = "3";
let num2 = '3';
console.log(' checking value:', num1 !== num2);
/* 

1. = = == -> data value 
2. = = = === -> data type  check boths  value & type same then it will give you the prope result


*/
// let num4 = 2;
// let num5 = 3;

// console.log(' checking1:', num4 === num5);

// console.log(typeof num4);
// console.log(typeof num5);

/* 
! = -> != -> data value

! = = -> !== -> vlaue and type
 */

let flag1 = false;

// console.log(flag1 !== true);
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
// let num1 = 3;
// let num2 = 3;

// let num4 = 3;
// let num5 = 3;
console.log('🚀 ~ or operator: (||)');
// console.log(num1 + 1 == num2 && num4 == num5);
// console.log(true && true);

// console.log(num1 == num2 || num4 != num5);
// console.log(true || false);

let flags = true;
console.log(' flags:', !flags);

/* Bitwise operators */

// coversion into number to binary and binary to number...

<<<<<<< HEAD
let number = 50; // decimal number
=======
let number = 26; // decimal number
>>>>>>> 75229686c5d827b03fbeb6ce118a50d109be3cf4

let binaryConv = number.toString(2);

// console.log(' binaryConv:', binaryConv);

/* biary to number */

let bin_To_num = parseInt(binaryConv, 2);

// console.log(' bin_To_num:', bin_To_num);

/* 
-> dealing with binary-system/number-system

& -> AND
| -> OR
~ -> NOT

*/

let num66 = 1;

let num77 = 14;

let binaryConv1 = num66.toString(2);

// console.log(' binaryConv:', binaryConv1);

let binaryConv2 = num77.toString(2);

// console.log(' binaryConv:', binaryConv2);

/* let and = num66 & num77;
// console.log(" and:", and);
*/

/* String operators */

/*  

+ => concatination 
+= => Append string

*/

let name8 = 'mehfooz';

let sur_name = 'khan';

let full_name = name8 + ' ' + sur_name;

let maried = false;

let answer = `${name8} ${sur_name} is not maried ${maried}`;

<<<<<<< HEAD

=======
>>>>>>> 75229686c5d827b03fbeb6ce118a50d109be3cf4
// console.log(' answer:', answer);

let name1 = 'mehfooz';
let name2 = 'khan';

// let full_name = name1 + " " + name2;
// console.log(" full_name:", full_name);

name1 += ' ' + name2;
// console.log(' name1:', name1);

/* Continal (Ternary) operators */

let valCheck = 1 > 18 ? true : false;
// console.log(' valCheck:', valCheck);

/* 
 condition ? true :false

*/

/* Type operators */

let str = 'Mehfooz khan';
console.log(' str:', typeof str);

let num = 8;
console.log(' num:', typeof num);

/* 
# Spread and rest operators 
*/

let arr = [1, 2, 3, 4];

let newArr = [...arr, 5, 6, 7, 8];
// console.log(' newArr:', newArr);

// let finalArr = [...arr, ...newArr];
// console.log(" finalArr:", finalArr);

// here we have to use rest operators

const sum = (...xyz) => {
  // console.log(" a:", a, b, c);
  // console.log(' args:', xyz);
};

sum(1, 2, 3);

// this is create the parameters into array.

// conversion number to string and string to number

let num33 = 88;
// console.log(' num33:', num33);
// console.log(' num33:', typeof num33);

let newData = num33.toString();
// console.log(' newData:', newData);
// console.log(' newData:', typeof newData);

let newData1 = String(num33);
// console.log(' newData1:', newData1);
// console.log(' newData1:', typeof newData1);

let newData2 = Number(newData1);
console.log(' newData2:', newData2);
console.log(' newDatoa2:', typeof newData2);

let str2 = 'mehfoozkhan';

let ans22 = parseInt(str2);
// let ans22 = Number(str2);

// console.log(' ans22:', ans22);

// done with operators
