/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const API = import.meta.env.VITE_API_RAMU_KAKA;
console.log('🚀 ~ API:', API);

// import * as types from '../Redux/todos/ActionsTypes';
import axios from 'axios';
import {
  addTodoRequest,
  addTodoFailure,
  addTodoSuccess,
  getFailureTodo,
  getSuccessTodo,
  getRequestTodo,
} from '../Redux/todos/Action';
import { TodosList } from './TodosList';

export const TodosAdd = () => {
  const value = useSelector((state) => state.todo);
  console.log('🚀 ~ value:', value);
  const elementData = useRef(null);
  const dispatch = useDispatch();

  const handleinputVal = () => {
    const values = elementData.current.value;

    const obj = {
      id: Date.now(),
      text: values,
      isEdits: false,
      isCompleted: false,
    };
    dispatch(addTodoRequest());
    axios
      .post(API, obj)
      .then((res) => dispatch(addTodoSuccess(res.data)))
      .catch((err) => dispatch(addTodoFailure(err)));
  };

  if (value.isLoading) {
    return <h5>loading....</h5>;
  }

  return (
    <>
      <input
        type="text"
        placeholder="enter the todos!!!"
        ref={elementData}
        autoComplete="off"
      />
      <input type="button" value="add" onClick={handleinputVal} />
      <TodosList />
    </>
  );
};
