let array = [1, 3, 3, 4, 5];

console.log(array.findIndex((value) => value === 3));
// console.log(array.indexOf(4));

// map --> []
//@  filter -> [reduce the conditonal value];

let arr = [2, 3, 1, 7, 5, 99, 100, 10, 125];

// arr.sort((a, b) => a - b);

// arr.splice(4, 0, 2);
// console.log('-> arr:', arr);

let ans = arr.slice(3, 6);

// console.log('-> ans:', ans);

let arr1 = arr.join(' ');
console.log('-> arr1:', arr1);
