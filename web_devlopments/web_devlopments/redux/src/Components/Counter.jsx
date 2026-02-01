import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as action from '../Redux_config/Reducer.js';

export const Counter = () => {
  const data = useSelector((state) => state.value);
  const dispatch = useDispatch();

  return (
    <>
      <h1>count {data}</h1>
      <button
        onClick={() => {
          dispatch(action.increment());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(action.decrement());
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch(action.incrementByAmount(10));
        }}
      >
        increment by value 10
      </button>
      <button
        onClick={() => {
          dispatch(action.decrementByAmount(10));
        }}
      >
        decrement by value 10
      </button>
    </>
  );
};
