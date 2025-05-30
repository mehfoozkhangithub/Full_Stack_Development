const api = `https://api-database-1.onrender.com/ToDo`;
async function myTodos() {
  const value = document.querySelector('#todos').value;

  let objectData = {
    id: Math.random().toString(36).substring(2, 15),
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

    let editBtn = document.createElement('button');
    let deleteBtn = document.createElement('button');

    let x = document.createElement('button'); //? this is cancel update btn.
    let y = document.createElement('button'); //? this is confirm update btn.

    id.innerText = el.id;
    text.innerText = el.text;

    text.style.display = el.isEdits ? 'none' : 'inline-block';

    x.innerText = 'cancle';
    y.innerText = 'confirm';

    // this is class name
    x.classList = 'delete-btn';
    y.classList = 'edit-btn';
    input.value = el.text;

    input.style.display = el.isEdits ? 'block' : 'none';
    x.style.display = el.isEdits ? 'block' : 'none';
    y.style.display = el.isEdits ? 'block' : 'none';

    editBtn.innerText = 'edits';
    deleteBtn.innerText = 'delete';

    editBtn.addEventListener('click', async function () {
      try {
        const res = await fetch(`${api}/${el.id}`, {
          method: 'PATCH',
          body: JSON.stringify({ isEdits: !el.isEdits }),
          headers: {
            'Content-type': 'application/json',
          },
        });
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
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    });

    editBtn.style.display = el.isEdits ? 'none' : 'block';
    deleteBtn.style.display = el.isEdits ? 'none' : 'block';

    div.append(id, text, editBtn, deleteBtn);
    main_div.append(div);
  });
}
appendData();
