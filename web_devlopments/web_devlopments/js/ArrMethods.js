let Arr = [1, 2];

// method pre-define function || block of logic

// TAIL METHODS
Arr.push(3, 4);

Arr.pop();

// HEAD METHODS
Arr.unshift(-3, -2, -1, 0);

// Arr.shift();

// console.log(Arr.length);

Arr.reverse();

// Arr.sort();

// console.log(Arr);

const newArr = Array.from(Arr, () => Math.ceil(Math.random() * 1000));

newArr.sort((a, b) => a - b);

console.log('🚀 ~ newArr:', newArr);

let someArray = [99, 110, 50, 20, 10, 11];

/* 
 bonuse [splice, slice]

- first - with 10
- second * with 2
- store the value in same array
- and last sort the array
*/

/* 

STACK

    |  4  | TAIL
    |  3  |
    |  2  |
    |  1  |
    |  0  |
    |  -1  |
    |  -2  | HEAD
   
*/

const array = [1, 3, 5];

// Checks whether an element is even
const even = (element) => {
  console.log('🚀 ~ element:', element);
  return element % 2 === 0;
};
console.log('🚀 ~ even:', even);

console.log('some', array.some(even));
// Expected output: true
