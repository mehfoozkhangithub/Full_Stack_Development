let arrStorage = [];

let localStorages = JSON.parse(localStorage.getItem("todos")) || [];
const myTodos = () => {
  const todoVal = document.querySelector("#todos").value;
  if (todoVal.length === 0) {
    /*  todoVal.innerHTML =
      "<p>You have empty todo text.. please fill the text for todos</p>"; */
    return;
  }

  let data = {
    id: Math.random().toString(36).substring(2, 15),
    todoText: todoVal,
    isCompleted: false,
  };

  arrStorage.push(data);
  localStorage.setItem("todos", JSON.stringify(arrStorage));
  console.log("your data has been add in to ls...");
  document.querySelector("#todos").value = "";
  appendData(localStorages);
};

const appendData = (localStorages) => {
  const dataInfo = document.querySelector("#dataInfo");
  localStorages.map((el, i) => {
    let div = document.createElement("div");
    let id = document.createElement("p");
    let text = document.createElement("p");

    div.className = "dataRow";

    id.innerText = el.id;
    text.innerText = el.todoText;

    div.append(id, text);
    dataInfo.append(div);
  });
};
