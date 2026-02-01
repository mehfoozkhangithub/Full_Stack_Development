// let pin = +process.argv[2];
// console.log('🚀 ~ pin:', pin);

// let mySavedPin = 123;
// console.log('🚀 ~ mySavedPin:', mySavedPin);

// if (pin === mySavedPin) {
//   console.log('unlock');
// } else if (
//   pin !== mySavedPin &&
//   pin !== undefined &&
//   pin !== null &&
//   !isNaN(pin)
// ) {
//   console.log('incorrect pass');
// } else {
//   console.log('try again later...');
// }

// switch case

// let pin = +process.argv[2];
// let mySavedPin = 123;

// if (isNaN(pin)) {
//   pin = '';
// }

// switch (!isNaN(pin)) {
//   case pin === mySavedPin:
//     console.log('valid data');
//     break;

//   case pin === '':
//     console.log('not valid data');
//     break;

//   default:
//     console.log('incorrect data');
// }

/* let num1 = +process.argv[2];
let num2 = +process.argv[3];
let type = process.argv[4];

switch (type) {
  case 'ADD':
    console.log(`adding ${num1 + num2}`);
    break;
    
  case 'SUB':
    console.log(`sub ${Math.abs(num1 - num2)}`);
    break;
    

  default:
    console.log('missing something....');
} */
//  problem:1 Take a number (1–7). Print the day of the week.

let daysNumber = +process.argv[2];

switch (daysNumber) {
  case 1:
    console.log('Monday');
    break;

  case 2:
    console.log('Tuesday');
    break;

  case 3:
    console.log('Wednesday');
    break;

  case 4:
    console.log('Thursday');
    break;

  case 5:
    console.log('Friday');
    break;

  case 6:
    console.log('Saturday');
    break;

  case 7:
    console.log('Sunday');
    break;

  default:
    console.log(
      'please select the value between 1 to 7 for week days output...'
    );
}

/* 

A user selects a drink:
      - C → Coffee
      - T → Tea
      - J → Juice
      - W → Water

*/
