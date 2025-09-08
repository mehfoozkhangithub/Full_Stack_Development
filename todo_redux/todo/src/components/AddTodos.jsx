import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Features/TodosSlices";

function AddTodos() {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(value));
    setValue("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default AddTodos;
