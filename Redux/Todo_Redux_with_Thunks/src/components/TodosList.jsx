/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
  getFailureTodo,
  getRequestTodo,
  getSuccessTodo,
  editTodoRequest,
  editTodoSuccess,
  editTodoFailure,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoFailure,
} from '../Redux/todos/Action';

const API = import.meta.env.VITE_API_RAMU_KAKA;

export const TodosList = () => {
  const dispatch = useDispatch();

  const { todos, isError, isLoading } = useSelector(
    (state) => state.todo,
    shallowEqual
  );
  console.log('🚀 ~ todos:', todos);

  const getApiCall = () => {
    dispatch(getRequestTodo());

    axios
      .get(API)
      .then((res) => dispatch(getSuccessTodo(res.data)))
      .catch(() => dispatch(getFailureTodo()));
  };

  const handleEdits = (id) => {
    dispatch(editTodoRequest());

    axios
      .patch(API)
      .then((res) => {
        console.log('dataEdit', res.data);
        dispatch(editTodoSuccess(res.data));
      })
      .catch((err) => {
        console.log('err', err);
        dispatch(editTodoFailure());
      });
  };

  const handleDeletes = (id) => {
    dispatch(deleteTodoRequest());

    axios
      .delete(API)
      .then((res) => dispatch(deleteTodoSuccess(res.data)))
      .catch((err) => dispatch(deleteTodoFailure(err)));
  };

  useEffect(() => {
    getApiCall();
  }, []);

  if (isLoading) {
    return <h5>loading....</h5>;
  }

  return (
    <>
      <h1>TodosList</h1>
      {isError && <h1>something went wrong...❌❗ </h1>}
      {todos.length > 0 &&
        todos.map((el) => {
          return (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
              }}
              key={el.id}
            >
              <input type="checkbox" />
              <h1>{el.text}</h1>
              {/* <button>edit</button> */}
              <button onClick={() => handleEdits(el.id)}>edit</button>
              <button onClick={() => handleDeletes(el.id)}>delete</button>
            </div>
          );
        })}
    </>
  );
};
