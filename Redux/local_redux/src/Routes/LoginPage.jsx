import { Login } from '../components/Login';

import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  loginUser,
} from '../Redux/auth/actions';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { isAuth, isLoading, isError } = useSelector((state) => {
    return state.auth;
  }, shallowEqual);
  console.log('🚀 ~ isAuth:', isAuth);

  const handleLogin = ({ email, password }) => {
    // if (email === 'admin' && pass === 'admin') {
    //   dispatch({ type: LOGIN_SUCCESS, payload: 'fakeToken' });
    // } else {
    //   dispatch({ type: LOGIN_FAILURE, payload: 'wrong credentials' });
    // }
    dispatch(loginUser({ email, password }));
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  if (isLoading) {
    return <div>...loading</div>;
  }

  /* 
  | Key      | Value                |
| -------- | -------------------- |
| email    | `eve.holt@reqres.in` |
| password | `cityslicka`         |
 */

  return (
    <>
      <Login handleLogin={handleLogin} />
      {isError && <div>...something went wrong</div>}
    </>
  );
};
