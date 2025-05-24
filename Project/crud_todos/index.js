let arrStorage = JSON.parse(localStorage.getItem('todos')) || [];

const myTodos = () => {
  const todoVal = document.querySelector('#todos').value;
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
  console.log(arrStorage, 'this is befor storing in the ls');
  localStorage.setItem('todos', JSON.stringify(arrStorage));
  appendData();
  console.log('your data has been add in to ls...');
  document.querySelector('#todos').value = '';
};

let name = 'mehfooz';

const appendData = () => {
  console.log(arrStorage, 'arr');
  const dataInfo = document.querySelector('#dataInfo');
  dataInfo.innerHTML = '';
  arrStorage &&
    arrStorage.forEach((el, i) => {
      let div = document.createElement('div');
      let id = document.createElement('p');
      let text = document.createElement('p');

      div.className = 'dataRow';

      id.innerText = el.id;
      text.innerText = el.todoText;

      // here we are created btn for 'edit' & 'delete'
      let editBtn = document.createElement('button');
      editBtn.innerText = 'edits';
      editBtn.classList = 'edit-btn';

      let deleteBtn = document.createElement('button');
      deleteBtn.innerText = 'delete';
      deleteBtn.classList = 'delete-btn';

      div.append(id, text);
      dataInfo.append(div);
    });
};
