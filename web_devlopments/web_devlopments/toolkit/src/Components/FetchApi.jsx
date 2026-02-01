import React from 'react';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../Reducer/Actions';

export const FetchApi = () => {
  const dispatch = useDispatch();
  const { item, isLoading, isError } = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (isLoading) return <p>Loading....</p>;
  if (isError) return <p>Something went wrong!</p>;

  return (
    <ul>
      {item.map((el) => {
        return <li key={el.id}>{el.name}</li>;
      })}
    </ul>
  );
};
