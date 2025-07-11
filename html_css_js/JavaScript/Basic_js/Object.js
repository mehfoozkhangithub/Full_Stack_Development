// this is object

// template literal -> `${}`

// object literal -> {}

let car = {
  brand: 'alto',
  model: '800',
  years: 1999,
  automation: {
    name: 'advance alto',
    model: '1200',
    years: 1880,
  },
  myFunc: function () {
    console.log('hello');
  },
  hobbies: ['cod', 'gow', 'gta'],
  maried: false,
};
/* console.log('-> car:', car.brand);
console.log('-> car.automation:', car.automation);
console.log('-> car.hobbies:', car.hobbies);
console.log('-> car.maried:', car.maried); */

// for (let key in car) {
//   console.log(`keys: ${key} value: ${car[key]}`);
// }

// dot operator

// for (let key in car) {
//   console.log('key:', key);
//   console.log(' value:', car[key]);
// }

// task 1

car.years = 1980;
car.country = 'india';

delete car.myFunc;
console.log(car);

// task 2

/*
for (let key in car) {
  console.log(`${key} -> ${car[key]}`);
}
*/

// task 3

/* for (let key in car) {
  console.log(typeof car[key], key);
  if (typeof car[key] === 'string' || typeof car[key] === 'number') {
    console.log(`${key} -> ${car[key]}`);
  }
  if (typeof car[key] === 'object') {
    console.log(`${key} -> ${car[key]}`);
  }
}
 */
