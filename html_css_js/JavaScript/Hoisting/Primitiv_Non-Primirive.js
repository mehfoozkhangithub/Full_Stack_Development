//! Primitive and Non-Primitive

/**
 *
 * the primitive data type is immutable
 *
 * for eg:- string,number,boolean,null,undefine
 *
 * let str="Mahfouz_khan"
 *
 * str[0]="k" ... this is not happen because mere ghr mai ghusse k mujhe se hi pateli
 *
 * str="k" ... in this case we are pointing the variable name to variable value
 *
 * the  non-primitive data type is mutable
 *
 * let arr=["mehfouz","khan"];
 *
 * arr[0]="superman"
 *
 * console.log(arr)
 *
 */

//? what  call by reference and call by value?

//* primitive are called by value

var str = "Raj";

var str2 = "mani";

console.log(str2);

//* Non-primitive are called by reference

var arr = ["khan", "something"];

var arr2 = arr;

arr2[0] = "nothing";

console.log(arr);

//! execution context and execution stack

// executing context is in executing phase

// we are execution  is the  function

var str = "raj"; //! this us not a executing this is just pointing in memory

// note function are also a variables

//temporal dead zone are let and const js still know about it's but cannot accessed

// function always have return doesn't matter your are passing a value or not.

//? function created -> own scope -> return value -> destroyed

// life cycle of the function [ get declared -> return value -> and go away]

// this is called execution stack

let str = "dum hai to pass kar nahi to bardash kar";

function alto() {
  console.log(str);
}

function thar() {
  console.log(str);
}

alto();
thar();

// context execution
// 9:03
