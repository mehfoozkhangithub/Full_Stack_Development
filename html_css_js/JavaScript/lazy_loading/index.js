/* 
video i have to watch 

https://www.youtube.com/watch?v=q-tre99b0-0

https://www.youtube.com/watch?v=Qhn92q5lIbs

https://www.youtube.com/watch?v=v_sMvx-CMxs

*/

function loadScript(url) {
  // console.log('🚀 ~ url:', url);
  let isLoaded = document.querySelector(".dynamic-script");
  // console.log('🚀 ~ isLoaded:', isLoaded);

  try {
    if (isLoaded.length > 0) {
      console.log("not loading the scripts");
      return;
    }
    let myScript = document.createElement("script");
    myScript.src = url;
    myScript.className = "dynamic-script";
    document.body.append(myScript);
    console.log("loading the scripts");
  } catch (error) {
    console.log('🚀 ~ error:', error);
  }
}

let searchInput = document.querySelector("#search_input");

searchInput.addEventListener("focus", function () {
  loadScript("https://code.jquery.com/jquery-3.6.1.min.js");
});
