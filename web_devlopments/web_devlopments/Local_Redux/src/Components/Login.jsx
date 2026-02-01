import React, { useState } from 'react';

export const LoginCompo = ({ props }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { email, pass };
    props(payload);
  };
  return (
    <>
      <h1>Login</h1>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '50%',
          gap: '20px',
        }}
        onSubmit={handleSubmit}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <label htmlFor="email">email</label>
          <input
            id="email"
            type="text"
            placeholder="enter the email..."
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <label htmlFor="password">password</label>
          <input
            id="password"
            type="text"
            placeholder="enter the password..."
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <button
          style={{ display: 'inline', width: 'fit-content' }}
          type="submit"
        >
          submit
        </button>
      </form>
    </>
  );
};
