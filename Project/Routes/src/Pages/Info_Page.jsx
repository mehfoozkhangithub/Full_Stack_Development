import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { FetchData } from '../Api/Single_Page';

export const Info_Page = () => {
  const pathname = useParams();
  console.log('🚀 ~ pathname:', pathname);
  const [data, setData] = useState(null);

  useEffect(() => {
    FetchData(`https://reqres.in/api/user/${pathname.userID}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
      .finally(console.log('finished the process!!'));
  }, []);

  console.log('🚀 ~ data:', data);

  return (
    <>
      <h1>hello</h1>
    </>
  );
};
