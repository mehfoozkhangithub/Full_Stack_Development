import React, { useState } from 'react';

export const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { email, password };
    handleLogin(payload);
  };

  return (
    <>
      <form action="#" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="enter the email..."
        />
        <input
          onChange={(e) => setPass(e.target.value)}
          type="text"
          placeholder="enter the pass..."
        />
        <input type="submit" />
      </form>
    </>
  );
};
