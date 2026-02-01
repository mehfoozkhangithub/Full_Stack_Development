import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../Reducer/Reducer';

export const ListTodos = () => {
  const { item } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <>
      {item.map((el) => {
        return (
          <div
            key={el.id}
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              width: 500,
            }}
          >
            <input type="checkbox" />
            <h3>{el.text}</h3>
            <button style={{ height: 'fitContent' }}>edit</button>
            <button
              onClick={() => handleDelete(el.id)}
              style={{ height: 'fitContent' }}
            >
              delete
            </button>
          </div>
        );
      })}
    </>
  );
};
