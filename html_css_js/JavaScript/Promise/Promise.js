// here we have to discuss the promises.

// this promises 👇

/*
In JavaScript, a Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It acts as a placeholder for a value that may not yet be available, allowing you to handle the results of asynchronous operations in a more structured and predictable way than traditional callbacks. 
A Promise can exist in one of three states:
Pending: The initial state; the asynchronous operation has not yet completed.
Fulfilled (Resolved): The operation completed successfully, and the promise now holds a resulting value.
Rejected: The operation failed, and the promise holds a reason for the failure (an error object).
*/

//? promise took callBack Function and also took (resolve,reject);

// $    ()=>{} // callback function

/* let ice_cream = new Promise((res, rej) => {
  let got_ice_cream = false;
  if (got_ice_cream) res(got_ice_cream);
  else rej(got_ice_cream);
}); // here i created new promises
// console.log('🚀 ~ ice_cream:', ice_cream);

// we started the promises

ice_cream
  .then(() => {
    console.log('eat ice cream');
  })
  .catch(() => {
    console.log('call mommy');
  }); */

//! what if we get delay to get the response

console.log('A');

let ice_cream = new Promise((res, rej) => {
  let got_ice_cream;
  console.log('B');

  /*
  $   setTimeout(()=>{},delay)
  */

  setTimeout(() => {
    got_ice_cream = false;
    if (got_ice_cream) {
      res(got_ice_cream);
    } else {
      rej(got_ice_cream);
    }
  }, 3000);

  console.log('C');

}); // here i created new promises

// we started the promises
console.log('D');

console.log('🚀 ~ ice_cream:', ice_cream);

ice_cream
  .then(() => {
    console.log('eat ice cream');
  })
  .catch(() => {
    console.log('call mommy');
  });

console.log('E');
