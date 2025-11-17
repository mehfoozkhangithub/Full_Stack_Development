import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  getFailureTodo,
  getRequestTodo,
  getSuccessTodo,
} from '../Redux/todos/Action';

const API = import.meta.env.VITE_API_RAMU_KAKA;

export const TodosList = () => {
  const dispatch = useDispatch();

  const getApiCall = () => {
    dispatch(getRequestTodo());
    axios
      .get(API)
      .then((res) => dispatch(getSuccessTodo(res.data)))
      .catch((err) => dispatch(getFailureTodo(err)));
  };

  useEffect(() => {
    console.log('i am invoked');
    getApiCall;
  }, []);

  return (
    <>
      <h1>TodosList</h1>
    </>
  );
};
