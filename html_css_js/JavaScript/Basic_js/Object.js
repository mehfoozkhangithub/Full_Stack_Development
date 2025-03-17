// this is object

// template literal -> `${}`

let car = {
  brand: "alto",
  model: "800",
  years: 1999,
  automation: {
    name: "advance alto",
    model: "1200",
    years: 1880,
  },
};

// task 1

car.years = 2000;
car.country = "india";

// console.log(car);

// task 2

/*
for (let key in car) {
  console.log(`${key} -> ${car[key]}`);
}
*/

// task 3

for (let key in car) {
  console.log(typeof car[key], key);
  if (typeof car[key] === "string" || typeof car[key] === "number") {
    console.log(`${key} -> ${car[key]}`);
  }
  if (typeof car[key] === "object") {
    console.log(`${key} -> ${car[key]}`);
  }
}
