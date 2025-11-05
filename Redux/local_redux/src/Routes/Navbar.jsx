import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const data = [
    { path: '/', element: 'home' },
    { path: '/login', element: 'login' },
  ];

  return (
    <>
      {data.map((el) => (
        <NavLink
          style={{
            display: 'inline-flex',
            width: '100px',
            height: '30px',
            justifyContent: 'center',
            alignContent: 'center',
            lineHeight: '30px',
            textTransform: 'capitalize',
            fontFamily: 'sans-serif',
            fontSize: '32px',
            // border: '1px solid red',
            margin: '20px',
            textDecoration: 'none',
            color: '#000',
          }}
          to={el.path}
          key={el.path}
        >
          {el.element}
        </NavLink>
      ))}
    </>
  );
};
