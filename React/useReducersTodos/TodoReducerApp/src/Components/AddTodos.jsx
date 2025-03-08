import React, { useContext, useRef } from "react";
import { TodosContexts } from "../Context/CreateContext";

import { AddTodo } from "../Reducer/Action";

export const AddTodos = () => {
  const { dispatch } = useContext(TodosContexts);
  const inputValue = useRef("");

  const handleInput = () => {
    let values = inputValue.current.value;
    dispatch(AddTodo(values));
    inputValue.current.value = "";
    // console.log(values);
  };

  return (
    <>
      <h1>AddTodos</h1>
      <input type="text" placeholder="enter the todo..." ref={inputValue} />
      <input onClick={handleInput} type="button" value="Add" />
    </>
  );
};
