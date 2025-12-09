import React from 'react';
import { Link, useParams } from 'react-router-dom';

const getData = (url) => {
  return fetch(url, {
    headers: {
      'x-api-key': 'reqres_c27db760fb6f4b06a48a548c02bf449f',
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const SinglePage = () => {
  const params = useParams();
  const [singleUserData, setSingleUserData] = React.useState({});
  console.log('useParam hook', params);

  React.useEffect(() => {
    getData(`https://reqres.in/api/users/${params.id}`)
      .then((res) => setSingleUserData(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(singleUserData, 'this is single data');

  return (
    <>
      <h1>Single Page</h1>
      {
        <div key={singleUserData.id} style={{ padding: '10px 30px' }}>
          <img src={singleUserData.avatar} alt="persone_img" />
          <p>name : {singleUserData.first_name}</p>{' '}
          <p>{singleUserData.last_name}</p>
          <p>email : {singleUserData.email}</p>
          <p>id: {singleUserData.id}</p>
          <Link to="/users">Go Back</Link>
        </div>
      }
    </>
  );
};
