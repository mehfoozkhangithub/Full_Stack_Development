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

import { countIncre, countDecr } from '../Reducer/Reducer';

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
      <button onClick={() => dispatch(countIncre(5))}>inc</button>
      <button onClick={() => dispatch(countDecr(2))}>dec</button>
      {/* 
      <button onClick={() => dispatch(action_type.unknow())}>
        Dispatch Unknow Action
      </button>
      <button onClick={() => dispatch(action_type.randomNumber(10))}>
        Random Payload 10
      </button> */}
    </>
  );
};
