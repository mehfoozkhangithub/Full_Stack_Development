let collectionOfLS = JSON.parse(localStorage.getItem('todos-ls')) || [];

function myTodos() {
  const todoValue = document.querySelector('#todoVal').value;

  let userData = {
    //objct litral
    id: Math.random().toString(36).substring(2, 15),
    text: todoValue,
    isEdits: false,
    isComplete: false,
  };

  collectionOfLS.push(userData);

  localStorage.setItem('todos-ls', JSON.stringify(collectionOfLS));
  appendData();

  document.querySelector('#todoVal').value = '';
}

function appendData() {
  const main_div_append = document.querySelector('#dataInfo');

  main_div_append.innerHTML = '';

  collectionOfLS?.forEach((element) => {
    const div = document.createElement('div');
    const id = document.createElement('p');
    const texts = document.createElement('p');
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    id.innerText = element.id;
    texts.innerText = element.text;

    editBtn.innerText = 'edits';
    deleteBtn.innerText = 'delete';

    // editBtn.addEventListener('click',function(){})

    deleteBtn.addEventListener('click', function () {
      let updateDeleteData = collectionOfLS.filter((jl) => {
        return element.id !== jl.id;
      });

      collectionOfLS = updateDeleteData;
      localStorage.setItem('todos-ls', JSON.stringify(collectionOfLS));
      appendData();
    });

    div.append(id, texts, editBtn, deleteBtn);
    main_div_append.append(div);
  });
}

if (collectionOfLS.length > 0) {
  appendData();
} else {
  alert('No Data!!!');
}
