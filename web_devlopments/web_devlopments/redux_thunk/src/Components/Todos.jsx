/* eslint-disable react-hooks/exhaustive-deps */

// ! Todo List

import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { TodosInput } from './TodosInput';
// import axios from 'axios';
import { getApi } from '../Redux/action';

export const Todos = () => {
  const { todo, isLoadings, isErrors } = useSelector((state) => {
    return {
      todo: state.todos,
      isLoadings: state.isLoading,
      isErrors: state.isError,
    };
  }, shallowEqual);
  console.log('🚀 ~ isErrors:', isErrors);
  console.log('🚀 ~ isLoadings:', isLoadings);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getApi);
  }, []);

  if (isLoadings) return <h1>Loading...</h1>;
  if (isErrors) return <h1>Something went wrong.....</h1>;

  return (
    <>
      <h1>todos</h1>
      <TodosInput />

      {todo?.map((el) => (
        <p key={el.id}>
          {el.title} - {el.status ? 'true' : 'false'}
        </p>
      ))}
    </>
  );
};
