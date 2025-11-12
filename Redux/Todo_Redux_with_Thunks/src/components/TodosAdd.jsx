import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import * as types from '../Redux/todos/ActionsTypes';
import { AddTodo, RequestTodo } from '../Redux/todos/Action';

export const TodosAdd = () => {
  const value = useSelector((state) => state.todo);
  console.log('🚀 ~ value:', value);
  const elementData = useRef(null);
  const dispatch = useDispatch();

  const handleinputVal = () => {
    dispatch(RequestTodo());
    const values = elementData.current.value;
    const obj = {
      id: Date.now(),
      text: values,
      isEdits: false,
      isCompleted: false,
    };
    dispatch(AddTodo(obj));
  };

  // if (isLoading) {
  //   return <h5>loading....</h5>;
  // }

  return (
    <>
      <input
        type="text"
        placeholder="enter the todos!!!"
        ref={elementData}
        autoComplete="off"
      />
      <input type="button" value="add" onClick={handleinputVal} />
    </>
  );
};
