let arr = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

let finalArr = [...arr, ...arr2];

console.log(finalArr);

console.log('this is arr[1]', arr[1]);

// rest
let [a, b, c, d, ...rest] = arr;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(rest);

let num = 88;

//? this is use by operators

/* num += '';

console.log(typeof num);
console.log(num);

num = +num;

console.log(typeof num);
console.log(num);
 */

//# this is build by methods

/* num = num.toString();

console.log(typeof num);
console.log(num);

num = num
  .toString()
  .split()
  .map((el) => Number(el));

console.log(typeof num[0]);
console.log(num[0]); */

//$ this is use by constructor functions

num = String(num);

console.log(typeof num);
console.log(num);

num = Number(num);

console.log(typeof num);
console.log(num);

let age = +process.argv[2];
// console.log('🚀 ~ age:', age);

if (age >= 18) {
  // block of code conditions true
  console.log('valid age');
} else {
  // block of code conditions false
  console.log('not valid age');
}

// constructor with class call, apply, bind

let person = {
  name: 'shaad gaov boy',
};

class PersonDetails {
  constructor(age, city) {
    ((this.age = age), (this.city = city));
  }
}

Object.assign(person, new PersonDetails(90, 'pakistan'));

console.log(person);
