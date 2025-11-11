import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import * as types from '../Redux/todos/ActionsTypes';
import { AddTodo } from '../Redux/todos/Action';

export const TodosAdd = () => {
  const elementData = useRef(null);
  const dispatch = useDispatch();

  const handleinputVal = () => {
    dispatch({ type: types.ADD_TODO_REQUEST });
    const values = elementData.current.value;
    dispatch(AddTodo({ values }));
  };

  return (
    <>
      <input
        type="text"
        placeholder="enter the todos!!!"
        ref={elementData}
        autoComplete="off"
      />
      <input type="button" value="add" onClick={handleinputVal} />
    </>
  );
};
