import React from 'react'
import { Reducer } from './Reducer';
import { Increment,Decrement } from './Action';

const initisalState={count:0}

export const Counter = () => {
    const [state,dispatch]=React.useReducer(Reducer,initisalState);

  return (
    <>
    <h1>Counter : {state.count}</h1>
    <button onClick={()=>dispatch(Increment)}>Increment</button>
    <button>Decrement</button>
    </>
  )
}
