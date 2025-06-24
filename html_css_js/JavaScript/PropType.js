let number = 7;

// let ans = Math.floor(number); // floor give u less number of the current value if 7.4 -> 7
// let ans = Math.ceil(number); // ceil give u more value if 7.8 -> 8

// let ans = Math.round(number); // basically work as a ceil

/**
 * ? this is we use to take square-root
 *
 * let ans = Math.sqrt(number);
 *  ans = Math.ceil(ans);
 *
 * ? this is use to take a power of the number
 *
 * let ans = Math.pow(number);
 *  ans = Math.ceil(ans);
 *
 *
 */

// let ans = Math.floor(Math.random() * 10); this is method took the random value or number between 0 to 10 number

// let ans = Math.min(1, 6, 8, 3, 6); // this took the minimum value of the given number
let ans = Math.max(1, 6, 8, 3, 6); // this will give u the max number of the given section

// console.log(ans);

// ! PropType

//? fact that is everything in js is object.

// its is my blue-print
let Products = {
  brand: 'nike',
  seller: 'amazon',
};

Products.cost = 2000;

console.log('-> Products:', Products);

let prototypeProduct = Object.create(Products);
prototypeProduct.name = 'Mahfouz';
console.log('-> prototypeProduct:', prototypeProduct);

let p1 = {
  brand: 'nike',
  seller: 'amazon',
  price: 3000,
};

let p2 = {
  brand: 'nike',
  seller: 'amazon',
  price: 3000,
};

let p3 = {
  brand: 'nike',
  seller: 'amazon',
  price: 3000,
};

let p4 = {
  brand: 'nike',
  seller: 'amazon',
  price: 3000,
};

// this is array we create by scratch

let arr = new Array(1, 2, 3);
console.log('-> arr:', arr);

// ! custom function or custom methods

let Arr1 = [1, 2, 3];

Array.prototype.धकेलो = function (value) {
  let index = this.length;

  this[index] = value;
};

Arr1.धकेलो(6);

// console.log(Arr1);

// Constructor function for Student
function Student(name, age, marks) {
  this.name = name;
  this.age = age;
  this.marks = marks; // Assume marks is an object {subject: marks}
}

// Prototype method to display student details
Student.prototype.getDetails = function () {
  console.log(`Student Name: ${this.name}`);
  console.log(`Age: ${this.age}`);
  console.log('Marks:', this.marks);
};

// Prototype method to update marks
Student.prototype.updateMarks = function (subject, newMarks) {
  if (this.marks[subject] !== undefined) {
    this.marks[subject] = newMarks;
    console.log(`Marks updated for ${subject}: ${newMarks}`);
  } else {
    console.log(`Subject ${subject} not found.`);
  }
};

// Prototype method to check if the student passed (passing criteria: 40+ in all subjects)
Student.prototype.isPassed = function () {
  const failedSubjects = Object.keys(this.marks).filter(
    (sub) => this.marks[sub] < 40
  );

  if (failedSubjects.length === 0) {
    console.log(`${this.name} has passed all subjects! 🎉`);
    return true;
  } else {
    console.log(`${this.name} failed in: ${failedSubjects.join(', ')} ❌`);
    return false;
  }
};

// Creating a student instance
let student1 = new Student('John Doe', 18, {
  Math: 85,
  English: 78,
  Science: 35,
});

// Using the prototype methods
student1.getDetails(); // Display details
student1.updateMarks('Science', 45); // Update marks
student1.isPassed(); // Check pass/fail status

// let someArr = [1, 2, 3];

// Array.prototype.showConsole = function () {
//   console.log("i am invoked");
// };

// someArr.showConsole();

let num = 2; //* Start from 2

while (num <= 7) {
  let i = 2;
  let isPrime = true;

  while (i * i <= num) {
    //? Check divisibility up to sqrt(num);
    if (num % i === 0) {
      isPrime = false;
      break;
    }
    i++;
  }

  if (isPrime) {
    console.log('is prime', num);
  }

  num++; //* Move to the next number
}
