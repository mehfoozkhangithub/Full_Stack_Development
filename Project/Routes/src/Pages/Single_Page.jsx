import { useEffect, useState } from 'react';
import { FetchData } from '../Api/Single_Page.js';
import { Link } from 'react-router-dom';

export const Single_Page = () => {
  const [store, setStore] = useState([]);

  // const handleDetail = () => {};

  useEffect(() => {
    const getData = () => {
      FetchData(`https://reqres.in/api/users`)
        // .then((res) => console.log(res))
        .then((res) => setStore(res.data.data))
        .catch((err) => console.log(err))
        .finally(console.log('finished the process!!'));
    };

    getData();
  }, []);

  if (!store) return <h2>Loading...</h2>;

  return (
    <>
      {store.map((el) => (
        <div key={el.id}>
          <Link to={`/single_page/${el.id}`}>
            <img src={el.avatar} alt={el.first_name} />
            <h2>{el.email}</h2>
            <h3>{el.first_name}</h3>
            <h3>{el.last_name}</h3>
          </Link>
        </div>
      ))}
    </>
  );
};
