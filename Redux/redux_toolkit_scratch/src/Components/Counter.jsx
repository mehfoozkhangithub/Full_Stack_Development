/* import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import * as action_type from '../Reducer/Action';

export const Counter = () => {
  const dispatch = useDispatch();

  const { value, sumOfNumberPayload, unHandleAction } = useSelector((state) => {
    console.log('🚀 ~ state:', state);
    return state;
  });
  console.log('🚀 ~ unHandleAction:', unHandleAction);
  console.log('🚀 ~ sumOfNumberPayload:', sumOfNumberPayload);

  console.log('🚀 ~ value:', value);

  return (
    <>
      <h1>Counter {value}</h1>
      <h2>Sum of payload: {sumOfNumberPayload}</h2>
      <h3>Unhandled actions: {unHandleAction}</h3>
      <button onClick={() => dispatch(action_type.increment())}>inc</button>
      <button onClick={() => dispatch(action_type.decrement())}>dec</button>
      <button onClick={() => dispatch(action_type.unknow())}>
        Dispatch Unknow Action
      </button>
      <button onClick={() => dispatch(action_type.randomNumber(10))}>
        Random Payload 10
      </button>
    </>
  );
};
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import * as action_type from '../Reducer/Action';

export const Counter = () => {
  const dispatch = useDispatch();

  const { value, sumOfNumberPayload, unHandleAction } = useSelector((state) => {
    console.log('🚀 ~ state:', state);
    return state;
  });
  console.log('🚀 ~ unHandleAction:', unHandleAction);
  console.log('🚀 ~ sumOfNumberPayload:', sumOfNumberPayload);

  console.log('🚀 ~ value:', value);

  return (
    <>
      <h1>Counter {value}</h1>
      <h2>Sum of payload: {sumOfNumberPayload}</h2>
      <h3>Unhandled actions: {unHandleAction}</h3>
      <button onClick={() => dispatch(action_type.increment())}>inc</button>
      <button onClick={() => dispatch(action_type.decrement())}>dec</button>
      <button onClick={() => dispatch(action_type.unknow())}>
        Dispatch Unknow Action
      </button>
      <button onClick={() => dispatch(action_type.randomNumber(10))}>
        Random Payload 10
      </button>
    </>
  );
};
 */

import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
// import * as action_type from '../Reducer/Action';

import { countIncre, countDecr, incrementByPayload } from '../Reducer/Reducer';
import { selectComponentsData, evenNum } from '../Reducer/Selector';

export const Counter = () => {
  const dispatch = useDispatch();

  //const { value, sumOfNumberPayload, unHandleAction } = useSelector((state) => {
  // console.log('🚀 ~ state:', state);
  // return state;
  // so here we have the note to understand
  /* 
    note: so this is counter we have the in this we are using the selector from react-redux and now i am using the redux-toolkit selector.
    */
  //});

  const selectValue = useSelector(selectComponentsData);
  const isEven = useSelector(evenNum);

  return (
    <>
      <h1>Counter {selectValue.value}</h1>
      <h2>Sum of payload: {selectValue.sumOfNumberPayload}</h2>
      <h3>Unhandled actions: {selectValue.unHandleAction}</h3>
      <h3>{isEven ? 'Even' : 'Odd'}</h3>
      <button onClick={() => dispatch(countIncre(1))}>inc</button>
      <button onClick={() => dispatch(countDecr(1))}>dec</button>

      {/* <button onClick={() => dispatch(action_type.unknow())}>
        Dispatch Unknow Action
      </button> */}
      <button onClick={() => dispatch(incrementByPayload(10))}>
        Random Payload 10
      </button>

      {/* this is normal reducer and action code */}
      {/* <button onClick={() => dispatch(action_type.unknow())}>
        Dispatch Unknow Action
      </button>
      <button onClick={() => dispatch(action_type.randomNumber(10))}>
        Random Payload 10
      </button> */}
    </>
  );
};
