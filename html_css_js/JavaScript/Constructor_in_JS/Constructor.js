// what is constructor.

//! basically what 'new' keyword/operator does create instance of a user-defined object type of one of the built-in object type that has a constructor function

// eg:- 👇

function Car(make, model, year) {
  (this.make = make), (this.model = model), (this.year = year);
}

// below this code is call class constructor.
// class Car {
//   constructor(make, model, year) {
//     (this.make = make), (this.model = model), (this.year = year);
//   }
// }

const car1 = new Car("toyota", "toyota", 1995);

// console.log(car1.year);

// basically we write the object in this way

const obj = {
  name: "mehfooz",
  age: 25,
  marital_status: false,
}; // this is call object literal

// but there are some problem in writing this code flow line-24 Q.What if we have to cerate 100 object?

//* this fixing  this issue js developer create the js-constructor

//? What is js Constructor.

// todosAns-> constructor to build something new or to create something form scratch. This constructor method in js  is a special function used to create objects.

// we have to provider bluePrint of what key value pair an object should have. To do that we use function.

const person = {
  name: "hello",
  myFunc: function () {
    // this called function method bcz inside of object we write function
    console.log(person.name);
  },
};

person.myFunc();

// this we use to point to owner to get the current or present value if we need

// 'this' refer to owner object.

// 1. this inside functions
// 2. this inside function method

const person1 = {
  name: "hello1",
  myFunc: function () {
    // this called function method bcz inside of object we write function
    console.log(this.name); //* this = person
    console.log(this); //* this = person
  },
};

person1.myFunc();
