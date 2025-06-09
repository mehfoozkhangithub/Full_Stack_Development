//# Q.1 Check if a key exists. Write a function hasKey(obj, key) that returns true if the key exists
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

function hasKey(obj, key) {
  let flag = false;
  for (let val in obj) {
    if (val === key) {
      flag = true;
    }
  }
  return flag;
}
let ans = hasKey(car, 'maried');
console.log(' ans:', ans);

// # Object Destructuring Use destructuring to extract values from an object

const { brand, years, model, ...rest } = car;
console.log(' brand:', brand);
console.log(' model:', model);
console.log(' years:', years);
console.log(' rest:', rest);
