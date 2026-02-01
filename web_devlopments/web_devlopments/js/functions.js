/* function myFunc(a, b, c) {
  // block code
  console.log('mehfooz');
  return a + b + c;
}

const ans = myFunc(5, 8, 7);

console.log(ans);

// arrow function

const myFunc2 = (a, b, c, d) => {
  console.log('khan');
  return a + b + c + d;
};

const ans2 = myFunc2(2, 6, 9, 6); */

function checkEvOd(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      console.log('this is even number', i);
    } else {
      console.log('this is odd number', i);
    }
  }
}

checkEvOd(10);
