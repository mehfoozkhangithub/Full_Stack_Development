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
