import { useContext, useState } from 'react';
import { contextCreated } from '../Context/Context_Components';

import { Navigate } from 'react-router-dom';

export const Auth = () => {
  const { isLogin, setisLogin } = useContext(contextCreated);
  const [text, setText] = useState('');
  const [textPass, settextPass] = useState('');

  const handleSubmit = (e) => {
    // console.log("Hello From Submit Function");

    e.preventDefault();
    if (text.length === 0 && textPass.length === 0) return;
    setisLogin(!isLogin);
  };

  if (isLogin) {
    // console.log("Hello");

    // return <Navigate to="/user" />;
    return <Navigate to="/user_2" />;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            marginTop: '51px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '21px',
          }}
        >
          <label htmlFor="Username">Username</label>
          <input
            type="text"
            id="userName"
            placeholder="Enter Username"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <br />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '21px',
          }}
        >
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            onChange={(e) => settextPass(e.target.value)}
          />
        </div>
        <button type="submit" style={{ display: 'block', margin: '31px auto' }}>
          Submit
        </button>
      </form>
    </>
  );
};
