import axios from 'axios';
const API = import.meta.env.VITE_API_RAMU_KAKA;

import * as types from './ActionsTypes';

export const getRequestTodo = () => {
  return {
    type: types.GET_TODO_REQUEST,
  };
};

export const getSuccessTodo = (payload) => {
  return {
    type: types.GET_TODO_SUCCESS,
    payload: payload,
  };
};

export const getFailureTodo = (payload) => {
  return {
    type: types.GET_TODO_FAILURE,
    payload: payload,
  };
};

// # here i am doing the add into api

export const addTodoRequest = () => {
  return {
    type: types.ADD_TODO_REQUEST,
  };
};

export const addTodoFailure = () => {
  return {
    type: types.ADD_TODO_FAILURE,
  };
};

export const addTodoSuccess = (payload) => {
  return {
    type: types.ADD_TODO_SUCCESS,
    payload: payload,
  };
};

//& edit k liye banao .....

export const editTodoRequest = () => {
  return {
    type: types.EDITS_TODO_REQUEST,
  };
};

export const editTodoSuccess = (payload) => {
  return {
    type: types.EDITS_TODO_SUCCESS,
    payload: { id: payload[0], data: payload[1] },
  };
};

export const editTodoFailure = () => {
  return {
    type: types.EDITS_TODO_FAILURE,
  };
};

//! delete k liye banao .....

export const deleteTodoRequest = () => {
  return {
    type: types.DELETE_TODO_REQUEST,
  };
};

export const deleteTodoSuccess = (payload) => {
  return {
    type: types.DELETE_TODO_SUCCESS,
    payload: payload,
  };
};

export const deleteTodoFailure = () => {
  return {
    type: types.DELETE_TODO_FAILURE,
  };
};

export const getApiCall = (dispatch) => {
  dispatch(getRequestTodo());
  axios
    .get(API)
    .then((res) => dispatch(getSuccessTodo(res.data)))
    .catch(() => dispatch(getFailureTodo()));
};

export const addTodo = ({ dispatch, elementData }) => {
  const values = elementData.current.value;

  if (values.trim() === '') {
    return;
  }

  const obj = {
    id: Date.now(),
    text: values,
    isEdits: false,
    isCompleted: false,
  };

  dispatch(addTodoRequest());
  return axios
    .post(API, obj)
    .then(() => {
      dispatch(addTodoSuccess());
    })
    .catch((err) => dispatch(addTodoFailure(err)));
};
