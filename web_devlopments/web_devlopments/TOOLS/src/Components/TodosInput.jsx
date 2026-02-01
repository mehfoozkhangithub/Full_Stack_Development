import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { addTodo, fetchTodos } from '../Reducer/Actions';
import { useEffect } from 'react';

export const TodosInput = () => {
  const todoValueData = useRef();

  const dispatch = useDispatch();

  const handleAdd = () => {
    const valueText = todoValueData.current.value.trim();
    if (valueText == '') return;

    let todohttp = {
      text: valueText,
      isCompleted: false,
      isEdits: false,
    };
    // dispatch(addTodo(valueText));
    dispatch(addTodo(todohttp));
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  return (
    <>
      <input type="text" ref={todoValueData} />
      <button onClick={handleAdd}>add</button>
    </>
  );
};
