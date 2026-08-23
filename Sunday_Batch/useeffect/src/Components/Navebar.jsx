import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

export const Navebar = () => {
  const data = [
    { path: '/', element: 'home' },
    { path: '/about', element: 'about' },
    { path: '/effect', element: 'effect' },
    { path: '/login', element: 'login' },
    { path: '/signup', element: 'signup' },
  ];
  return (
    <div
      className="nav"
      style={{ display: 'flex', textDecoration: 'none', listStyle: 'none' }}
    >
      {/* <NavLink to="/">home</NavLink>
      <NavLink to="/about">about</NavLink>
      <NavLink to="/effect">effect</NavLink> */}

      {data?.map((el, i) => {
        return (
          <NavLink
            key={i}
            className="link"
            to={el.path}
            style={({ isActive }) => {
              return isActive
                ? {
                    background: 'tomato',
                    font: '16px',
                    fontWeight: 'bolder',
                    padding: '0.2rem 0.4rem',
                  }
                : { background: 'transparent' };
            }}
          >
            {el.element}
          </NavLink>
        );
      })}
    </div>
  );
};
