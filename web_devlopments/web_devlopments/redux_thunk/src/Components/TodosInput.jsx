import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';

import {
  getApi,
  addTodosRequest,
  addTodosFailure,
  addTodosSuccess,
} from '../Redux/action';

export const TodosInput = () => {
  const inputValue = React.useRef();

  const dispatch = useDispatch();

  const addTodos = () => {
    dispatch(addTodosRequest());
    if (inputValue && inputValue.current.value.trim() !== '') {
      let data = {
        title: inputValue.current.value,
        status: false,
      };

      return axios
        .post('http://localhost:8080/todo', data)
        .then((res) => {
          dispatch(addTodosSuccess());
          return res;
        })
        .catch((err) => {
          console.log(err);
          dispatch(addTodosFailure());
        });
    }
  };

  const handleAdd = () => {
    addTodos().then(() => dispatch(getApi));
  };

  return (
    <>
      <input type="text" ref={inputValue} />
      <button onClick={handleAdd}>add</button>
    </>
  );
};
