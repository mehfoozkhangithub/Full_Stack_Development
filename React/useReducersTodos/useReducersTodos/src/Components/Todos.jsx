import { useContext, useEffect, useReducer, useRef } from "react";
import { TodoContexts } from "../Context/logicContext";
import { Reducer } from "../Reducers/Reducer";
import { AddTodo } from "../Reducers/Action";

export const Todos = () => {
  const contexsData = useContext(TodoContexts);
  const inputCatch = useRef("");

  const [state, dispatch] = useReducer(Reducer, contexsData.data);

  // console.log(contexsData, "this is form todo");

  const handleInput = () => {
    let values = inputCatch.current.value;
    if (0 === values.length) {
      alert("please enter some text!");
      return;
    }
    dispatch(AddTodo(values));
    inputCatch.current.value = "";
  };

  useEffect(() => {
    contexsData.setData(state);
  }, [state, contexsData]);

  return (
    <>
      <h1 className="capitalize font-bold !text-[80px]">todo</h1>
      <div className=" flex justify-center items-center gap-2">
        <input
          type="text"
          placeholder="enter the task..."
          className="border-2 p-1 rounded-md"
          ref={inputCatch}
        />
        <input
          type="button"
          value="submit"
          className="border-2 px-2 py-1 rounded-md"
          onClick={handleInput}
        />
      </div>
    </>
  );
};
