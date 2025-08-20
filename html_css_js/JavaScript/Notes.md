# Intoduction of `java-script`

1. event handling on web-page.
1. **_JavaScript_** is object base _programming language_.{ }
1. this prefer `class-base` & `function-base`

```js

function names(){
    console.log('hello function java script...')
}

class{
    console.log('hello class java script ')
}
```

### Internal & External `JS`

- Internal JS

```js
<!DOCTYPE html>
<html>
<head></head>
<body></body>
<script>
    console.log('hello java script...');
</script>
</html>
```

- External JS

```js
<!DOCTYPE html>
<html>
<head></head>
<body></body>
<script src="./fileName">
</script>
</html>
```

## Data - Type in `js`

1. String

```js
var str = 'string'; // single qoute
var str = 'string'; // double qoute
var str = `string`; // back-tick -> ternary operator `${name}`
```

1. Number.

```js
var num = 19;
```

2. Boolean.

```js
var bool = true;
```

3. Array.

- Array dataType was `Object` it's store value in index format..

```js
var arr = [1, 2, 3, 4]; // array of number [];
```

4. Object.

- will Store the value as a **_key value pair_**
- data-type of this will give you a object only..

```js
var obj = {
  name: 'mehfooz',
};
```

4. arrayObject.

```js
var arrObj = [
  {
    id: 8899009202920,
    name: 'mehfooz khan',
    age: 26,
    DOB: 23 - 04 - 200,
  },
  {
    id: 8899009202920,
    name: 'abhishek',
  },
];
```

## Operator's in `js`

1. **Arithemtic operators**

- this will contain the math's operation like eg.. **[add,sub,mul,div,expo,modulo]**

2. **Comparison operators**

- `==` -> In this **_js_** use to convert the number if they have string **type** and the prefom the operation, and this will return alway's _boolean_ value.

- `===` -> In this **_js_** use to campire **data-type** & **data-value** show be alway's same then prefom the operation, and this will return alway's _boolean_ value.

3. **Logical operators**

- AND `[&&]`
  - left and right both value/condition are true then this will return the boolean value.
  - eg:- `true && true`
- OR `[||]`
  - left or right both the value have single true/positive value then it's return the boolean value.
  - eg:- `true && false`
- NOT `[!]`
  - this will toggle/convert the value into opposite of the current value.
  - eg:- `!true -> false`

## notes `20/08/2025`

```js
let num1 = '3';
let num2 = 3;

let flag = true;

let andCondition = num1 === num2 || num2 != num1 + 1;
console.log('🚀 ~ andCondition:', andCondition);

console.log(!flag);

let number = 30; // decimal number

let binaryConv = number.toString(16); // octa val
console.log('🚀 ~ binaryConv:', binaryConv);

let octa_To_num = parseInt(binaryConv, 2);
console.log('🚀 ~ octa_To_num:', octa_To_num);

let name = 'nilesh';
let surname = 'yadav';

let full_name = name + ' ' + surname;

let full_name1 = `${name} ${surname}`;
console.log('🚀 ~ full_name1:', full_name1);
console.log('🚀 ~ full_name:', full_name);

let number1 = 1;

// number1 =+ 2

// number1+=2;

++number1;
number1++;

console.log('🚀 ~ number1:', number1);

let nums = 2;
let nums1 = '2';

// typeOf

let typeCheck = typeof nums;
console.log('🚀 ~ typeCheck:', typeCheck);
let typeCheck1 = typeof nums1;
console.log('🚀 ~ typeCheck1:', typeCheck1);

let arr = [1, 2, 3, 4, [5, 6, 7, 8, [9, 10, 11, 12]]];
console.log('🚀 ~ arr:', typeof arr);
// 1 2 3 4 5 6 7 8 9 10 11 12

let arr1 = [1, 2, 3, 4];

let arr2 = [5, 6, 7, 8, 9];
let newArr = [...arr1, ...arr2];
console.log('🚀 ~ newArr:', newArr);

const functions = (...args) => {
  console.log('🚀 ~ args:', args);
};
functions(1, 2, 4);

let age = 56;

if (age >= 66) {
  console.log('too late for vote!!');
} else if (age >= 18) {
  console.log('eligible for vote!!');
} else {
  console.log('not eligible for vote!!');
}

let number = 238;

if (number % 2 == 1) {
  console.log('Odd number...');
} else {
  console.log('Even number...');
}
```
