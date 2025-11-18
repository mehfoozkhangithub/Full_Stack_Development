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

// ! here i am doing the add into api

export const addTodoRequest = () => {
  return { type: types.ADD_TODO_REQUEST };
};

export const addTodoFailure = (payload) => {
  return { type: types.ADD_TODO_FAILURE, payload: payload };
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
    payload: payload,
  };
};

export const editTodoFailure = (payload) => {
  return {
    type: types.EDITS_TODO_FAILURE,
    payload: payload,
  };
};
