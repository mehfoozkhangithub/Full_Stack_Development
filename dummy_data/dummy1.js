//write a program to find the nth largest number in an array.

//Example 1:
var arr = [1, 1, 23, 32, 23, 1, 50, 40, 60, 50];
console.warn('-> ~ arr:', arr);

// input (n) = 3
// output = 40
/*

function findNthLargest(arr, n) {
  // Remove duplicates
  const uniqueArr = [...new Set(arr)];

  // Sort descending
  uniqueArr.sort((a, b) => b - a);

  // Return nth largest
  return uniqueArr[n - 1];
}

// Example
const arr = [1, 1, 23, 32, 23, 1, 50, 40, 60, 50];
const n = 3;
console.log(findNthLargest(arr, n)); // Output: 40



*/

//hello

// db.users.find();

// what is abrivarion  in mongodb

// what is $lookup in mongodb



// # useReducer hooks 


/* useState()

useEffect(() => { }, [])

useReducer(reducer, initialValue) */;

// for (let i = 0; i < 2; i++) {
//   console.log(i);
// }
let arrStr = ['mehfooz', 'yogesh', 'snajeev'];
let start = 0;

// while (start < arrStr.length) {
//   console.log(arrStr[start]);
//   start++;
// }

do {
  console.log('hello');
  console.log(start);
  start++;
  console.log(start);
} while (start <= 2)
