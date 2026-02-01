import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const getData = (url) => {
  return axios
    .get(url)
    .then((res) => res)
    .catch((err) => err);
};

export const SingleUserPage = () => {
  const [data, setData] = useState({});
  console.log('🚀 ~ data:', data);
  const { productID } = useParams();
  const api = `https://fakestoreapi.com/products/${productID}`;

  useEffect(() => {
    getData(api)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [productID, api]);

  return (
    <div>
      {
        <div
          key={data.id}
          style={{
            border: '2px solid #000',
            padding: '15px',
            borderRadius: '15px',
            display: 'flex',
            flexDirection: 'column',
            cursor: 'pointer',
            textDecoration: 'none',
            color: '#000',
          }}
        >
          <h4 style={{ textAlign: 'center' }}>{data.id}</h4>
          <br />
          <img
            src={data.image}
            alt="Products"
            style={{
              width: '210px',
              height: 'auto',
              display: 'block',
              margin: 'auto',
            }}
          />
          <br />
          <h3 style={{ textTransform: 'capitalize' }}>Title: {data.title}</h3>
          <h3>Price: ${data.price}</h3>
          <h3 style={{ textTransform: 'capitalize' }}>
            Category: {data.category}
          </h3>
          <p>
            <b>
              <u style={{ padding: '11px 0' }}>Description</u>:
            </b>{' '}
            {data.description}
          </p>
          <button>
            <Link to={`/user`}>go back</Link>
          </button>
        </div>
      }
    </div>
  );
};
