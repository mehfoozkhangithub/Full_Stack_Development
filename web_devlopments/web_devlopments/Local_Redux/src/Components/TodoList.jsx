import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import * as types from '../Reducer/Todos/Action';

export const TodoList = () => {
  const dispatch = useDispatch();
  const [updateText, setUpdateText] = useState('');

  const value = useSelector((xyz) => {
    return xyz.todos.todo;
  });
  console.log('🚀 ~ value:', value);

  const { token } = useSelector((xyz) => {
    return xyz.auths;
  });
  console.log('🚀 ~ token:', token);

  const handleEdit = (id) => {
    dispatch({ type: types.EDITTODOS, payload: id });
  };

  const handleDelete = (id) => {
    dispatch({ type: types.DELETETODOS, payload: id });
  };

  const handleCancel = (id) => {
    dispatch({ type: types.CANCELTODOS, payload: id });
  };

  const handleConfirm = (id) => {
    dispatch({
      type: types.CONFIRMTODOS,
      payload: { id: id, text: updateText },
    });
  };

  return (
    <>
      <h1
        style={{
          color: 'tomato',
          fontSize: '24px',
          fontWeight: 'bolder',
        }}
      >
        {token}
      </h1>
      <h1>TodoList</h1>

      {value?.map((el) => {
        return (
          <div
            key={el.id}
            style={{
              width: '50%',
              margin: '10px auto',
              display: 'flex',
              justifyContent: 'space-around',
            }}
          >
            <input type="checkbox" />
            <h3>{el.id}</h3>
            {el.isEdit ? (
              <input
                defaultValue={el.text}
                type="text"
                onChange={(e) => setUpdateText(e.target.value)}
              />
            ) : (
              <p>{el.text}</p>
            )}
            {el.isEdit ? (
              <>
                <button onClick={() => handleCancel(el.id)}>cancel</button>
                <button onClick={() => handleConfirm(el.id)}>confirm</button>
              </>
            ) : (
              <>
                <button onClick={() => handleEdit(el.id)}>edit</button>
                <button onClick={() => handleDelete(el.id)}>delete</button>
              </>
            )}
          </div>
        );
      })}
    </>
  );
};
