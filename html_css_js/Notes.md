## HTML [![html](https://course.masaischool.com/login)(https://course.masaischool.com/login)]

### Introduction

### **_`HTML`_**

```js
// console.log(['...str'].split("").reverse().join(""));

console.log(!!'true');
console.log(!!'false');
console.log(!!'true' === !!'false');
console.log(!!'true' === !!'false');

console.log('2' + 2 - '2');

console.log({} == {});
console.log([] == []);

const a = {
  name: 'mehfooz',
};

const b = {
  name: 'mehfooz',
};

const c = {
  name: 'mehfooz',
};
const d = {
  name: 'khans2',
};

a[b] = {
  name: 'khan',
};
a[c] = {
  name: 'something',
};
a[d] = {
  name: 'everything',
};

console.log('-> a[b]:', a[b]);
```

```js
//  object -> document -> object-literal

// {key:value} pair

let object = {
  name: 'mehfooz khan',
  age: 27,
  maried: false,
  hobbies: ['pub-G', 'COC', 'CS', 'GTA'],
  school: {
    GRADUATION: 'ABHINAV',
    XII: 'LOCKMANYA',
    X: 'KK RAJ',
  },
};
console.log(object.hobbies[3]);
console.log(object.school.XII);

console.log(typeof object);

for (let key in object) {
  console.log(object[key]);
}

let arr = ['pub-G', 'COC', 'CS', 'GTA'];
console.log(typeof arr);

for (let index of arr) {
  console.log(index);
}

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

Array.isArray();
Object.hasOwnProperty();
```

```js
// this is the Array method's

// let arr = [
//   'nilesh',
//   'deepak',
//   'afan',
//   'nishad',
//   'varun',
//   'akash',
//   'pranay',
//   'emtiyaz',
// ];

// let obj = {
//   name: 'mehfooz',
//   name: 'mehfooz',
//   name: 'mehfooz',
//   name: 'mehfooz',
//   name: 'mehfooz',
//   name: 'mehfooz',
// };
let object = {
  name: 'mehfooz khan',
  age: 27,
  maried: false,
  hobbies: ['pub-G', 'COC', 'CS', 'GTA'],
  school: {
    GRADUATION: 'ABHINAV',
    XII: 'LOCKMANYA',
    X: 'KK RAJ',
  },
};

for (let key in object) {
  if (Array.isArray(object[key])) {
    for (let value of object[key]) {
      console.log(value);
    }
  } else if (typeof object[key] === 'object') {
    for (let valueObj in object[key]) {
      console.log(valueObj);
    }
  } else {
    console.log(object[key]);
  }
}

// Array methods

function sum(a, b, opt) {
  switch (opt) {
    case '+':
      return a + b;

    case '-':
      return a - b;

    default:
      'please enter somthing to exicute the value...';
  }
}

let ans1 = sum(3, 6, '+');
console.log('🚀 ~ ans1:', ans1);

let ans2 = sum(7, 10, '-');
console.log('🚀 ~ ans2:', ans2);

// str = str.split("").reverse()
// console.log('🚀 ~ str:', str);

let arr2 = [1, 2, 3, 4, 5, 6, 7];

let str = 'mehfooz';

let arr = Array.from(str, (_, x) => x + 1);
arr;

arr.splice(3, 0, [10, 99]);

arr;

let shallowCopy = arr.slice(3, 6);

arr;
shallowCopy;

arr;
arr.push(8, 9, 10);
arr;
arr.pop();
arr.pop();
arr;

console.log(arr.indexOf(7));

let ans = (element) => element > 2;

console.log(
  '🚀 ~ ans:',
  arr.findLastIndex((element) => element > 2)
);

console.log(arr.findLastIndex(ans));

let anss = arr.find((element) => element > 2);
console.log('🚀 ~ anss:', anss);

// this need call-back function
// the method's are

/* 
1. FIND
2. FINDINDEX
3. FINDLASTINDEX
4. FINDLAST
*/
```
