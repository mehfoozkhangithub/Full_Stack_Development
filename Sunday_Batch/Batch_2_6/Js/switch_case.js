/* const name = 14;

switch (name) {
  case 'A': {
    console.log('value got it...');
    return;
  }
  case 6 + 8: {
    console.log('value is 14...');
    return;
  }

  default:
    console.log('please select another value...');
}
 */

const number = process.argv[2];

switch (number) {
  case '1': {
    console.log('Monday...');
    return;
  }
  case '2': {
    console.log('Tuesday...');
    return;
  }
  case '3': {
    console.log('Wednesday...');
    return;
  }
  case '4': {
    console.log('Thursday...');
    return;
  }
  case '5': {
    console.log('Friday...');
    return;
  }
  case '6': {
    console.log('Saturday...');
    return;
  }
  case '7': {
    console.log('Sunday...');
    return;
  }

  default:
    console.log('please select any value between 1 to 7...');
}
