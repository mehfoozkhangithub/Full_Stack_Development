// what is constructor.

//! basically what 'new' keyword/operator does create instance of a user-defined object type of one of the built-in object type that has a constructor function

// eg:- 👇 constructor function

function Car(make, model, year) {
  (this.make = make), (this.model = model), (this.year = year);
}

//? below this code is call class constructor.
// class Car {
//   constructor(make, model, year) {
//     (this.make = make), (this.model = model), (this.year = year);
//   }
// }

const car1 = new Car('toyota', 'toyota', 1995);
const car2 = new Car('bmw', 'Sclass7', 2025);

// console.log(car1.year);

// basically we write the object in this way

const obj = {
  name: 'mehfooz',
  age: 25,
  marital_status: false,
}; // this is call object literal

// but there are some problem in writing this code flow line-24 Q.What if we have to cerate 100 object?

//* this fixing  this issue js developer create the js-constructor

//? What is js Constructor.

// todosAns-> constructor to build something new or to create something form scratch. This constructor method in js  is a special function used to create objects.

// we have to provider bluePrint of what key value pair an object should have. To do that we use function.

const person = {
  name: 'reena',
  myFunc: function () {
    // this called function method bcz inside of object we write function
    // console.log(person.name);
  },
};

person.myFunc();

// this we use to point to owner to get the current or present value if we need

// 'this' refer to owner object.

// 1. this inside functions
// 2. this inside function method

const person1 = {
  name: 'hello1',
  myFunc: function () {
    // this called function method bcz inside of object we write function
    // console.log(this.name); //* this = person inside the name...
    // console.log(this); //* this = person varibale object
  },
};

person1.myFunc();

// what if we have the object inside the function

function myName() {
  // eg:- how is the owner of the global variable
  // console.log(this); // this will point to global scope variable and give global object
}

myName();

// the value of 'this' is determined by how function was executed:

// in a method (function written inside to object), this refer to owner of the object
// Alone 'this' refer to the global object
// in function 'this' refer to the global object

function Player(name, team) {
  (this.name = name), (this.team = team);
}

var myPlayer = new Player('Dhoni', 'chennaiSuperKing');
var myPlayer1 = new Player('Kholi', 'RoyalChallengerBangelor');

// console.log(myPlayer);
// console.log(myPlayer1);

// so here we have to use call, apply, bind.

// call - so in call we execute the code this manner.

let Person2 = {
  name: 'rahul',
};

let Person3 = {
  name: 'manoj',
};

function myFunctions(age, city) {
  this.age = age;
  this.city = city;
}

myFunctions.call(Person2, 24, 'pune'); //here we will give to arg in ',' to separate and send the value
console.log(Person2);

// apply - so in apply we execute the code this manner.

let Person4 = {
  name: 'sejal',
};

let Person5 = {
  name: 'jignesh',
};

function myFunctions1(age, city) {
  this.age = age;
  this.city = city;
}

myFunctions1.apply(Person5, [24, 'pune']); //here we will give to arg as a '[]' to separate and send the value

console.log('-> Person5:', Person5);

// apply - arrays
// call - commasf

// bind

// call - so in call we execute the code this manner.

let Person6 = {
  name: 'suresh',
};

let Person7 = {
  name: 'ramesh',
};

function myFunctions3(age, city) {
  this.age = age;
  this.city = city;
}

let myBind = myFunctions3.bind(Person7, 24, 'pune'); // here we have to catch the value coming form bind so we took to a variable.

myBind(); // we should call the function  whenever  we needed.
// console.log(myBind);
// console.log(Person7);

/* 
| Method    | What it does                             | Executes Immediately? | Arguments Passed As |
| --------- | ---------------------------------------- | --------------------- | ------------------- |
| `call()`  | Calls function with custom `this`        | ✅ Yes                 | Individual values   |
| `apply()` | Calls function with custom `this`        | ✅ Yes                 | Array               |
| `bind()`  | Returns a new function with bound `this` | ❌ No                  | Can be preset       |
 */
