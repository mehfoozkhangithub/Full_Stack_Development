let buttonEvent = document.querySelector("#todo-btn");

let localStorages = JSON.parse(localStorage.getItem("todoData")) || [];

let mainDive = document.getElementById("container");

buttonEvent.addEventListener("click", (event) => {
  event.preventDefault(); // this is handle auto reload by default behaviour of the form...

  // here we are targeting the value from.

  let todos = document.querySelector("#todo-input").value;

  let object = {
    id: Date.now(),
    text: todos,
    isEdits: false,
    isToggle: false,
  };

  localStorages.push(object);
  // basically we are just setting the LS for manupulation of the data...

  localStorage.setItem("todoData", JSON.stringify(localStorages));

  todos = document.querySelector("#todo-input").value = "";

  //   here we have to append the data inlist formate...

  localStorages.forEach((element) => {
    let div = document.createElement("div");
    div.setAttribute("class", "list_todo");

    let divBtn = document.createElement("div");
    divBtn.setAttribute("class", "btn_todo");

    let p = document.createElement("p");
    p.innerText = element.text;
    p.setAttribute("class", "task_name");

    let editBtn = document.createElement("button");
    editBtn.innerText = "edits";
    editBtn.setAttribute("class", "task_name");

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "delete";
    deleteBtn.setAttribute("class", "task_name");

    deleteBtn.addEventListener("click", () => {
      deleteFunc(element.id);
    });

    divBtn.append(editBtn, deleteBtn);
    div.append(p, divBtn);
    mainDive.append(div);
  });

  // delete function from getting the id and removeing the value..

  const deleteFunc = (id) => {
    let localStorages = JSON.parse(localStorage.getItem("todoData")) || [];

    let newData = localStorages.filter((el) => {
      if (id === el.id) {
        let delData = JSON.parse(localStorage.getItem("delete")) || [];
        delData.push(el);
        localStorage.setItem("delete", JSON.stringify(delData));
      } else {
        return id !== el.id;
      }
    });
    localStorage.setItem("todoData", JSON.stringify(newData));
    window.location.reload();
  };
});

// anonymous
