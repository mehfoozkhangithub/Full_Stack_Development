import React from 'react';
import { Login } from '../components/Login';

import { LOGIN_FAILURE, LOGIN_SUCCESS } from '../Redux/auth/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => {
    return state.auth.isAuth;
  });
  console.log('🚀 ~ isAuth:', isAuth);

  const handleLogin = ({ email, pass }) => {
    if (email === 'admin' && pass === 'admin') {
      dispatch({ type: LOGIN_SUCCESS, payload: 'fakeToken' });
    } else {
      dispatch({ type: LOGIN_FAILURE, payload: 'wrong credentials' });
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Login handleLogin={handleLogin} />
    </>
  );
};
