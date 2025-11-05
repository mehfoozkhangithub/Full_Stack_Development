import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_TODOS } from '../Redux/todos/Action';
import { Todo_List } from './Todo_List';

export const Todo_Add = () => {
  const dataValue = useRef(null);
  const dispatch = useDispatch();

  const addTodos = () => {
    let values = dataValue.current.value;

    let todosObj = {
      id: Date.now(),
      text: values,
      isEdit: false,
      isComplete: false,
    };

    dispatch({ type: ADD_TODOS, payload: todosObj });
  };

  return (
    <>
      <h1>Todo_Add</h1>

      <input type="text" placeholder="enter todos...." ref={dataValue} />
      <button onClick={addTodos}>add</button>
    </>
  );
};
