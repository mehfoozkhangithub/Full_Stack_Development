import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Reducer/Reducer";
import { Todos } from "./Todos";

export const AddTodos = () => {
  // const store = useSelector((state) => state.todo);
  const inputValue = React.useRef("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    let text = inputValue.current.value;
    // console.log(text);
    dispatch(addTodo(text));
    text = inputValue.current.value = "";
  };

  return (
    <>
      <div className="flex justify-center items-center flex-col  border-2 border-amber-400">
        <h1 className="text-3xl font-bold underline capitalize text-amber-300 text-center">
          to do ...📕
        </h1>
        <form
          onSubmit={(event) => handleSubmit(event)}
          action="#"
          className=" p-3 flex justify-center items-center gap-1"
        >
          <input
            ref={inputValue}
            className="border-2 rounded p-1 placeholder:capitalize placeholder:font-bold"
            type="text"
            placeholder="enter todo..."
          />
          <button
            type="submit"
            className="rounded border-2 px-3 py-1 capitalize font-bold"
          >
            Add
          </button>
        </form>
        <Todos />
      </div>
    </>
  );
};
