/* 
! Map

# Filter
let
$ Reduce

& forEach

*/

let arr = [1, 5, 9, 3, 7, 4, 6, 8, 14, 18];

// find odd number
/* const isOdd = () => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      newArr.push([true, arr[i]]);
    } else {
      newArr.push([false, arr[i]]);
    }
  }
  return newArr;
};

let ans = isOdd(); */

let newArr = arr.map((element, index, array) => {
  //   console.log('🚀 ~ element:', element);
  //   console.log('🚀 ~ index:', index);
  //   console.log('🚀 ~ array:', array);

  return element % 2 === 1 ? [true, array[index]] : [false, array[index]];
});
console.log('🚀 ~ newArr:', newArr);

let value_map = newArr.map((el, i, arrs) => {
  return el[0] === true ? arrs[i][1] : undefined;
});
console.log('🚀 ~ value:', value_map);

let value_filter = newArr.filter((el, i, arrs) => {
  if (el[0] === true) {
    console.log('🚀 ~ arrs[i][1]:', arrs[i][1]);
    return arrs[i][1];
  }
});

console.log('🚀 ~ value:', value_filter);

// delete feature with filter

let fruits = [
  'mango',
  'banana',
  'apple',
  'kiwi',
  'orange',
  'mango',
  'mango',
  'mango',
  'mango',
  'banana',
  'apple',
  'kiwi',
  'orange',
  'orange',
  'orange',
  'orange',
  'mango',
  'banana',
  'apple',
  'kiwi',
  'kiwi',
  'kiwi',
  'kiwi',
  'orange',
];

// const deleteValue = fruits.filter((el, i, arr) => el === arr[2]);
// console.log('🚀 ~ deleteValue:', deleteValue);

const value = fruits.reduce((inithialValue, curr) => {
  // console.log('🚀 ~ inithialValue:', inithialValue);
  // console.log('🚀 ~ curr:', curr);
  inithialValue[curr] = (inithialValue[curr] || 0) + 1;
  return inithialValue;
}, {});
console.log('🚀 ~ value:', value);

const acc = [
  { name: 'mehfooz', age: 20, amt: 200 },
  { name: 'mehfooz', age: 20, amt: 60 },
  { name: 'mehfooz', age: 20, amt: 116 },
  { name: 'mehfooz', age: 20, amt: 986 },
  { name: 'mehfooz', age: 20, amt: 356 },
  { name: 'mehfooz', age: 20, amt: 186 },
];

const addCount = acc.reduce((ini, curr) => {
  ini += curr.amt;
  return ini;
}, 0);
// console.log('🚀 ~ addCount:', addCount);

// & forEach

let forEachValue = acc.forEach((el, i, arr) => {
  // console.log('🚀 ~ arr:forEach', arr);
  // console.log('🚀 ~ i:forEach', i);
  if (el.amt >= 300) {
    console.log('🚀 ~ el:forEach', el);
  }
});
console.log('🚀 ~ forEachValue:', forEachValue);
