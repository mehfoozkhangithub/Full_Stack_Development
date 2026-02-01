import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { todo } from '../Reducer/Reducer';
import * as types from '../Reducer/Actions';

export const TodoList = () => {
  const todos = useSelector(todo);
  console.log('🚀 ~ todos:', todos);
  const dispatch = useDispatch();

  const handleEdit = (id) => {
    // dispatch(types.updateTodos({id}))
  };
  const handleDelete = (id) => {
    dispatch(types.deleteTodos(id));
  };

  return (
    <>
      <h1>todo list</h1>

      {todos?.map((el) => {
        return (
          <div
            key={el.id}
            style={{
              display: 'flex',
              border: '2px solid #FFFF00',
              margin: '15px  auto',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <input type="checkbox" />
            <h4>{el.id}</h4>
            <p>{!el.text ? 'noValue' : el.text}</p>
            <button onClick={() => handleEdit(el.id)}>edit</button>
            <button onClick={() => handleDelete(el.id)}>delete</button>
          </div>
        );
      })}
    </>
  );
};
