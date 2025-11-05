import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { Todo_Add } from '../components/Todo_Add';
import { Todo_List } from '../components/Todo_List';

export const Home = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const token = useSelector((state) => state.auth.token);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return (
    <>
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
