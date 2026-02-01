import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const getData = (url) => {
  return axios
    .get(url, {
      headers: {
        'x-api-key': 'reqres_c27db760fb6f4b06a48a548c02bf449f',
      },
    })
    .then((res) => res)
    .catch((err) => err);
};

const setPageFormula = (val) => {
  console.log('🚀 ~ val:', val);

  val = Number(val);

  if (typeof val === 'number' && val >= 1) val = 1;

  if (!val) val = 1;

  return val;
};

// madaad

export const ApiCall_different = () => {
  const [value, setValue] = useState(null);

  console.log('🚀 ~ value:', value);

  const [pagination, setPaginations] = useState(null);

  console.log('🚀 ~ pagination:', pagination);

  const [searchParam, setSearchParam] = useSearchParams();

  const initialpage = setPageFormula(searchParam.get('page'));

  const [page, setPage] = useState(initialpage);

  const api = `https://reqres.in/api/users?page=${page}&per_page=5`;

  useEffect(() => {
    getData(api)
      .then((res) => {
        setValue(res.data.data);
        setPaginations(res.data);
      })
      .catch((err) => console.log(err));
  }, [page]);

  useEffect(() => {
    setSearchParam({ page });
  }, [page]);

  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: 10,
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {value &&
          value.map((el) => {
            return (
              <Link to={`user_2/${el.id}`} key={el.id}>
                <p>{el.id}</p>
                <img src={el.avatar} alt="logo" />
                <p>{el.first_name}</p>
                <p>{el.last_name}</p>
              </Link>
            );
          })}
      </div>
      <div style={{ display: 'flex', justifySelf: 'center', padding: '20px' }}>
        <button
          disabled={page === 1 ? true : false}
          onClick={() => setPage(page - 1)}
        >
          -
        </button>
        <span style={{ padding: 20 }}>{pagination?.page}</span>
        <button
          disabled={page === pagination?.total_pages ? true : false}
          onClick={() => setPage(page + 1)}
        >
          +
        </button>
      </div>
    </>
  );
};
