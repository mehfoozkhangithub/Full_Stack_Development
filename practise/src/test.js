// ! here we have to solve the question
//* Promise / useEffect / useState / React-Router

//? first {Promise}

// first handle promise

//* Introduction of Promises
//= The Solution of the callback hell is promises. A promise is a 'promise of code execution'. The code either executes or fails in both the cases the subscriber will be notified. eg:- bellow 👇
// syntax

// let promise = new Promise((resolve, reject) => {
//   resolve(99);
// });

// console.log("hello one");

// setTimeout(() => {
//   console.log("hello two");
// }, 2000);

// console.log("hello three");

// console.log(promise);

let p1 = new Promise((resolve, reject) => {
  console.log("Pending");

  setTimeout(() => {
    // console.log("Resolved");
    resolve(true);
  }, 5000);
});

let p2 = new Promise((resolve, reject) => {
  console.log("Pending");

  setTimeout(() => {
    // console.log("reject");
    reject(new Error("I am error find me!"));
  }, 5000);
});

p1.then((result) => {
  console.log(result);
});

p2.catch(() => {
  console.log("i am error");
});

// besically "Promise" is to behave js asynchronous way

//here we have perform the api call

let api = "https://jsonplaceholder.typicode.com/albums";

fetch(api)
  .then((res) => {
    res.json();
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));
