const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// index= number.length - 1

/* console.log(number[0]);
console.log(number[1]);
console.log(number[2]);
console.log(number[3]);
console.log(number[4]);
console.log(number[5]);
console.log(number[6]);
console.log(number[7]);
console.log(number[8]);
console.log(number[9]);
console.log(number[10]);
 */

// for (let i = 0; i < number.length ; i++) {
//   console.log(number[i]);
// }

/* const object = {
  name: 'mehfooz',
  age: 28,
  married: false,
  city: {
    liveIN: 'Mumbai',
    dream: 'pune',
  },
  hobbies: ['coc', 'cod', 'pub-G'],
};

for (const key in object) {
  console.log(object[key]);
}
 */

number.push(11);
number.pop();
number.pop();
number.unshift(0);
number.shift();
console.log(number);

const newArr = [1, 2, [3, 4, [5, 6]]];

const ans = newArr.flat(2);

console.log(ans.includes(55));
