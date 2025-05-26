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
    isEdits: false,
  };

  arrStorage.push(data);
  localStorage.setItem('todos', JSON.stringify(arrStorage));
  appendData();
  console.log('your data has been add in to ls...');
  document.querySelector('#todos').value = '';
};

const appendData = () => {
  const dataInfo = document.querySelector('#dataInfo');
  console.log(' arrStorage:', arrStorage);

  dataInfo.innerHTML = '';

  arrStorage &&
    arrStorage.forEach((el, i) => {
      let div = document.createElement('div');
      let id = document.createElement('p');
      let text = document.createElement('p');

      div.className = 'dataRow';

      id.innerText = el.id;
      text.innerText = el.todoText;

      //! here we have to just make sure about out isEdit is true or false

      if (!el.isEdits) {
        //todo we have to build two btn for the efit functionality

        let x = document.createElement('button'); //? this is cancel update btn.
        let y = document.createElement('button'); //? this is confirm update btn.

        //this is text inside the btn
        x.innerText = 'cancle';
        y.innerText = 'confirm';

        // this is class name
        x.classList = 'cancle-btn';
        y.classList = 'confirm-btn';
      }

      // here we are created btn for 'edit' & 'delete'
      let editBtn = document.createElement('button');
      editBtn.innerText = 'edits';
      editBtn.classList = 'edit-btn';

      editBtn.addEventListener('click', function () {
        let editToggel = arrStorage.map((sl) => {
          if (el.id === sl.id) {
            return {
              ...sl,
              isEdits: !sl.isEdits,
            };
          }
          return sl;
        });
        console.log(' editToggel:', editToggel);

        arrStorage = editToggel;
        localStorage.setItem('todos', JSON.stringify(arrStorage));
      });

      let deleteBtn = document.createElement('button');
      deleteBtn.innerText = 'delete';
      deleteBtn.classList = 'delete-btn';

      /* here we are deleteing the function of the data form ls */

      deleteBtn.addEventListener('click', function () {
        let finalData = arrStorage.filter((ml) => ml.id !== el.id);
        console.log(' finalData:', finalData);

        arrStorage = finalData;
        localStorage.setItem('todos', JSON.stringify(arrStorage));
        appendData();
      });

      div.append(id, text, editBtn, deleteBtn);
      dataInfo.append(div);
    });
};
