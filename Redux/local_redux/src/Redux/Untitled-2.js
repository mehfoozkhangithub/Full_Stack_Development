/* eslint-disable no-undef */
let number1 = +process.argv[2];
let operator = process.argv[4];
console.log('🚀 ~ operator:', operator);
console.log('🚀 ~ number1:', typeof number1);
let number2 = +process.argv[3];
console.log('🚀 ~ number2:', number2);

const cal = (n1, n2, opt) => {
  switch (opt) {
    case '+':
      return n1 + n2;

    case '-':
      return n1 - n2;

    case '*':
      return n1 * n2;

    case '/':
      return n1 / n2;

    default:
      return 'please enter the correct operator according to this [+,-,*,/]';
  }
};

let ans = cal(number1, number2, operator);
console.log('🚀 ~ ans:', ans);
