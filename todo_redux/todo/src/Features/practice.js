let Array = [1, [2, 3], 4, [5, 6], 7, [8, 9], [10]];

let newArr = [];

for (let i = 0; i < Array.length; i++) {
  console.log(typeof Array[i]);
  if (typeof Array[i] === "number") {
    newArr.push(Array[i]);
  } else {
    for (let j = 0; j < Array[i].length; j++) {
      // console.log(Array[i][j]);
      newArr.push(Array[i][j]);
    }
  }
}
console.log(newArr);

// let newArray = Array.flat().filter((item) => typeof item === "number");
// let defArray = Array.flat();
// console.log(defArray);

let arr2 = [0, 1, [2, [3, [4, 5]]]];

arr2 = arr2.flat(Infinity).filter((item) => typeof item === "number");

console.log(arr2);

// ! closures explanations.

function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    let name2 = "mehfooz";
    // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
    console.log(arr2);
  }
  displayName();
}
init();

//   console.log(name)
let value = 1;

let doSomething = () => {
  value = 2;
};

// doSomething()
console.log(value);

let str = "mehfooz";

//! merge short array

let list1 = [1, 2, 4];
let list2 = [1, 3, 4];

let mergArr=[]

for (let i = 0; i < list1.length; i++) {
  mergArr.push(list1[i])
}
