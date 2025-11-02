// console.log([1, 10, 2, 20].sort((a, b) => b - a));
//  what is array?

let arr = [1, ['abc'], { name: 'mehfooz' }];

for (let i = 0; i < arr.length; i++) {
  if (Array.isArray(arr[i])) {
    console.log(arr[i][0]);
  } else if (typeof arr[i] === 'object') {
    console.log(arr[i].name);
  } else {
    console.log(arr[i]);
  }
}
