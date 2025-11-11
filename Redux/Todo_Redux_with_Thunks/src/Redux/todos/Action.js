import * as types from './ActionsTypes';

export const AddTodo = (payload) => {
  return {
    type: types.ADD_TODO_SUCCESS,
    payload: payload,
  };
};
