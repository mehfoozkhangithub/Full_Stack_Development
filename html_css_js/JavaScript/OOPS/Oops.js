class Car {
  constructor(n, b) {
    this.name = n;
    this.brand = b;
  }
  showDetails() {
    console.log(`${this.name} ${this.brand}`);
  }
}

// let c1 = new Car("desire", "suzuki");
// console.log(c1);

class SUV extends Car {
  constructor(x, y) {
    super(x, y);
    this.buyer = "mehfooz_khan";
  }
}

class miniSUV extends SUV {
  constructor(x, y) {
    super(x, y);
    this.type = "mini-suv";
  }
}

let car2 = new miniSUV("audi", "audi");
// console.log(car2);

// inheritance

// OOPS

// We treat object as first citizen

//? we wite this way to and other way to.
var type = "mini-suv";

var brand = "renault";

var buyer = "mehfooz";

// here we have to get connection between obj and func.

var car = {
  type: "mini-suv",
  brand: "renault",
};

// this two not connected between each other but they are shared the value.

function printBrand(object) {
  console.log(object.brand);
}

// printBrand(car);

// on of the similar example.

var car1 = {
  type: "mini-suv",
  brand: "renault",
  PrintTheValue: () => {
    console.log(this.brand);
  },
};

// car1.PrintTheValue();

// first oops concept is

//**
//  1=> Inheritance -> that allows you to borrow the property of object.
//  2=> Encapsulation ->
//
//  */

// Encapsulation code -> creating private variable
// basically we use this to show the object but not those  privet value

class Cars {
  #count; // Private variable you cannot access out side of it
  constructor(n, b) {
    this.name = n;
    this.brand = b;
    this.#count = 100;
  }

  showDetails() {
    console.log(`${this.name} ${this.brand} ${this.#count}`);
  }

  getCount() {
    return this.#count; // Getter method to access private field
  }
}

let c11 = new Cars("Thar", "Mahindra");

console.log(c11, "this is the encapsulation"); // Won't show #count
// console.log(c11.getCount()); // ✅ Now we can see the private value (100)

// Abstraction -> hiding Complex

// in real life example of the your write the code in the english but computer under stand the value as 0 and 1

// abstraction is not present in js we have to do some "jugged" we under stand this in class not in pre-class.
class Employee {
  constructor() {
    this.type = "engineer";
  }
}

class Manager extends Employee {
  constructor() {
    this.sub_type = "manager";
  }
  display() {
    console.log(this.sub_type);
  }
}

let managers = new Manager();

console.log(managers);

// polymorphism

// poly means multiple

// we have the one method available in multiple class that call poly

class Vehicle {
  run() {
    console.log("Vehicle is running");
  }
}

class Car {
  run() {
    console.log("Car is running");
  }
}

class Truck {
  run() {
    console.log("Truck is running");
  }
}

let v1 = new Vehicle();
let v2 = new Car();
let v3 = new Truck();
