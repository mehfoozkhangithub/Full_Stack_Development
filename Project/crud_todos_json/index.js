const api = `https://api-database-1.onrender.com/ToDo`;
async function myTodos() {
  let value = document.querySelector('#todos').value;

  let objectData = {
    id: crypto.randomUUID(),
    text: value,
    isEdits: false,
    isCompleted: false,
  };

  try {
    const res = await fetch(api, {
      method: 'POST',
      body: JSON.stringify(objectData),
      headers: {
        'Content-type': 'application/json',
      },
    });
    appendData();
    document.querySelector('#todos').value = '';
  } catch (error) {
    console.log(error);
  }
}

async function appendData() {
  let data;
  try {
    const res = await fetch(api);
    data = await res.json();
  } catch (error) {
    console.log(error);
  }
  console.log(' data:', data);

  const main_div = document.querySelector('#dataInfo');

  main_div.innerHTML = '';

  data.forEach((el) => {
    let div = document.createElement('div');
    let id = document.createElement('p');
    let text = document.createElement('p');
    let input = document.createElement('input'); //? here we have to swap the text od p into input text with the current value.
    let checkBox = document.createElement('input');

    checkBox.type = 'checkbox';
    checkBox.name = 'checkbox';

    let editBtn = document.createElement('button');
    let deleteBtn = document.createElement('button');

    checkBox.checked = el.isCompleted; // Check or uncheck based on API
    if (el.isCompleted) {
      id.style.pointerEvents = 'none'; // Disable all mouse events
      text.style.pointerEvents = 'none'; // Disable all mouse events
      editBtn.style.pointerEvents = 'none'; // Disable all mouse events
      deleteBtn.style.pointerEvents = 'none'; // Disable all mouse events
      div.style.opacity = '0.6'; // Make it look faded
      div.style.backgroundColor = '#f0f0f0'; // Optional: visual cue
      div.style.cursor = 'not-allowed';
    }

    let x = document.createElement('button'); //? this is cancel update btn.
    let y = document.createElement('button'); //? this is confirm update btn.

    id.classList.add('id');
    id.innerText = el.id;
    text.innerText = el.text;

    div.className = 'dataRow';

    console.log(el.isEdits);

    text.style.display = el.isEdits ? 'none' : 'inline-block';

    x.innerText = 'cancle';
    y.innerText = 'confirm';

    // this is class name
    x.classList = 'delete-btn';
    y.classList = 'edit-btn';
    input.value = el.text;

    input.type = 'text';
    input.name = 'editInput';

    input.style.display = el.isEdits ? 'block' : 'none';
    x.style.display = el.isEdits ? 'block' : 'none';
    y.style.display = el.isEdits ? 'block' : 'none';

    editBtn.innerText = 'edits';
    deleteBtn.innerText = 'delete';

    editBtn.classList = 'edit-btn';
    deleteBtn.classList = 'delete-btn';

    editBtn.addEventListener('click', async function () {
      try {
        const res = await fetch(`${api}/${el.id}`, {
          method: 'PATCH',
          body: JSON.stringify({ isEdits: !el.isEdits }),
          headers: {
            'Content-type': 'application/json',
          },
        });
        appendData();
      } catch (error) {
        console.log(error);
      }
    });

    deleteBtn.addEventListener('click', async function () {
      try {
        const res = await fetch(`${api}/${el.id}`, {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json',
          },
        });
        // window.location.reload();
        appendData();
      } catch (error) {
        console.log(error);
      }
    });

    editBtn.style.display = el.isEdits ? 'none' : 'block';
    deleteBtn.style.display = el.isEdits ? 'none' : 'block';

    // @ on click x and y we have to trigger  the ecent of the...

    x.addEventListener('click', async function () {
      try {
        const res = await fetch(`${api}/${el.id}`, {
          method: 'PATCH',
          body: JSON.stringify({ isEdits: !el.isEdits }),
          headers: {
            'Content-type': 'application/json',
          },
        });
        appendData();
      } catch (error) {
        console.log(error);
      }
    });

    y.addEventListener('click', async function () {
      const editsData = {
        text: input.value,
        isEdits: !el.isEdits,
      };
      try {
        const res = await fetch(`${api}/${el.id}`, {
          method: 'PATCH',
          body: JSON.stringify(editsData),
          headers: {
            'Content-type': 'application/json',
          },
        });
        appendData();
      } catch (error) {
        console.log(error);
      }
    });

    //# toggle the isCompleted.

    checkBox.addEventListener('click', async function () {
      try {
        const res = await fetch(`${api}/${el.id}`, {
          method: 'PATCH',
          body: JSON.stringify({ isCompleted: !el.isCompleted }),
          headers: {
            'Content-type': 'application/json',
          },
        });

        appendData();
      } catch (error) {
        console.log(error);
      }
    });

    div.append(checkBox, id, text, input, x, y, editBtn, deleteBtn);
    main_div.append(div);
  });
}
appendData();
