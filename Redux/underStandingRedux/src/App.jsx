/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css';

import { ADD_DATA, REDUCE_DATA, DOUBLE } from './Reducer/Action';
import { ownStore } from './Reducer/Store';

function App() {
  const [update, setUpdate] = useState(0);

  /* 
  # in reducer 

  const [count,dispatch]=useReducer(()=>{},{count:10})
  */
  const { getState, dispatch, subscribe } = ownStore;
  // console.log('🚀 ~ getState:', getState());

  const handlebtn_1 = () => {
    dispatch({ type: ADD_DATA });
  };

  const handlebtn_2 = () => {
    dispatch({ type: REDUCE_DATA });
  };

  const handlebtn_double = () => {
    dispatch({ type: DOUBLE });
  };
  console.log(update);

  subscribe(() => {
    // console.log('this is in subscribe', getState().count);

    // tell react to re-render the components, beacuse this function will only trigger if the state redux store has changed.

    //1. If the state of the components has changed.
    //2. If the props of the components has changed.

    setUpdate((prev) => prev + 1);
  });

  const handleIncrements = () => {
    dispatch({ type: ADD_DATA });
  };

  const handleDecrements = () => {
    dispatch({ type: REDUCE_DATA });
  };
  const handleDouble = () => {
    dispatch({ type: DOUBLE });
  };

  return (
    <>
      <h1>count {getState().count}</h1>
      <button onClick={handlebtn_1}>+</button>
      <button onClick={handlebtn_2}>-</button>
      <button onClick={handlebtn_double}>double</button>

      <button onClick={handleIncrements}>increment</button>
      <button onClick={handleDecrements}>decrement</button>
      <button onClick={handleDouble}>double</button>
    </>
  );
}

export default App;
