// primitive [non-mutable](call-by-value){they only point the value in memory}

/* 
- string
- number
- boolean
- Symbole
- BigIn


*/

// non-primitive [mutable](call-by-refrence){they give the storage in memory}

/* 

- array = []
- object = {}
- function = ()

*/

// let newValue = ['m', 'khan'];

// console.log('🚀 ~ newValue[0] :', newValue[0]);
// console.log('🚀 ~ newValue[1] :', newValue[1]);

// console.log(' newValue:before', newValue);

// newValue[0] = 'mehfooz';

// console.log(' newValue:after', newValue);

let arr = ['mehfooz', 'khan'];

// arr[0][0]
// console.log('🚀 ~ arr[0][0]:', arr[0][0]);

let names = 'mehfooz';
let jhola = '';

for (let el of arr[0]) {
  if (el === 'm') {
    jhola += 'k';
    continue;
  } else {
    jhola += el;
  }
}

// console.log('🚀 ~ jhola:', jhola);

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log('this is first ', i), 1);
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log('this is second', i), 1);
// }

const bird = {
  size: 'small',
};

const mouse = {
  name: 'Mickey',
  small: true,
};

// console.log(mouse.bird.size);
// console.log(mouse[bird.size]);
console.log(mouse[bird['size']]);
