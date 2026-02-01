import * as types from '../Redux/actionTypes';
import axios from 'axios';

const getTodosRequest = () => {
  return { type: types.GET_TODOS_REQUEST };
};

const getTodosFailure = (payload) => {
  return { type: types.GET_TODOS_FAILURE, payload };
};

const getTodosSuccess = (payload) => {
  return { type: types.GET_TODOS_SUCCESS, payload };
};

const getApi = (dispatch) => {
  dispatch(getTodosRequest());
  axios
    .get('http://localhost:8080/todo')
    .then((res) => dispatch(getTodosSuccess(res.data)))
    .catch((err) => {
      dispatch(getTodosFailure());
      console.error(err);
    });
};

const addTodosRequest = () => {
  return { type: types.ADD_TODOS_REQUEST };
};

const addTodosFailure = (payload) => {
  return { type: types.ADD_TODOS_FAILURE, payload };
};

const addTodosSuccess = (payload) => {
  return { type: types.ADD_TODOS_SUCCESS, payload };
};

export {
  getTodosRequest,
  getTodosSuccess,
  getTodosFailure,
  getApi,
  addTodosRequest,
  addTodosFailure,
  addTodosSuccess,
};
