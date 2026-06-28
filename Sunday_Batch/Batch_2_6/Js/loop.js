let number = 10;

/* console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10) */

// for (let i = 0; i < number; i++) {
//   console.log(i);
// }

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let object = {
  name: 'mehfooz',
  age: 26,
  married: false,
};

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
/* 
for in object

for of array
 */
// for (let key in arr) {
//   console.log(arr[key]);
//   console.log(key);
// }

for (let key of object) {
  console.log(object[key]);
}
