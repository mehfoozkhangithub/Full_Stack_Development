// here we have to discuss the promises.

// this promises 👇

//? promise took callBack Function and also took (resolve,reject)

// $    ()=>{} // callback function
/*
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
  });
 */
//! what if we get delay to get the response

console.log('A');

let ice_cream = new Promise((res, rej) => {
  let got_ice_cream;
  console.log('B');

  /* 
  $   setTimeout(()=>{},delay)  
  */

  setTimeout(() => {
    got_ice_cream = true;
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

ice_cream
  .then(() => {
    console.log('eat ice cream');
  })
  .catch(() => {
    console.log('call mommy');
  });

console.log('E');


// #569CD6
