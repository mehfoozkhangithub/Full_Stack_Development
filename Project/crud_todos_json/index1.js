const api = `https://api-database-1.onrender.com/ToDo`;

async function myTodos() {
  const value = document.querySelector('#todos').value.trim();
  if (!value) return;

  const objectData = {
    id: Math.random().toString(36).substring(2, 15),
    text: value,
    isEdits: false,
    isCompleted: false,
  };

  try {
    const res = await fetch(api, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(objectData),
    });
    const newTodo = await res.json();
    appendOneTodo(newTodo);
    document.querySelector('#todos').value = '';
  } catch (error) {
    console.error(error);
  }
}

async function updateTodo(id, updateData) {
  try {
    await fetch(`${api}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(updateData),
    });
    const res = await fetch(`${api}/${id}`);
    const updated = await res.json();

    const oldDiv = document.querySelector(`[data-id="${id}"]`);
    if (oldDiv) oldDiv.remove();
    appendOneTodo(updated);
  } catch (error) {
    console.error(error);
  }
}

async function deleteTodo(id, div) {
  try {
    await fetch(`${api}/${id}`, {
      method: 'DELETE',
    });
    div.remove();
  } catch (error) {
    console.error(error);
  }
}

function appendOneTodo(el) {
  const main_div = document.querySelector('#dataInfo');

  const div = document.createElement('div');
  div.className = 'dataRow';
  div.dataset.id = el.id;

  const id = document.createElement('p');
  const text = document.createElement('p');
  const input = document.createElement('input');
  const checkBox = document.createElement('input');
  const cancelBtn = document.createElement('button');
  const confirmBtn = document.createElement('button');
  const editBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');

  id.innerText = el.id;
  text.innerText = el.text;
  input.value = el.text;

  checkBox.type = 'checkbox';
  checkBox.checked = el.isCompleted;

  input.type = 'text';
  input.name = 'editInput';

  cancelBtn.innerText = 'cancel';
  confirmBtn.innerText = 'confirm';
  cancelBtn.className = 'delete-btn';
  confirmBtn.className = 'edit-btn';

  editBtn.innerText = 'edit';
  deleteBtn.innerText = 'delete';
  editBtn.className = 'edit-btn';
  deleteBtn.className = 'delete-btn';

  // UI toggle logic
  text.style.display = el.isEdits ? 'none' : 'inline-block';
  input.style.display = el.isEdits ? 'block' : 'none';
  cancelBtn.style.display = el.isEdits ? 'block' : 'none';
  confirmBtn.style.display = el.isEdits ? 'block' : 'none';
  editBtn.style.display = el.isEdits ? 'none' : 'block';
  deleteBtn.style.display = el.isEdits ? 'none' : 'block';

  // Disable controls if completed
  if (el.isCompleted) {
    [id, text, editBtn, deleteBtn].forEach(
      (ele) => (ele.style.pointerEvents = 'none')
    );
    div.style.opacity = '0.6';
    div.style.backgroundColor = '#f0f0f0';
    div.style.cursor = 'not-allowed';
  }

  // Event Listeners
  editBtn.onclick = () => updateTodo(el.id, { isEdits: true });
  cancelBtn.onclick = () => updateTodo(el.id, { isEdits: false });
  confirmBtn.onclick = () =>
    updateTodo(el.id, { text: input.value, isEdits: false });
  deleteBtn.onclick = () => deleteTodo(el.id, div);
  checkBox.onclick = () => updateTodo(el.id, { isCompleted: !el.isCompleted });

  div.append(
    checkBox,
    id,
    text,
    input,
    cancelBtn,
    confirmBtn,
    editBtn,
    deleteBtn
  );
  main_div.append(div);
}

async function appendData() {
  try {
    const res = await fetch(api);
    const data = await res.json();
    const main_div = document.querySelector('#dataInfo');
    main_div.innerHTML = '';
    data.forEach(appendOneTodo);
  } catch (error) {
    console.error(error);
  }
}

appendData();
// this is the code of the chat-gpt for ompimisation but not working fluant on web page...
