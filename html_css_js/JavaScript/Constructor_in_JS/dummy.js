const object = {
  name: "mehfooz khan",
  age: 26,
  married: false,
  myFunc: function () {
    /* here we have the normal name-less function inside there are value were this `key-word` use it's get the data of name where parent of the value is object and that key-word point to that scope in this the global socpe accessed by this normal function but in the arrow-function there have the different senario in that js create block scope so this only point inside that function so we just use the normal function for the access the globel varible by useing the `this -> keywords`... */
    let value = this.name;
    // return value;
    console.log(value);
  },
};

// object.myFunc();
// console.log(object.myFunc());

/* 
//! this is pointing the globle varible of js.
function findeSomthing() {
  console.log(this.object);
}
findeSomthing();

 */

// call - so in call we execute the code this manner.

/* let Person2 = {
  name: "rahul",
};

let Person3 = {
  name: "manoj",
};

function myFunctions(age, city) {
  this.age = age;
  this.city = city;
}

myFunctions.call(Person2, 24, "pune"); //here we will give to arg in ',' to separate and send the value
console.log(Person2); */

// apply - so in apply we execute the code this manner.

/* let Person4 = {
  name: "sejal",
};

let Person5 = {
  name: "jignesh",
};

function myFunctions1(age, city) {
  this.age = age;
  this.city = city;
}

myFunctions1.apply(Person5, [24, "pune"]); //here we will give to arg as a '[]' to separate and send the value
console.log(Person5); */

let Person6 = {
  name: "suresh",
};

let Person7 = {
  name: "ramesh",
};

function myFunctions3(age, city) {
  this.age = age;
  this.city = city;
}

let myBind = myFunctions3.bind(Person7, 24, "pune"); // here we have to catch the value coming form bind so we took to a variable.

myBind(); // we should call the function  whenever  we needed.
console.log(myBind);
console.log(Person7);
console.log(Person6);

// ******** OOPS Conscept here we have to go *************
