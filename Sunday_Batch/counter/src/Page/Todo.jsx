import React from 'react';
import { Todo_Input } from './../Components/Todo_Input';
import { Todo_List } from '../Components/Todo_List';

export const Todo = () => {
  const [todo, setTodo] = React.useState([]);
  return (
    <>
      <Todo_Input props={setTodo} />
      <Todo_List props={{ todo, setTodo }} />
    </>
  );
};
