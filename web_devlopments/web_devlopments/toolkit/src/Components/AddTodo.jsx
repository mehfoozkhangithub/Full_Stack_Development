import React, { useRef } from 'react';

import { addTodos } from '../Reducer/Reducer';
import { useDispatch } from 'react-redux';

export const AddTodo = () => {
  const dispatch = useDispatch();
  const inputValue = useRef(null);

  const handleAdd = () => {
    const value = inputValue.current.value;
    dispatch(addTodos(value));
  };

  return (
    <>
      <input ref={inputValue} type="text" placeholder="enter the todo..." />
      <button onClick={handleAdd}>add</button>
    </>
  );
};
