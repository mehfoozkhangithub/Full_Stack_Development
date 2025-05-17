let pages = 1;
let flag = null;
let length_of_pagination;
console.log(" length_of_pagination:", length_of_pagination);

const appendData = (value) => {
  const main = document.querySelector(".main");
  const Page_Data = document.querySelector(".numOfPage");

  if (flag || !flag) {
    main.innerHTML = "";
    Page_Data.innerText = "";
  }

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
  Page_Data.append(pages);
};

const dataFetch = async () => {
  let api = `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pages}`;
  try {
    let res = await fetch(api);
    console.log(" res:", res);

    let data = await res.json();
    length_of_pagination = await data.length;
    appendData(data);
  } catch (error) {
    console.log(" error:", error);
  }
};

let prev = document.querySelector("#prev");
let next = document.querySelector("#next");

const prevBtnInvokation = () => {
  console.log(" length_of_pagination:", length_of_pagination);
  if (pages === 1) {
    prev.setAttribute("disabled", "true");
  } else if (pages === 0) {
    return;
  } else if (pages > 1) {
    next.removeAttribute("disabled");
  }
  pages--;
  flag = false;
  dataFetch();
  console.log(" pages:", pages);
};

const nextBtnInvokation = () => {
  console.log("length_of_pagination:", length_of_pagination);
  if (pages === length_of_pagination) {
    next.setAttribute("disabled", "true");
  } else if (pages > 1) {
    prev.removeAttribute("disabled");
  }
  pages++;
  flag = true;
  dataFetch();
  console.log(" pages:", pages);
};
