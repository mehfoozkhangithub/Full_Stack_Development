/* eslint-disable no-unused-vars */
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

const API = import.meta.env.VITE_API_RAMU_KAKA;

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

export const TodosAdd = ({ getTodo }) => {
  const elementData = useRef(null);
  const dispatch = useDispatch();

  const addTodo = () => {
    const values = elementData.current.value;

    const obj = {
      id: Date.now(),
      text: values,
      isEdits: false,
      isCompleted: false,
    };

    dispatch(addTodoRequest());
    return axios
      .post(API, obj)
      .then((res) => {
        dispatch(addTodoSuccess(res.data));
      })
      .catch((err) => dispatch(addTodoFailure(err)));
  };

  const handleInputVal = () => {
    addTodo().then(() => {
      getTodo();
    });
  };
  return (
    <>
      <input
        type="text"
        placeholder="enter the todos!!!"
        ref={elementData}
        autoComplete="off"
      />
      <input type="button" value="add" onClick={handleInputVal} />
    </>
  );
};
