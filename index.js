// function functions() {
//   //! codes
//   document.getElementById("text").innerHTML = "Click invoke";

//   setTimeout(() => {
//     document.getElementById("text").innerHTML = "Responsive Text Color";
//   }, 4000);
// }

//hello

/* const buf = Buffer.from('Hello');
console.log(' buf:', buf.toString());
 */

/* let names = [1, 2, 3, 4, 5, 6, 7],
  ages = [{ hello: 'mehfooz' }];

console.log(names, ages); */

const Persons = {
  Rahul: 18,

  Raj: 19,

  Kunal: 9,

  Abhi: 17,

  Ajay: 25,

  Arjun: 68,

  Brijesh: 32,

  mehfooz: 19,

  arnav: 33,
};

// Print all the persons, who's age is 18 or above 18, in ascending order according to their age.

// Expected Output

// ["Rahul", "Raj", "Ajay", "Brijesh", "Arjun"];

// ["Rahul", "Raj","mehfooz", "Ajay", "Brijesh","Arnav", "Arjun"];

let arr = [];

for (let key in Persons) {
  if (Persons[key] >= 18) {
    arr.push({ name: key, age: Persons[key] });
  }
}

arr.sort((a, b) => a.age - b.age);
console.log(' arr:', arr);

//# dry run

/* for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j].age > arr[j + 1].age) {
      // Swap
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
} */
// console.log(' arr:', arr);

let arrStr = [];
for (let i = 0; i < arr.length; i++) {
  arrStr.push(arr[i].name);
}

// console.log(' arrStr:', arrStr);

/*

+ this is the shorted of above code...

@ const result = Object.entries(Persons).filter(([_, age]) => age >= 18).sort((a, b) => a[1] - b[1]).map(([name]) => name);

# console.log(result); // ["Rahul", "Raj", "Ajay", "Brijesh", "Arjun"]

*/

var arr1 = [1, 1, 23, 32, 23, 1, 50, 40, 60, 50];

function input(arr, n) {
  const uniqueArr = [...new Set(arr)];

  uniqueArr.sort((a, b) => b - a);
  console.log(' uniqueArr:', uniqueArr);
  // console.log(' uniqueArr:', uniqueArr[n - 1]);
}

input(arr1, 3);
