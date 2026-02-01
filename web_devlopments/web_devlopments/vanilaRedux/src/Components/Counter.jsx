/* eslint-disable no-unused-vars */
import React from 'react';

import { myStore } from '../Store/Store';

import * as types from '../Reducer/Action';

export const Counter = () => {
  const [jugad, setJugad] = React.useState(0);

  // console.log('🚀 ~ myStore:', myStore);

  const { getState, dispatch, subscribe } = myStore;

  subscribe(() => {
    setJugad((prev) => prev + 1);
  });

  return (
    <>
      <h1>Counter {getState().count}</h1>
      <button onClick={() => dispatch({ type: types.INCREMENT })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: types.DECREMENT })}>
        decrement
      </button>
      <button onClick={() => dispatch({ type: types.DOUBLE })}>double</button>
    </>
  );
};
