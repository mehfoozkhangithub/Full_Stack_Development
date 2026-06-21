import React from 'react';

export const Todo_List = ({ props }) => {
  //   console.log(`🚀 ~ props:list child`, props);
  const { todo, setTodo } = props;

  const handleDelete = (id) => {
    console.log(`🚀 ~ id:`, id);

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
            }}
            key={el.id}
          >
            <input type="checkbox" />
            <h1>{el.text}</h1>
            <button>edit</button>
            <button onClick={() => handleDelete(el.id)}>delete</button>
          </div>
        ))}
    </>
  );
};
