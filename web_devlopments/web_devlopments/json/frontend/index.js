let data = [];

const API = `http://localhost:3001/todos`;

function myTodosAdd() {
  const todoText = document.querySelector('#todos').value;
  console.log('🚀 ~ todoText:', todoText);

  console.log('🚀 ~ data:', data);

  if (todoText.trim() === '') return;

  let newTodos = {
    id: data.length + 1 + '',
    text: todoText,
    isEdit: false,
    isCompleted: false,
  };
  fetchDataPost(newTodos);
}

// this is Post

function fetchDataPost(value) {
  fetch(API, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(value),
  });
}

// this is patch
function fetchDataPatch(value) {
  fetch(API, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(value),
  });
}

// this is put
function fetchDataPut(value) {
  fetch(API, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(value),
  });
  // .then((res) => console.log('this is from addTodo', res))
  // .then(() => alert('data has been sent ✔'))
  // .catch((err) => console.log('this is from addTodo', err))
  // .finally(() => console.log('done with api process😎🙄'));
}

// this is get
function fetchTodosDB() {
  fetch(API)
    .then((res) => res.json())
    .then((res) => (data = [...res]))
    .catch((err) => console.log(err))
    .finally(() => UIrender());
}

function UIrender() {
  const mainContainer = document.querySelector('#dataInfo');

  if (data.length === 0) mainContainer.append(`no data ❌`);

  data &&
    data.map((el) => {
      const todoDiv = document.createElement('div');
      const checkInput = document.createElement('input');
      const headingText = document.createElement('h2');
      const statusTodo = document.createElement('h3');
      const editBtn = document.createElement('button');
      const deleteBtn = document.createElement('button');
      const id = document.createElement('p');

      id.innerText = el.id;

      todoDiv.className = 'myTodo_div';

      checkInput.type = 'checkbox';

      headingText.innerText = el.text;

      statusTodo.innerText = el.isEdit ? 'true' : 'false';

      editBtn.innerText = 'edit';

      editBtn.addEventListener('click', async () => {
        await fetch(`${API}/${el.id}`, {
          method: 'PATCH',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({ isEdit: !el.isEdit }),
        });
      });

      /*  deleteBtn.addEventListener('click', () => {
        fetch(`${API}/${el.id}`, {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json',
          },
        });

        const dataChange = data
          .filter((ll) => ll.id !== el.id)
          .map((ml) => (ml.id >= el.id ? { ...ml, id: ml.id - 1 + '' } : ml));

        sessionStorage.setItem('todoSet', JSON.stringify(dataChange));

        fetch(API, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({ todos: dataChange }),
        });
      }); */

      deleteBtn.addEventListener('click', async () => {
        // delete from json-server
        await fetch(`${API}/${el.id}`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
        });

        // compute updated list
        // const dataChange = data
        //   .filter((d) => Number(d.id) !== Number(el.id))
        //   .map((d) => ({
        //     ...d,
        //     id: Number(d.id) > Number(el.id) ? Number(d.id) - 1 : Number(d.id),
        //   }));

        // update storage
        // sessionStorage.setItem('todoSet', JSON.stringify(dataChange));

        // PATCH each item to json-server
        // for (const item of dataChange) {
        //   await fetch(`${API}/${item.id}`, {
        //     method: 'PUT',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(item),
        //   });
        // }
      });

      deleteBtn.innerText = 'delete';

      todoDiv.append(
        checkInput,
        id,
        headingText,
        editBtn,
        deleteBtn,
        statusTodo
      );

      mainContainer.append(todoDiv);
    });
}
