let arrs = [1, 2, 3, [4, 5], [6, 7, 8]];

let newArr = [];

for (let i = 0; i < arrs.length; i++) {
  if (typeof arrs[i] === 'number') {
    newArr.push(arrs[i]);
  }
  for (let j = 0; j < arrs[i].length; j++) {
    if (typeof arrs[i][j] === 'number') {
      newArr.push(arrs[i][j]);
    }
    for (let k = 0; k < arrs[i][j].length; k++) {
      newArr.push(arrs[i][j][k]);
    }
  }
}

console.log('🚀 ~ newArr:', newArr);
