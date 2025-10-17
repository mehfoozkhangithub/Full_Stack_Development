import { useLocation, Link } from 'react-router-dom';

export const Bread_Crumb = () => {
  const location = useLocation();

  let crumb = '';

  const bread_Crumb = location.pathname
    .split('/')
    .filter((el) => el != '')
    .map((curr) => {
      crumb += `${curr}`;

      return (
        <div key={crumb} className="crumb">
          <Link to={crumb}>{curr}</Link>
        </div>
      );
    });

  return <div className="crumbs">{bread_Crumb}</div>;
};
