let localStorages = JSON.parse(localStorage.getItem('todoData')) || [];

const myTodos = (event) => {
  let valueTodo = event.target.value;

  if (valueTodo === '') {
    alert('please fill the tood text');
    return;
  }

  let todos = {
    id: crypto.randomUUID(),
    text: valueTodo,
    isCompleted: false,
    isEdits: false,
  };

  localStorages.push(todos);
  localStorage.setItem('todoData', JSON.stringify(localStorages));
  apendData();
  event.target.value = '';
};

const apendData = () => {
  const mainDiv = document.querySelector('#infoTodos');

  localStorages.map((e, i) => {
    let div = document.createElement('div');
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'checkboxTodo';
    let id = document.createElement('p');
    let p = document.createElement('p');

    div.className = `box-${i + 1}`; // dynamic class

    id.innerText = e.id;
    p.innerText = e.text;

    let btn_edit = document.createElement('button');
    let btn_delete = document.createElement('button');
    btn_edit.innerText = 'edit';
    btn_edit.classList.add('edit_btn');

    btn_delete.innerText = 'delete';
    btn_delete.classList.add('delete_btn');

    div.append(checkbox, id, p, btn_edit, btn_delete);
    mainDiv.append(div);
  });
};
