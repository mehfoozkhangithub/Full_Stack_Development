let array = [1, 4, 6, 8, 10, 13];

/* 

push 
pop

unShift
shift
*/

/* array.push(15);
array.pop();

array.unshift(0);
array.shift(); */

const ownAt = (para) => {
  // para is nothing but ouw index of element's.
  for (const val in array) {
    if (typeof para !== 'number' || typeof para !== 'string') {
      return 1;
    }
    if (val == para) {
      return array[val];
    }
  }
};
console.log(`🚀 ~ ownAt:`, ownAt([2, 4]));

console.log(`🚀 ~ array:at`, array.at([2, 4]));
// console.log(`🚀 ~ array:include`, array.includes(2));
