let store = [];

const addTodo = () => {
  const valueText = document.getElementById('todo').value;
  let todoDetails = {
    id: Date.now(),
    textTodo: valueText,
    isEdit: false,
    isCompleted: false,
  };

  store.push(todoDetails);
  renderOnUI(store);
};

const renderOnUI = (data) => {
  const mainDiv = document.getElementById('todo_list');
  mainDiv.innerHTML = '';

  data.map((el, i) => {
    const checkBox = document.createElement('input');
    const text = document.createElement('h3');

    const childDiv = document.createElement('div');

    const btn_edit = document.createElement('button');
    const btn_delete = document.createElement('button');

    btn_edit.innerText = 'edit';
    btn_delete.innerText = 'delete';

    checkBox.type = 'checkbox';
    childDiv.className = `div-${i + 1}`;

    text.innerText = el.textTodo;

    // ! delete functionality

    btn_delete.addEventListener('click', () => {
      let deleteStore = data.filter((dl) => dl.id !== el.id);
      store = deleteStore;
      renderOnUI(store);
    });

    // & edit functionality

    btn_edit.addEventListener('click', () => {
      console.log('store in edit func before algo start', store);
      let editStore = data.map((es) =>
        es.id === el.id ? { ...es, isEdit: !es.isEdit } : es
      );
      store = editStore;
      renderOnUI(store);
      console.log('store in edit func', store);
    });

    childDiv.append(checkBox, text, btn_edit, btn_delete);

    mainDiv.append(childDiv);
  });
};

/* 

input -> empty after adding
empty add return

create 2 btn [cancel, confirm]
editInput 


*/
