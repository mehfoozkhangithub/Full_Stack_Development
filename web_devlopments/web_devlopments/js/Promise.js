// this is sync behaviours

/* console.log('A');
console.log('B');
console.log('C');
console.log('D');
console.log('E'); */

// this is async behaviours

/* console.log('A');
console.log('B');
setInterval(() => {
  console.log('D');
}, 100);
console.log('C');
console.log('E'); */

/* 

setTimeout(()=>{
    console.log('D');
    },1000)

*/

/* const ice_cream = new Promise((res, rej) => {
  let gotIt = null;
  if (gotIt) {
    res('i go the icecream...');
  } else if (gotIt === false) {
    rej('call mommy!!');
  } else {
    // do nothing it's show us pending state..
  }
});

console.log('🚀 ~ ice_cream:', ice_cream);
ice_cream.then((res) => console.log(res)).catch((err) => console.log(err));
 */
// 1 - 2 - 4 - clg(icecream) - 5 - i got icecream - 6 -7

console.log(1);
const ice_cream = new Promise((res, rej) => {
  let gotIt;
  console.log(2);
  setTimeout(() => {
    console.log(3);
    gotIt = true;
    if (gotIt) {
      res('i go the icecream...');
    } else if (gotIt === false) {
      rej('call mommy!!');
    } else {
      // do nothing it's show us pending state..
    }
  }, 100);
});

console.log(4);
console.log('🚀 ~ ice_cream:', ice_cream);
ice_cream
  .then((res) => {
    console.log(5);
    console.log(res);
    console.log(6);
  })
  .catch((err) => console.log(err));

console.log(7);
