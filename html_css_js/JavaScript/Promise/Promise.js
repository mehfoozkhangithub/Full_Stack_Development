// here we have to discuss the promises.

// this promises 👇

//? promise took callBack Function and also took (resolve,reject)
/* 
// $    ()=>{} // callback function
let ice_cream = new Promise((res, rej) => {
  let got_ice_cream = true;
  if (got_ice_cream) res(got_ice_cream);
  else rej(got_ice_cream);
}); // here i created new promises

// we started the promises

ice_cream
  .then(() => {
    console.log('eat ice cream');
  })
  .catch(() => {
    console.log('call mommy');
  }); */

//! what if we get delay to get the response

let ice_cream = new Promise((res, rej) => {
  let got_ice_cream;

  setTimeout(() => {
    got_ice_cream = false;
    if (got_ice_cream) {
      res('eat ice cream');
    } else {
      rej('call mom');
    }
  }, 3000);
}); // here i created new promises

// we started the promises

ice_cream
  .then(() => {
    console.log('eat ice cream');
  })
  .catch(() => {
    console.log('call mommy');
  });

// #569CD6
