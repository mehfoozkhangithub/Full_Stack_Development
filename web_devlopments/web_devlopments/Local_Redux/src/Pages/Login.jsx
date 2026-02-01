import { useDispatch, useSelector } from 'react-redux';
import { LoginCompo } from '../Components/Login';

import { loginFailure, loginSuccessfull } from '../Reducer/Auth/Action';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { isLoading, isError } = useSelector((state) => state.auths);

  const handleLogin = ({ email, pass }) => {
    if (email === 'admin' && pass === 'admin@123') {
      dispatch(loginSuccessfull('fakeToken_mehfooz_sirru'));
    } else {
      dispatch(loginFailure('wrong_credentials'));
    }
  };

  if (isLoading) return <h1>Loading....😎</h1>;

  return (
    <>
      <LoginCompo props={handleLogin} />
      {isError && <h1>Something went wrong....❌</h1>}
    </>
  );
};

// Emaaal -> developed by niluuu
