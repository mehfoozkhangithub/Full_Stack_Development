/* 
video i have to watch 


https://www.youtube.com/watch?v=q-tre99b0-0

https://www.youtube.com/watch?v=Qhn92q5lIbs

https://www.youtube.com/watch?v=v_sMvx-CMxs

*/

function loadScript(url) {
  let isLoaded = document.querySelector(".dynamic-script");

  if (isLoaded.length > 0) {
    console.log("not loading the scripts");
    return;
  }
  let myScript = document.createElement("script");
  myScript.src = url;
  myScript.className = "dynamic-script";
  document.body.append(myScript);
  console.log("loading the scripts");
}

let searchInput = document.querySelector("#search_input");

searchInput.addEventListener("focus", function (e) {
  loadScript("https://code.jquery.com/jquery-3.6.1.min.js");
});
