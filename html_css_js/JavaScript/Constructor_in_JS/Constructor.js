// what is constructor.

//! basically what 'new' keyword/operator does create instance of a user-defined object type of one of the built-in object type that has a constructor function

// eg:- 👇

function Car(make, model, year) {
  (this.make = make), (this.model = model), (this.year = year);
}
const car1 = new Car("toyota", "toyota", 1995);

console.log(car1.year);
