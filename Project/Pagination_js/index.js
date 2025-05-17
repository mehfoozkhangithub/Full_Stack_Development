let pages = 1;
let flag = null;
let length_of_pagination;
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");

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
    let data = await res.json();
    length_of_pagination = await data.length;

    if (pages === 1) {
      prev.setAttribute("disabled", "true");
    }

    appendData(data);
  } catch (error) {
    console.log(" error:", error);
  }
};

const prevBtnInvokation = () => {
  if (pages === 1) {
    prev.setAttribute("disabled", "true");
  } else if (pages === 0) {
    return;
  } else if (pages > 1) {
    next.removeAttribute("disabled");
    pages--;
    flag = false;
    dataFetch();
  }
};

const nextBtnInvokation = () => {
  if (pages == length_of_pagination) {
    next.setAttribute("disabled", "true");
    pages--;
  } else if (pages >= 1) {
    prev.removeAttribute("disabled");
  }
  flag = true;
  pages++;
  dataFetch();
};
