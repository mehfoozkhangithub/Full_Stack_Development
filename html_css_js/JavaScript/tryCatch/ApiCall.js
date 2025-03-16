let api = "https://jsonplaceholder.typicode.com/posts";

const ApiCall = async (url) => {
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

ApiCall(api);
