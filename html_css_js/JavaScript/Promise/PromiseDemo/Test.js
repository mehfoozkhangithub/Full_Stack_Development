/*
// code no-1

function appends(s) {
  let script = document.createElement("script");

  script.src = s;

  document.head.append(script);
  //? first explain this code and after this go to line of 10
  // hello(); // depended on script to get completely load.

  setTimeout(() => {
    hello(); // depended on script to get completely load.
  }, 3000);

  //   console.log(document);
}
appends("./myScript.js");

*/

/*
// code no-2

function appends(s) {
  return new Promise((res, rej) => {
    let script = document.createElement("script");

    script.src = s;

    document.head.append(script);

    script.onload = function () {
      res("Script loading done");
    };

    script.onerror = function () {
      rej("Not Loaded");
    };
  });
}
// console.log(appends("./myScript.js")); // explain this while performing the promise code.
//* basically .then and .catch give use to handle the value of Promise.
appends("./myScript.js")
  .then((res) => {
    console.log(res);
    hello();
  })
  .catch((err) => {
    console.log(err);
  });
*/

// code no-3

function appends(s) {
  return new Promise((res, rej) => {
    let script = document.createElement("script");

    script.src = s;

    document.head.append(script);

    script.onload = function () {
      res("Script loading done");
    };

    script.onerror = function () {
      rej("Not Loaded");
    };
  });
}

async function handle() {
  let res = await appends("./myScript.js");
  hello();
  console.log(res);
}
handle();
