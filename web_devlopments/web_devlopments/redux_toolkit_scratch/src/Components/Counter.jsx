import { useDispatch, useSelector } from 'react-redux';

import {
  count,
  isEvenCount,
  addCount,
  subCount,
  inc_extraBy_10_Count,
  dec_extraBy_10_Count,
} from '../Slices/CounterSlices';

export const Counter = () => {
  const dispatch = useDispatch();
  // const value = useSelector((state) => state);
  // console.log('🚀 ~ value:', value);
  const isEven = useSelector(isEvenCount);
  const counts = useSelector(count);
  return (
    <>
      <h1>Counter {counts}</h1>
      <h2>{isEven ? 'Even' : 'odd'}</h2>

      <button
        onClick={() => {
          dispatch(addCount());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(subCount());
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch(inc_extraBy_10_Count(10));
        }}
      >
        incr_by_10
      </button>
      <button
        onClick={() => {
          dispatch(dec_extraBy_10_Count(10));
        }}
      >
        decr_by_10
      </button>
    </>
  );
};
