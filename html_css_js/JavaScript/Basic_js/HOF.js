let Array = [1, 2, 3, 4, 7, 6, 7, 6, 9];

let String = ['mehfooz', 'hetuk', 'farhan', 'khushi'];

//# map same as loop but it will retrun as array

let arr2 = String.map((element, index) => {
  return element !== 'mehfooz';
});
console.log('-> arr:', arr2);

//# filter same as loop but it will retrun as array but delete/remove the match element which u give.

let arr = Array.filter((element, index) => {
  return element !== 7;
});
console.log('-> arr:', arr);

//# same as loop but it will never  retrun as array,  it's show 'undefine'

let arr1 = Array.forEach((element) => {
  console.log(element);
  return element;
});
console.log('-> arr1:', arr1);

//$ Reducer

let answer = Array.reduce((acc, curr) => acc + curr);
console.log('-> answer:', answer);

// HOF: creates a reducer for summing a property
const createSumReducer = (prop) => {
  return (acc, obj) => acc + obj[prop];
};

const items = [
  { name: 'Book', price: 300 },
  { name: 'Pen', price: 50 },
  { name: 'Notebook', price: 150 },
];

const totalPrice = items.reduce(createSumReducer('price'), 0);

console.log(totalPrice); // Output: 500

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const countFruits = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(countFruits);
// Output: { apple: 3, banana: 2, orange: 1 }

let str = 'masai';

let funcStr = str.split(''); // array and with single string value.
console.log('-> funcStr:', funcStr);

const countString = funcStr.reduce((acc, strings) => {
  acc[strings] = (acc[strings] || 0) + 1;
  console.log('-> acc[strings]:', acc[strings]);
  return acc;
}, {});
console.log('-> countString:', countString);
