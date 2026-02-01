// function Car(maker,model,year){
//     this.name=maker,
//     this.type=model,
//     this.manf=year
// }

class Car {
  constructor(maker, model, year) {
    ((this.name = maker), (this.type = model), (this.manf = year));
  }
}

const car1 = new Car('toyota', 'fortuner', 2000);
const car2 = new Car('volvo', 'volo-XL', 1999);

// console.log(car1);
// console.log(car2);

// call apply bind

let person = {
  name: 'shaad gaov boy',
};

class PersonDetails {
  setDetails(age, city) {
    ((this.age = age), (this.city = city));
  }
}
//! we use here call

let obj = new PersonDetails();
// console.log(obj);
// obj.setDetails.call(person, 24, 'pune');

// apply

// obj.setDetails.apply(person, [26, 'mumbai']);

let myBind = obj.setDetails.bind(person, 24, 'pune');
console.log('🚀 ~  myBind:', myBind());

console.log(person);
