import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as types from '../Reducer/Counts/Action';

export const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.counts.count);

  //   console.log('🚀 ~ value:', value);

  const handleInc = () => {
    dispatch({ type: types.INCREMENT });
  };

  const handleDec = () => {
    dispatch({ type: types.DECREMENT });
  };

  const handleIncByVal = () => {
    dispatch({ type: types.INCREMENTBYVALUE, payload: 10 });
  };

  return (
    <>
      <h1>Counter {value}</h1>
      <button onClick={handleInc}>+</button>
      <button onClick={handleDec}>-</button>
      <button onClick={handleIncByVal}>increment by 5</button>
    </>
  );
};
