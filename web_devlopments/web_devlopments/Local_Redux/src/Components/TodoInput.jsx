import React, { useRef } from 'react';

import { useDispatch } from 'react-redux';
import { addTodo } from '../Reducer/Todos/Action';
import { getLogin } from '../Reducer/Auth/Action';

export const TodoInput = () => {
  const dispatch = useDispatch();
  const inputData = useRef(null);

  const handleAdd = () => {
    const valueText = inputData.current.value;
    dispatch(addTodo(valueText));
  };

  const handleLogout = () => {
    dispatch(getLogin());
  };

  return (
    <>
      <button style={{ display: 'block' }} onClick={handleLogout}>
        logout
      </button>
      <h1>Todo 📕</h1>
      <input type="text" ref={inputData} />
      <button onClick={handleAdd}>add</button>
    </>
  );
};
