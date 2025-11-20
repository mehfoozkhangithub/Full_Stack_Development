import axios from 'axios';
import { useEffect, useState } from 'react';

import '../App.css';

export const Api_calling = () => {
  const [data, setData] = useState([]);

  const API = 'https://jsonplaceholder.typicode.com/todos';

  const getApi = () => {
    axios
      .get(API)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => console.log('done'));
  };
  // console.log('🚀 ~ data:', data);

  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      <h1>hello api</h1>
      <div className="main_div">
        {data.map((el) => {
          return (
            <div key={el.id} className="child">
              <h3>{el.id}</h3>
              <h3>{el.title}</h3>
              {el.completed ? <p>complete : true</p> : <p>complete : false</p>}
            </div>
          );
        })}
      </div>
    </>
  );
};
