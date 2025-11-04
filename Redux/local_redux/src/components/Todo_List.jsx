import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DELETE_TODOS } from '../Redux/todos/Action';

export const Todo_List = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todo.todos);

  // const handleEdits=()=>{
  //   dispatch({type:,payload:id})
  // }

  const handleDelete = (id) => {
    dispatch({ type: DELETE_TODOS, payload: id });
  };

  return (
    <>
      <h3>Todo_List</h3>
      {data.map((el) => (
        <div key={el.id}>
          <p>{el.text}</p>
          {/* <button onClick={handleEdits}>edit</button> */}
          <button onClick={() => handleDelete(el.id)}>delete</button>
        </div>
      ))}
    </>
  );
};
