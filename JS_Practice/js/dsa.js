let arr = [3, 5, 7, 9, 2, 6];

let m = 5;

// [2,0,2,4,3,1]

// [[2,3],[0,5],[2,7],[4,9],[3,2],[1,6]]

// [5,6,3,7,2,9] -> o/p

let newArr = arr.map((el, i, arr) => {
  let jhola = [];

  jhola.push(Math.abs(el - m), arr[i]);

  return jhola;
});

newArr = newArr.sort((a, b) => a[0] - b[0]);

newArr = newArr.map((el) => el[1]);
console.log('🚀 ~ newArr:', newArr);

/*
let arr = [3, 5, 7, 9, 6];

let m = 5;

arr = arr
  .map((el, i, arr) => {
    return [Math.abs(arr[i] - m), arr[i]];
  })
  .sort((a, b) => a[0] - b[0])
  .map((el) => el[1]);

console.log('🚀 ~ arr:', arr);
*/

/* 
let arr=[2,4,1,10,9,8,100,121];

arr.sort((a,b)=>b-a);

clg(arr)
*/

// palindrom code:-

/* 

let string = 'A man, a plan, a canal: Panama';

let str1 = 'ababa';
let ans1 = string
  .toLowerCase()
  .split(/[, :]+/)
  .join('');

let left = 0;
let right = ans1.length - 1;

function isPalindrom(ans) {
  while (left < right) {
    if (ans[left] !== ans[right]) return false;
    left++;
    right--;
  }
  return true;
}

let abc = isPalindrom(ans1);

// let jhola = '';
// for (let i = ans.length - 1; i >= 0; i--) {
//   jhola += ans[i];
// }
// if (ans === jhola) {
//   console.log('this is palindrom');
// } else {
//   console.log('this is not a palindrom');
// }



*/
