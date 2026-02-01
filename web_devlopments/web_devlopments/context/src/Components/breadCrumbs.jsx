/* eslint-disable react-hooks/immutability */
import { Link, useLocation } from 'react-router-dom';

import '../App.css';

export const BreadCrumbs = () => {
  const loactions = useLocation();

  let currLocation = '';

  const crums = loactions.pathname
    .split('/')
    .filter((el) => el != '')
    .map((el) => {
      currLocation += `/${el}`;

      return (
        <div className="links" style={{ display: 'inline-block' }} key={el}>
          <Link to={currLocation}>{el}</Link>
        </div>
      );
    });
  console.log('🚀 ~ crums:', crums);

  return <div style={{ padding: 10 }}>{crums}</div>;
};
