import { useLocation, Link } from 'react-router-dom';

export const Bread_Crumb = () => {
  const location = useLocation();

  let crumb = '';

  const bread_Crumb = location.pathname
    .split('/')
    .filter((el) => el != '')
    .map((curr) => {
      // if (curr.length === 0) {
      //   crumb = '';
      //   crumb = 'home';
      // }

      crumb += `${curr}`;

      return (
        <div key={crumb}>
          <Link to={crumb}>{curr}</Link>
        </div>
      );
    });

  return <div className="crumbs">{bread_Crumb}</div>;
};
