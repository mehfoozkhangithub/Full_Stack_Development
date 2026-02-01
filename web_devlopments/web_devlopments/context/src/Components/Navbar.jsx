import { NavLink } from 'react-router-dom';
import '../App.css';

export const Navbar = () => {
  const navPath = [
    // { path: "/", element: "" },
    // { path: '/user', element: 'home' },
    { path: '/user_2', element: 'home' },
    { path: '/auth', element: 'auth' },
    { path: '/show_login', element: 'login' },
    // { path: "/page_404", element: "page_404" },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '21px' }}>
      {navPath.length &&
        navPath.map((el, i) => {
          return (
            <NavLink to={el.path} end className="nav_bar" key={i}>
              {el.element}
            </NavLink>
          );
        })}
    </div>
  );
};
