let array = [1, 2, 6, 4, 5, 3];
console.log('-> array:', array[0]);

// console.log(array.findIndex((value) => value === 3));
console.log(array.indexOf(5));

// map --> []
//@  filter -> [reduce the conditonal value];

let arr = [2, 3, 1, 7, 5, 99, 100, 10, 125];

// arr.sort((a, b) => a - b);

// arr.splice(4, 0, 2);
// console.log('-> arr:', arr);

let ans = arr.slice(3, 6);

console.log('-> ans:', ans);

let arr1 = arr.join(' ');
console.log('-> arr1:', arr1);

let arrr2 = arr1.split(" ");
console.warn('-> ~ arrr2:', arrr2);

let array1 = [1, 3, 3, 4, 5];
// array1.pop();
array1.push(6, 7, 8, 9, 10);
console.log('-> array1:', array1);

// what is 'from' do.

/* 
? purpose:- Create a new array instance from an array-like or iterable object.

# syntax:- Array.from(arrayLike[,mapFun[,thisArg]])

$ Parameters:- 
            1. arrayLike:- This array-like or iterable object to convert to an array.
            2. mapFun (optional):- A functions to call on each elements of the array.
            3. thisArg (optional):- An object to use as 'this' when executing 'mapFun'. 
*/

let str = 'hello';

const arrs = Array.from(str);

console.warn('-> ~ arrs:', arrs);


// what is 'some' do.

/* 
? purpose:- Tests whether at least one element in the array passes the test implemented by the provided function..

# syntax:- some(callbackFn[, thisArg])

$ Parameters:- 
            1. callbackFn:- A function to test each element of the array. It takes three arguments:
                👉🏻 elements:- This current elements being processed in the array.
                👉🏻 index (optional):- The index of the current elements being processed in the array.
                👉🏻array (optional):- The array 'some' was called upon.
            2. thisArg (optional):- An object to use as 'this' when executing 'callbackFun'. 
            3. Return value:-'true' if the callback functions return a truthy value for at least on elements in the array; otherwise 'false'.
*/

const number = [1, 2, 3, 4, 5];

const hasEvenNumber = number.some((num, i, arr) => num % 2 == 0);// hasEvenNumber is true;
console.warn('-> ~ hasEvenNumber:', hasEvenNumber);

const allPositve = number.some(number => number > 0);
console.warn('-> ~ allPositve:', allPositve);


// example of Array in js.


const arrayEmpty = new Array(2);
console.warn('-> ~ arrayEmpty:', arrayEmpty);

console.log(arrayEmpty.length); // 2
console.log(arrayEmpty[0]); // undefined; actually, it is an empty slot
console.log(0 in arrayEmpty); // false
console.log(1 in arrayEmpty); // false

/* 
| Method     | Returns                  | Use Case                               |
| ---------- | ------------------------ | -------------------------------------- |
| `some()`   | `true` or `false`        | Check if **any** value passes the test |
| `find()`   | First matching value     | Get **one** value                      |
| `filter()` | Array of matching values | Get **all** matching values            |

Use .some() → if you need yes/no

Use .find() → if you need the first match

Use .filter() → if you need all matches in an array
 */


let arr111 = {
    name: 'mehfooz khan',
    count: 1,
    age: false
}

let arr11 = ["mehfooz", "something"];

let ans1 = arr111.find((e) => e === 'khan')
console.log('🚀 ~ ans1:', ans1);

let ans2 = arr111.includes('khan');
console.log('🚀 ~ ans2:', ans2);


let ans11 = arr111.hasOwnProperty('count')
console.log('🚀 ~ ans:', ans);
