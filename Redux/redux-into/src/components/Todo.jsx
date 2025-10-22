/* eslint-disable no-unused-vars */
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_TODO } from '../Redux/Actions';

export const Todo = () => {
  const refData = useRef(null);
  const dispatch = useDispatch();
  const data = useSelector((state) => console.log(state));
  //   console.log('🚀 ~ data:', data);

  const handleClick = () => {
    let val = refData.current.value;
    dispatch({ type: ADD_TODO, payload: val });
  };

  return (
    <>
      <h1>todo</h1>
      <input type="text" ref={refData} />
      <button onClick={handleClick}>add</button>
    </>
  );
};
