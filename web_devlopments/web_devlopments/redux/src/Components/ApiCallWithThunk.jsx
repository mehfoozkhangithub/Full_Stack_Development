import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUserById } from '../Redux_config/Thunks';

export const ApiCallWithThunk = () => {
  const dispatch = useDispatch();

  const value = useSelector((state) => state);
  console.log('🚀 ~ value:', value);

  useEffect(() => {
    dispatch(fetchUserById(2)); // here we are passing the value of the param-id
  }, [dispatch]);
  return <></>;
};
