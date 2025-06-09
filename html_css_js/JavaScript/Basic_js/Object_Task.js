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

//# Factory Function Write a function createBook(title, author, year) that returns a book object

// @ constructor function with normal fuctionBase....

function CreateBook(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

const Book = new CreateBook('harry-potter', 'dumbull-dor', 2001);
console.log(' Book:', Book);

//$ class base constructor function

class CreateBooks {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

const Book1 = new CreateBooks('rich-dad & poor-dad', 'xyz', 1999);
const Book2 = new CreateBooks('FSD', 'Mehfooz-khan', 2000);
console.log(' Book:', Book1);
console.log(' Book2:', Book2);
