let number1 = Number(process.argv[2]);
let number2 = +process.argv[3];
let operators = process.argv[4];

const calculator = (num1, num2, opt) => {
  switch (opt) {
    case '+':
      return num1 + num2;

    default:
      return 'please enter proper value in this manner -> "num1" "num2" "operators"';
  }
};
let ans = calculator(number1, number2, operators);
console.log('-> ans:', ans);
