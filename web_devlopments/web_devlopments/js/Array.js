// const Array=[];

const object = {
  name: 'khan',
};

// update object value
object.name1 = 'mehfooz';

// create new value in object
object.age = 25;

// delete object

delete object.name1;

//  this read the object
// console.log(object);

// here we go array...

let finalNumber = 11;

let myArr = [
  // () => {
  //   return 'hello index 0';
  // },
  1, 2, 3, 4, 5, 6, 7, 8, 9,
];

// console.log(myArr);
// let newArr = [];

for (let i = 0; i < finalNumber; i++) {
  if (myArr[i] === i + 1) {
    continue;
  }
  myArr.push(i + 1);
}

console.log(myArr);

// for (let i = 0; i < myArr.length; i++) {
//   newArr.push(myArr[i] + 2);
//   console.log(newArr);
// }

// console.log(myArr[0]());

// ============ extra caricular-activity's ============ //

let arr = [2, 7, 11, 9, 100, 150, 3, 250];
let countEven = 0;
let countOdd = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log('even number', arr[i]);
    countEven++;
  } else {
    console.log('odd number', arr[i]);
    countOdd++;
  }
}
console.log('final Value of counts', countEven, countOdd);

let sumValue = 0;

for (let i = 0; i < arr.length; i++) {
  sumValue += arr[i];
}
console.log('🚀 ~ sumValue:', sumValue);
