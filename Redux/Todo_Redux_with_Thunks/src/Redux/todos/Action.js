import * as types from './ActionsTypes';

const API = import.meta.env.VITE_API_REHAMAT;

export const getRequestTodo = () => {
  return {
    type: types.GET_TODO_REQUEST,
  };
};
export const getSuccessTodo = (payload) => {
  return {
    type: types.GET_TODO_SUCCESS,
    payload,
  };
};
export const getFailureTodo = () => {
  return {
    type: types.GET_TODO_FAILURE,
  };
};

export const RequestTodo = () => {
  return { type: types.ADD_TODO_REQUEST };
};
export const FailureTodo = () => {
  return { type: types.ADD_TODO_FAILURE };
};

export const AddTodo = () => {};

export const EditsTodo = (payload) => {
  return {
    type: types.ADD_TODO_SUCCESS,
    payload: payload,
  };
};
