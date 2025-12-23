import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../Reducer/Reducer';

export const Counter = () => {
  const data = useSelector((state) => state.count);
  const dispatch = useDispatch();
  console.log('🚀 ~ data:', data);
  return (
    <>
      <h1>Counter {data}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </>
  );
};
