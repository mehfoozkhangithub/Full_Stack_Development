/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
import { TodosAdd } from './TodosAdd';

export const TodosList = () => {
  const dispatch = useDispatch();

  const { todos, isError, isLoading } = useSelector((state) => state.todo);
  console.log('🚀 ~ todos:', todos);

  const getApiCall = () => {
    dispatch(getRequestTodo());
    axios
      .get(API)
      .then((res) => dispatch(getSuccessTodo(res.data)))
      .catch(() => dispatch(getFailureTodo()));
  };

  /* const handleEdits = (id) => {
    dispatch(editTodoRequest());

    const updateEdit = todos
      .map((el) =>
        el.id === id
          ? {
              ...el,
              isEdits: !el.isEdits,
            }
          : null
      )
      .filter((el) => el != null);

    axios
      .patch(`${API}/${id}`, ...updateEdit)
      .then((res) => {
        dispatch(editTodoSuccess([id, res.data]));
      })
      .catch((err) => {
        dispatch(editTodoFailure());
      });
  };

  const handleDeletes = (id) => {
    dispatch(deleteTodoRequest());

    axios
      .delete(`${API}/${id}`)
      .then(() => dispatch(deleteTodoSuccess(id)))
      .catch((err) => dispatch(deleteTodoFailure(err)));
  }; */

  useEffect(() => {
    getApiCall();
  }, []);

  if (isLoading) {
    return <h5>loading....</h5>;
  }

  return (
    <>
      <h1>TodosList</h1>
      <TodosAdd getTodo={getApiCall} />
      {todos.length === 0 && <h1>No Data 🚫⛔</h1>}
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
              {el.isEdits && <h1>it's true</h1>}
              {/* <button onClick={() => handleEdits(el.id)}>edit</button>
              <button onClick={() => handleDeletes(el.id)}>delete</button> */}
            </div>
          );
        })}
    </>
  );
};
