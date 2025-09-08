// Full Concept

/**
 *
 *  let obj={} -> this is object literal
 *
 *  Constructor Function
 *
 *  Object.create();
 *
 *  es6 classes 'OOPS'
 *
 */

// setter and getter

// this is setter.
const language = {
  set current(name) {
    this.log.push(name);
  },
  log: [],
};

language.current = "EN";
language.current = "FA";

// console.log(language.log);
// Expected output: Array ["EN", "FA"]

// this is getter.

const obj = {
  log: ["a", "b", "c"],
  get latest() {
    return this.log[this.log.length - 1];
  },
};

// console.log(obj.latest);
//* Expected output: "c"

//! we have to create SMS-[Student Management System];

// step1: Student.
// step2: in front-end we see :- view lectures, view assignment,
// step3: Admin : Suspend student, Add Student, Remove Student.
// step4: Sign-in and log-in end.

let students = [];

class User {
  #Password;
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
  signin(useName, password) {
    // here we have to create validation of user and pass
    let isValid = false;

    isValid = this.#validUsername(useName) && this.#validPassword(password);

    if (isValid) {
      this.useName = useName;
      this.#Password = password;
      console.log("User Register Successfully!");
      students.push(this);
    } else {
      console.log("Please Follow User and Password Rule!");
    }
  }
  // here we are privative our method
  #validUsername(userName) {
    return true;
  }

  #validPassword(Password) {
    return true;
  }

  login(useName, Password) {
    if (useName === this.useName && Password === this.#Password) {
      console.log("Logged In!");
    } else {
      console.log("Authentication Failed?");
    }
  }
}

let ans = new User("mehFuz", 1);

// console.log(ans);
// ans.signin("pablo", "pablo123");
// ans.login("pablo", "pablo123");
// console.log(ans.validPassword());

class Student extends User {
  constructor(userName, id) {
    super(userName, id);
    this.numOfAssignment = 0;
  }

  submitAssignment() {
    this.numOfAssignment++;
  }
}

let s1 = new Student("Pablo", 2);
let s2 = new Student("Picasso", 3);
s1.signin("pablo", "pablo123");
s1.login("pablo", "pablo123");
s2.signin("Picasso", "Picasso123");
s2.login("Picasso", "Picasso123");

s1.submitAssignment();

// console.log(students);

class Admin extends User {
  constructor(userName, password) {
    super(userName, password);
  }
  removeStudent(id) {
    students = students.filter((el) => el.id !== id);
  }
}
let admin = new Admin("Albert", 4);

admin.removeStudent(3);

console.log(students);

// Abstraction

// An Abstraction is a way of hiding the implementation details and show only the functionality to the user.

// learn this
