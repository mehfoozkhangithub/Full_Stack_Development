import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { Todo_Add } from '../components/Todo_Add';
import { Todo_List } from '../components/Todo_List';
import { REMOVE_TOKEN } from '../Redux/auth/actions';

export const Home = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const token = useSelector((state) => state.auth.token);

  const handleDeleteToken = () => {
    dispatch({ type: REMOVE_TOKEN });
  };

  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <button onClick={handleDeleteToken}>token delete</button>
      <h1
        style={{
          textTransform: 'capitalize',
          fontFamily: 'monospace',
          color: 'tomato',
        }}
      >
        {token}
      </h1>
      <Todo_Add />
      <Todo_List />
    </>
  );
};
