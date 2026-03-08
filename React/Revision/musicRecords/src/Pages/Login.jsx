import React from 'react';
import { login } from '../Redux/Auth/actionType';
import { useDispatch } from 'react-redux';

export const Login = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = React.useState({ email: '', password: '' });

  const handleForm = (e) => {
    e.preventDefault();
    if (users) {
      dispatch(login(users));
      setUsers({ email: '', password: '' });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsers((prev) => ({ ...prev, [name]: value }));
  };

  console.log('🚀 ~ users:', users);

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleForm}>
        <div>
          <label htmlFor=""></label>
          <input
            name="email"
            value={users.email}
            type="text"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor=""></label>
          <input
            name="password"
            value={users.password}
            type="text"
            onChange={handleChange}
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </>
  );
};
