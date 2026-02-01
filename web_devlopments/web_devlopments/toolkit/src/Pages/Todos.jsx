import React from 'react';
import { AddTodo } from '../Components/AddTodo';
import { ListTodos } from '../Components/ListTodos';

export const Todos = () => {
  return (
    <>
      <AddTodo />
      <ListTodos />
    </>
  );
};
