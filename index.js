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

const Persons = {
  Rahul: 18,

  Raj: 19,

  Kunal: 9,

  Abhi: 17,

  Ajay: 25,

  Arjun: 68,

  Brijesh: 32,
};

// Print all the persons, who's age is 18 or above 18, in ascending order according to their age.

// Expected Output

// ["Rahul", "Raj", "Ajay", "Brijesh", "Arjun"];
let arr = [];

for (let key in Persons) {
  if (Persons[key] >= 18) {
    arr.push({ name: key, age: Persons[key] });
  }
}

arr.sort((a, b) => a.age - b.age);

let arrStr = [];
for (let i = 0; i < arr.length; i++) {
  arrStr.push(arr[i].name);
}

console.log(' arrStr:', arrStr);

/*

+ this is the shorted of above code...

@ const result = Object.entries(Persons).filter(([_, age]) => age >= 18).sort((a, b) => a[1] - b[1]).map(([name]) => name);

# console.log(result); // ["Rahul", "Raj", "Ajay", "Brijesh", "Arjun"]

*/
