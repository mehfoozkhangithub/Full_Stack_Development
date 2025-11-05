import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DELETE_TODOS, EDITS_TODOS } from '../Redux/todos/Action';

export const Todo_List = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todo.todos);
  console.log('🚀 ~ data:', data);

  const handleDelete = (id) => {
    dispatch({ type: DELETE_TODOS, payload: id });
  };
  const handleEdits = (id) => {
    dispatch({ type: EDITS_TODOS, payload: id });
  };

  return (
    <>
      <h3>Todo_List</h3>
      {data.map((el) => (
        <div key={el.id}>
          <p>{el.text}</p>
          <button onClick={() => handleEdits(el.id)}>edit</button>
          <button onClick={() => handleDelete(el.id)}>delete</button>
        </div>
      ))}
    </>
  );
};
