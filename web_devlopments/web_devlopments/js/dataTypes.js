// primitive - [ call by value] [ point to memory ]

/**
 *
 * ! string - "" '' ``
 * # number - 0-9
 * $ boolean - true/false
 * * symbol -  symbol()
 * & undefined - undefined
 * ? null - null
 *   BigInt -  1223453893828282.n
 *
 */

// non-primitive - [ call by refrence] [ point to address]

/**
 *
 * ! array - []
 * # object - {}
 * $ function - ()
 * *
 */

let name1 = 'shivam';
// console.log('🚀 ~ name:', name);

name1 = 'Renee';
// console.log('🚀 ~ name:', name);

name1[0] = 'S';
console.log('🚀 ~ name:', name1);
console.log('🚀 ~ name[0]:', name1[0]);

let otherName = 'shivam';

let arr = [
  1,
  3,
  4,
  name1,
  otherName,
  'renee',
  [true, false],
  { name: 'mehfooz', age: 99 },
];

arr[0] = 'sneha';
arr[1] = 'abhishek';

console.log('🚀 ~ arr[0]:', arr[0]); // sneha
console.log('🚀 ~ arr:', arr);

// colian -> created by Renee
