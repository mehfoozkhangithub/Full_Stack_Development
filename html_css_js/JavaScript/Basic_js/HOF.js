let Array = [1, 2, 3, 4, 7, 6, 7, 6, 9];

let String = ['mehfooz', 'hetuk', 'farhan', 'khushi', 'Sai'];

//# map same as loop but it will retrun as array

let arr2 = String.map((element, index, array) => {
  let elemnts = element !== 'hetuk'
  let obj = {
    el: elemnts,
    i: index
  }
  return obj
});
console.log('-> arr2:', arr2);

//# filter same as loop but it will retrun as array but delete/remove the match element which u give.

let arr = Array.filter((element, index) => element === 7);
//  [1,2,3,4,6,6,9]
console.log('-> arr:', arr);

//# same as loop but it will never  retrun as array,  it's show 'undefine'

let arr1 = Array.forEach((element) => {
  console.log('-> element:', element);
  return element;
});
console.log('-> arr1:', arr1);

//$ Reduc

let answer = Array.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log('-> answer:', answer);

// HOF: creates a reducer for summing a property.
const items = [
  { name: 'Book', price: 300 },
  { name: 'Pen', price: 50 },
  { name: 'Notebook', price: 150 },
];

const createSumReduce = (prop) => {
  return (acc, obj) => acc + obj[prop];
};

const totalPrice = items.reduce(createSumReduce('price'), 0);

// console.log(totalPrice); // Output: 500

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const countFruits = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

// console.log(countFruits);
// Output: { apple: 3, banana: 2, orange: 1 }

let str = 'masai';

let funcStr = str.split(''); // array and with single string value.
console.log('-> funcStr:', funcStr);

const countString = funcStr.reduce((acc, strings) => {
  acc[strings] = (acc[strings] || 0) + 1;
  // console.log('-> acc[strings]:', acc[strings]);
  return acc;
}, {});
console.log('🚀 ~ countString:', countString);

// this is the code of the string method;

console.log(String.fromCodePoint(9731, 9733, 9842, 0x2f804));

console.log(String.fromCharCode(189, 43, 190, 61, 11111));

// this is for practice

//  HOF -> Higher Order Functio's

let arr11 = [1, 7, 7, 3, 2, 7, 8, 4, 7, 0];

// map

let newArr = [];

arr11.map((elements, index, self) => {
  if (elements !== 7) {
    newArr.push(elements);
    return elements;
  };
});

console.log('🚀 ~ newArr:', newArr);

// filter method

let filterData = arr11.filter((elements) => {
  if (elements !== 7) return elements;
});

console.log('🚀 ~ filterData:', filterData);


// forEach

let newData = arr11.forEach((elements, index, self) => {
  console.log('🚀 ~ self:', self);
  console.log('🚀 ~ index:', index);
  console.log('🚀 ~ elements:', elements);
  if (elements !== 7) console.log(elements);
})
console.log('🚀 ~ newData:', newData);



/*
-> callBack Function's
    1. ()=>{};

    2. function(){};
*/
