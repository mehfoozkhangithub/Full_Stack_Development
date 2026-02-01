//$ promise is an object and new keyword will create a new object. {}

//& sync -> code run in step by step format.

/* let data = new Promise((resolve, reject) => {
    let Present = null;
    if (Present) {
        resolve('welcome sir✅');
  } else {
    reject('class cancel ❌');
  }
});
console.log('🚀 ~ data:', data);

data
  .then((response) => console.log(response))
  .catch((err) => console.log(err))
  .finally(console.log('Process done ✔')); */

//# async -> code took certain amount of time to execute the ask and then the value will show the output.

/* let data = new Promise((resolve, reject) => {
  let Present = true;
  if (Present) {
    resolve('welcome sir✅');
  } else {
    reject('class cancel ❌');
  }
});
console.log('🚀 ~ data:', data);

data
  .then((response) => console.log(response))
  .catch((err) => console.log(err))
  .finally(console.log('Process done ✔')); */

//!  ASYNC

// console.log('A');

// let data = new Promise((resolve, reject) => {
//   console.log('B');
//   let Present = true;
//   if (Present) {
//     console.log('C');
//     resolve('welcome sir✅');
//   } else {
//     console.log('D');
//     reject('class cancel ❌');
//   }
// });
// console.log('🚀 ~ data:', data);
// console.log('E');

// data
//   .then((response) => {
//     console.log('F');
//     return console.log(response);
//   })
//   .catch((err) => console.log(err))
//   .finally(console.log('Process done ✔'));

// console.log('G');

// A B C welcome sir data E  Process done F response G

// A B C  data E  Process done G F welcome sir

// let arr = [22, 5, 8, 1, 88, 9];

// console.log('A');

// let newAns = arr.map((el) => el % 2 === 0);

// console.log('B');

// console.log(newAns);

// console.log('C');

// A B newAns C

/* console.log('A');

setTimeout(() => {
  console.log('B');
  console.log('mehfooz khan');
  console.log('C');
}, 1000);

console.log('D'); */

// A B D name C

// A B name C D

// A D B name C

// #here we are useing the promise way to handle the data...
