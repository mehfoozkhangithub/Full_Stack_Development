let arr = [1, 2, 3, 4, 5];
console.log("✔ ~ arr4:", arr[4]);

// arr.push(5, 6);
// console.log('-> arr:', arr);

/* let obj = {
  name: 'mehfooz',
};

console.log('-> obj:', typeof obj);
 */

//$ push

Array.prototype.धकेलो = function (value) {
  let index = this.length;
  this[index] = value;
};

arr.धकेलो(7);

console.log('-> arr:', arr);

//$ pop

Array.prototype.निकालो = function () {
  let index = this.length - 1;
  delete this[index];
  this.length = index;
};

arr.निकालो();
console.log('-> arrn:', arr);

// shift

Array.prototype.निकालो_शुरुआत = function () {
  if (this.length === 0) return undefined;

  let firstElement = this[0];

  // Shift elements to the left
  for (let i = 0; i < this.length - 1; i++) {
    this[i] = this[i + 1];
  }

  delete this[this.length - 1];
  this.length -= 1;

  return firstElement;
};

// Example Usage:
let arr3 = [10, 20, 30, 40];
let removedElement = arr3.निकालो_शुरुआत();
//console.log(removedElement); // 10
//console.log(arr3); // [20, 30, 40]

// unshift

Array.prototype.आगे_डालो = function (...values) {
  console.log('-> values:', values);
  let newLength = this.length + values.length;

  console.log('-> newLength:', newLength);

  //5  -> 5-1=4

  // Shift existing elements to the right
  for (let i = newLength - 1; i >= values.length; i--) {
    this[i] = this[i - values.length];
  }

  // Add new elements at the beginning
  for (let i = 0; i < values.length; i++) {
    this[i] = values[i];
  }

  return this.length;
};

// Example Usage:
let arr2 = [3, 4, 5];
arr2.आगे_डालो(1, 2);
//console.log(arr2); // [1, 2, 3, 4, 5]

// forEach
/*
Array.prototype.प्रत्येक = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      callback(this[i], i, this);
    }
  }
};

// Example Usage:
let arr = [1, 2, 3, 4];
arr.प्रत्येक((num, index) => {
  console.log(`Index: ${index}, Value: ${num}`);
});
*/

// map
/*
Array.prototype.नक्शा = function (callback) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      newArray[i] = callback(this[i], i, this);
    }
  }
  return newArray;
};

let arr = [1, 2, 3, 4];
let result = arr.नक्शा((num) => num * 2);
console.log(result); // [2, 4, 6, 8]
*/

// filter

Array.prototype.छानना = function (callback) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this && callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

let filteredArr = arr.छानना((num) => num !== 5);
console.log("-> filteredArr:", filteredArr);
// let filteredArr = arr.छानना((num) => num % 2 === 0);
//console.log(filteredArr); // [2, 4]


/* {

//  global context in object format & in js everything will be object.

} */


// let arr = [1, 2, 3, 4, 5];

console.log(arr[4]);

let anss = arr.push(6, 7, 8);
console.log('🚀 ~ anss:', anss);

Array.prototype.pushpa = function (...value) {
  let index = this.length;
  for (let i = 0; i < value.length; i++) {
    this[index] = value[i];
    index += 1;
  }

  /*   for(let values of value){
        this[this.length]=values;
    }
*/
  return this.length;
}

let ans = arr.pushpa(9, 10, 11);
console.log('🚀 ~ ans:', ans);
// arr.pushpa(9,10,11);
arr


let object = {
  name: 'mehfooz',
  age: 25
}


for (let key of arr) {
  console.log(key);
}


let arr1 = [1, 2, 3, 4, 5];

let ansss = arr1.pop();
console.log('🚀 ~ ansss:', ansss);

arr1;