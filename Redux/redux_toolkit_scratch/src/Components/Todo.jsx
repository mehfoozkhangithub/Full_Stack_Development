import React, { useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectComponentsData2 } from '../Reducer/Selector';
import { addTodo } from '../Reducer/Reducer';

export const Todo = () => {
  const inputValue = useRef(null);
  const dispatch = useDispatch();
  const todo = useSelector(selectComponentsData2);
  console.log('🚀 ~ todo:', todo);

  const handleAdd = () => {
    const value = inputValue.current.value;
    dispatch(addTodo(value));
  };

  return (
    <>
      <h1>Todo</h1>
      <input type="text" ref={inputValue} />
      <button onClick={handleAdd}>add</button>
      <div className="main">
        {todo.value?.map((el) => {
          return (
            <div key={el.id}>
              <input type="checkbox" />
              <p>{el.text}</p>
              <button>edit</button>
              <button>delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
};
