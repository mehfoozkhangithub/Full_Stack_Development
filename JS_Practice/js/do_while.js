let number;

do {
  number = +prompt('enter your number...');
} while (number >= 0);

console.log('you enter the negative number???');

let str = 'hello';

let arr = [];

for (let i = 0; i < str.length; i++) {
  arr[arr.length] = str[i];
}

let jhola = '';

for (let i = arr.length - 1; i >= 0; i--) {
  jhola += arr[i];
}

jhola;
