import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const Links = [
    { path: '/', title: 'home' },
    { path: '/about', title: 'about' },
    { path: '/contact', title: 'contact' },
    { path: '/single_page', title: 'user' },
  ];

  const defaultStyle = {
    textDecoration: 'none',
    fontSize: '32px',
    textTransform: 'capitalize',
    color: 'teal',
  };

  const activeStyle = {
    textDecoration: 'none',
    fontSize: '32px',
    textTransform: 'capitalize',
    color: 'tomato',
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >
      {Links.map((el, i) => (
        <NavLink
          end
          style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
          to={el.path}
          key={i}
        >
          {el.title}
        </NavLink>
      ))}
    </div>
  );
};
