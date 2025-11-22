import { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { getApiCall, addTodo } from '../Redux/todos/Action';

export const TodosAdd = () => {
  const elementData = useRef(null);
  const dispatch = useDispatch();

  const handleInputVal = () => {
    addTodo({ dispatch, elementData }).then(() => {
      // getApiCall(dispatch);
      dispatch(getApiCall);
    });
  };

  return (
    <>
      <input
        type="text"
        placeholder="enter the todos!!!"
        ref={elementData}
        autoComplete="off"
      />
      <input type="button" value="add" onClick={handleInputVal} />
    </>
  );
};
