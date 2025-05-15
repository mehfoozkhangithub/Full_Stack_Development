let pages = 1;

const appendData = (value) => {
  const main = document.querySelector(".main");

  value.forEach((el) => {
    let container = document.createElement("div");
    let id = document.createElement("p");
    let text = document.createElement("p");

    container.classList.add("container");

    id.innerText = el.id;
    id.classList.add("id_data");
    text.innerText = el.title;

    container.append(id, text);
    main.append(container);
  });
};

const dataFetch = async () => {
  let api = `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pages}`;
  try {
    let res = await fetch(api);
    let data = await res.json();
    appendData(data);

    // console.log(" data:", data);
  } catch (error) {
    console.log(" error:", error);
  }
};

let prev = document.querySelector("#prev");
let next = document.querySelector("#next");

const prevBtnInvokation = () => {
  pages--;
  dataFetch();
  console.log(" pages:", pages);
};

const nextBtnInvokation = () => {
  pages++;
  dataFetch();
  console.log(" pages:", pages);
};
