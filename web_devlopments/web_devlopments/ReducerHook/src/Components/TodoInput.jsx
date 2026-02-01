import React from 'react';

import { reducer } from '../Reducer/Reducer';
import { initialValue } from './../Reducer/Store';
import {
  ADD_TODO_ITEMS,
  ERROR_TODO_ITEMS,
  LOADING_TODO_ITEMS,
} from '../Reducer/Action';
import { TodoList } from './TodoList';

export const TodoInput = () => {
  const todoText = React.useRef(null);
  const [state, dispatch] = React.useReducer(reducer, initialValue);
  console.log('🚀 ~ state:', state);

  const handleAddTodo = () => {
    const value = todoText.current.value.trim();
    if (value === '') {
      dispatch({ type: ERROR_TODO_ITEMS });
      return;
    }

    dispatch({ type: LOADING_TODO_ITEMS });

    setTimeout(() => {
      dispatch({ type: ADD_TODO_ITEMS, payload: value });
    }, 1000);

    todoText.current.value = '';
  };

  if (state.isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <input ref={todoText} type="text" placeholder="enter your task!!!" />
      <button onClick={handleAddTodo}>add task</button>
      {state.isError ? (
        <h1>something went wrong....</h1>
      ) : (
        <TodoList value={{ state, dispatch }} />
      )}
    </>
  );
};
