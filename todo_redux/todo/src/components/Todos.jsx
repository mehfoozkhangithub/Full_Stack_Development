import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, editTodo } from "../Features/TodosSlices";

function Todos() {
  const [editFlag, setEditFlag] = useState(true);
  const todo = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log(todo);

  const handleEdit = (i) => {
    dispatch(editTodo({ i, editFlag }));
  };
  return (
    <>
      <div>
        <h2>Todos</h2>
        {todo.map((el, i) => (
          <div key={i}>
            <label>{el.text}</label>
            <button onClick={() => dispatch(removeTodo(el.id))}>X</button>
            <button onClick={() => handleEdit(el.id)}>E</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Todos;
