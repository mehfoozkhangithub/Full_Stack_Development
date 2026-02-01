// sync way promise

// const result = new Promise((res, rej) => {
//   let dataFound = true;

//   if (dataFound) {
//     res('got the data....');
//   } else {
//     rej('not found the data... ');
//   }
// });

// result.then((res) => console.log(res)).catch((err) => console.log(err));

/* 

setTimeout
setInterval

*/

console.log('A');
console.log('B');
console.log('C');
console.log('D');
console.log('E');

// setTimeout(function(){},1000)

const id = setInterval(() => {
  console.log('hello set Interval....');
}, 1000);
console.log('🚀 ~ id:', id);

setTimeout(() => {
  console.log('hello set Time out....');
  clearInterval(id);
}, 3000);
