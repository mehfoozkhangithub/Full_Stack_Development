/* Bitwise operators */

// coversion into number to binary and binary to number...

let number = 42; // binary

let binaryConv = number.toString(2);

// console.log(" binaryConv:", binaryConv);

/* biary to number */

let bin_To_num = parseInt(binaryConv, 2);

// console.log(" bin_To_num:", bin_To_num);

/* 
-> dealing with binary-system/number-system


& -> AND
| -> OR
~ -> NOT

*/

let num66 = 15;

let num77 = 12;

let binaryConv1 = num66.toString(2);

console.log(" binaryConv:", binaryConv1);

let binaryConv2 = num77.toString(2);

console.log(" binaryConv:", binaryConv2);

// let and = ~num77;

// let and = num66 & num77;

// let and = num66 | num77;

// console.log(" and:", and);
