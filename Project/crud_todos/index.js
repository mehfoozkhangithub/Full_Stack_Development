let arrStorage = JSON.parse(localStorage.getItem('todos')) || [];

const myTodos = () => {
  const todoVal = document.querySelector('#todos').value;
  if (todoVal.length === 0) {
    /*  todoVal.innerHTML =
      "<p>You have empty todo text.. please fill the text for todos</p>"; */
    alert('please fill the text...');
    return;
  }

  // document's { (set) }
  let data = {
    id: Math.random().toString(36).substring(2, 15),
    todoText: todoVal,
    isCompleted: false,
    isEdits: false,
  };

  arrStorage.push(data);
  localStorage.setItem('todos', JSON.stringify(arrStorage));
  appendData();
  alert('your data has been add in to ls...');
  document.querySelector('#todos').value = '';
};
const appendData = () => {
  const dataInfo = document.querySelector('#dataInfo');

  dataInfo.innerHTML = '';

  if (arrStorage.length === 0) {
    let notify = document.createElement('h1');
    notify.innerText = "you don't have data....";
    dataInfo.append(notify);
  }

  arrStorage &&
    arrStorage.forEach((el, i) => {
      let div = document.createElement('div');
      let id = document.createElement('p');
      let text = document.createElement('p');

      div.className = 'dataRow';

      id.innerText = el.id;
      text.innerText = el.todoText;
      text.style.display = el.isEdits ? 'none' : 'inline-block';

      //todo we have to build two btn for the efit functionality and togle the input text apper while isEdit is true

      let input = document.createElement('input'); //? here we have to swap the text od p into input text with the current value.
      let x = document.createElement('button'); //? this is cancel update btn.
      let y = document.createElement('button'); //? this is confirm update btn.

      //this is text inside the btn
      x.innerText = 'cancle';
      y.innerText = 'confirm';

      // this is class name
      x.classList = 'delete-btn';
      y.classList = 'edit-btn';
      input.value = el.todoText;

      //! if we got true on edits so we so we aplly the diff btn

      input.style.display = el.isEdits ? 'block' : 'none';
      x.style.display = el.isEdits ? 'block' : 'none';
      y.style.display = el.isEdits ? 'block' : 'none';

      //@ functionality of the cancle and confirm btn

      x.addEventListener('click', function () {
        let editToggel = arrStorage.map((sl) => {
          if (el.id === sl.id) {
            return {
              ...sl,
              isEdits: !sl.isEdits,
            };
          }
          return sl;
        });
        arrStorage = editToggel;
        localStorage.setItem('todos', JSON.stringify(arrStorage));
        appendData();
      });

      y.addEventListener('click', function () {
        let updatedVal = input.value;

        let editToggel = arrStorage.map((sl) => {
          if (el.id === sl.id) {
            return {
              ...sl,
              todoText: updatedVal,
              isEdits: !sl.isEdits,
            };
          }
          return sl;
        });
        arrStorage = editToggel;
        localStorage.setItem('todos', JSON.stringify(arrStorage));
        appendData();
      });

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
        arrStorage = editToggel;
        localStorage.setItem('todos', JSON.stringify(arrStorage));
        appendData();
      });

      let deleteBtn = document.createElement('button');
      deleteBtn.innerText = 'delete';
      deleteBtn.classList = 'delete-btn';

      /* here we are deleteing the function of the data form ls */

      deleteBtn.addEventListener('click', function () {
        let finalData = arrStorage.filter((ml) => ml.id !== el.id);
        // console.log(' finalData:', finalData);

        arrStorage = finalData;
        localStorage.setItem('todos', JSON.stringify(arrStorage));
        appendData();
      });

      //# if we have isEdits true we have to disable the both btn

      editBtn.style.display = el.isEdits ? 'none' : 'block';
      deleteBtn.style.display = el.isEdits ? 'none' : 'block';

      div.append(id, text, input, x, y, editBtn, deleteBtn);
      dataInfo.append(div);
    });
};

if (arrStorage.length >= 0) {
  appendData();
}
