import React from 'react';

export const Login = () => {
  const [users, setUsers] = React.useState({});

  const handleForm = (e) => {
    e.preventDefault();
    console.log(users);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsers((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleForm}>
        <div>
          <label htmlFor=""></label>
          <input
            name="userEmail"
            value={users.email}
            type="text"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor=""></label>
          <input
            name="userPass"
            value={users.pass}
            type="text"
            onChange={handleChange}
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </>
  );
};
