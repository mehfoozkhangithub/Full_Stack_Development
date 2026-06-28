import React from 'react';

export const Todo_List = ({ props }) => {
  //   console.log(`🚀 ~ props:list child`, props);

  const [updatedText, setUpdatedText] = React.useState('');

  const { todo, setTodo } = props;
  console.log(`🚀 ~ todo:`, todo);

  //edit
  const handleEdit = (id) => {
    const editData = todo.map((el) =>
      el.id === id ? { ...el, isEdits: true } : el,
    );
    setTodo(editData);
  };

  // cancel
  const handleCancel = (id) => {
    const cancelData = todo.map((el) =>
      el.id === id ? { ...el, isEdits: false } : el,
    );
    setTodo(cancelData);
  };

  // Confirm
  const handleConfirm = (id) => {
    const cancelData = todo.map((el) =>
      el.id === id ? { ...el, text: updatedText, isEdits: false } : el,
    );
    setTodo(cancelData);
  };

  //delete
  const handleDelete = (id) => {
    const deleteTodoData = todo.filter((el) => el.id !== id);
    setTodo(deleteTodoData);
  };
  return (
    <>
      {todo &&
        todo.map((el) => (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              width: '50%',
              margin: ' 0.5rem auto',
            }}
            key={el.id}
          >
            <input type="checkbox" />
            {el.isEdits ? (
              <input
                type="text"
                defaultValue={el.text}
                onChange={(e) => setUpdatedText(e.target.value)}
              />
            ) : (
              <h1>{el.text}</h1>
            )}

            {el.isEdits ? (
              <>
                <button onClick={() => handleCancel(el.id)}>cancel</button>
                <button onClick={() => handleConfirm(el.id)}>confirm</button>
              </>
            ) : (
              <>
                <button onClick={() => handleEdit(el.id)}>edit</button>
                <button onClick={() => handleDelete(el.id)}>delete</button>
              </>
            )}
          </div>
        ))}
    </>
  );
};

// tushar@123
