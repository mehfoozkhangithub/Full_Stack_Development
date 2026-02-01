const object = {
  name: 'saad',
  age: 90,
  maried: true,
  hobbies: ['PUB-G', 'Free-Fire', 'COC', 'godOFwar', 'CS', '8-ball_Pool'],
  native_place: {
    village: 'Pakistan',
    current: 'India',
  },
  shaadMaksad: function () {
    return 'pakistan ko khatam karna';
  },
};
/*
for (const key in object) {
  //   console.log('🚀 ~ typeof object:', typeof object[key], object[key]);
  console.log(Array.isArray(object[key]));
  if (Array.isArray(object[key])) {
    for (const element of object[key]) {
      console.log('============ array loop start ============');
      console.log(element);
      console.log('============ array loop end ============');
    }
  } else if (typeof object[key] === 'object') {
    for (const element in object[key]) {
      console.log('============ object loop start ============');
      console.log(object[key][element]);
      console.log('============ object loop end ============');
    }
  } else if (typeof object[key] === 'function') {
    console.log(object[key]());
  } else {
    console.log(object[key]);
  }
}*/

// const prototype = {};
// const object1 = Object.create(prototype);

// console.log(Object.getPrototypeOf(object1) === prototype);

// for (const value of object.hobbies) {
//   console.log(value);
// }

/* console.log('ans', object);
console.log(object.shaadMaksad());
console.log('ans', object.age);
console.log('ans', object.hobbies);
console.log('ans', object.maried);
console.log('ans', object.name);
console.log('ans', object.native_place); */

const obj1 = {};
