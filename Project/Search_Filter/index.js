// const api = `https://jsonplaceholder.typicode.com/posts`;

const dataFetch = async (e) => {
  e.preventDefault();
  console.log(" e:", e);

  const userName = document.querySelector("#searchs").value;
  const git_user_api = `https://api.github.com/search/users?q=${userName}`;

  try {
    const res = await fetch(git_user_api);
    const dataRes = await res.json();
    console.log(" dataRes:", dataRes.items);
    appendData(dataRes.items);
  } catch (error) {
    console.log(" error:", error);
  }
};

/* 
** table-card **
id
login
avatar_url
user_view_type
*/

const appendData = (value) => {
  const main = document.querySelector(".container");

  value.forEach((el) => {
    let container = document.createElement("div");
    let id = document.createElement("p");
    let login = document.createElement("p");
    let image = document.createElement("img");
    let user_view_type = document.createElement("p");

    container.classList.add("containers");

    id.innerText = el.id;
    id.classList.add("id_data");
    login.innerText = el.login;
    image.src = el.avatar_url;
    image.classList.add("images");
    user_view_type.innerText = el.user_view_type;
    user_view_type.classList.add("user_view_list");

    container.append(id, login, image, user_view_type);
    main.append(container);
  });
  Page_Data.append(pages);
};
