/* 
function are three types 

1. name function parameter's | arrgument's | return 
2. arrow function

*/

const name = process.argv[2];
// console.log(`🚀 ~ name:`, name);

const showName = (parameter) => {
  if (!parameter) return;
  return `fucntion executed..... ${parameter}`;
};
const ans = showName(name);
console.log(`🚀 ~ ans:`, ans);

const showName_2 = (value) => {
  return value;
};

const ans_2 = showName_2(name);
console.log(`🚀 ~ ans_2:`, ans_2);
