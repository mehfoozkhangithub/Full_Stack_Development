// import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../Reducer/Reducer";

export const Todos = () => {
  const data = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  console.log(data, "this is we get todos");

  const handleDelete = (id) => {
    console.log("hello i am button");
    dispatch(deleteTodo(id));
  };

  return (
    <>
      {data?.map((element, id) => (
        <div
          key={id}
          className="flex items-center justify-around gap-1 border-2 border-blue-600 w-[40%] py-2"
        >
          <h1 className="capitalize font-bold">{element.text}</h1>
          <div className=" flex gap-2 w-[20%]">
            <button
              className="capitalize p-2 bg-red-600"
              onClick={() => handleDelete(id)}
            >
              delete
            </button>
            <button className="capitalize p-2 bg-green-500">edits</button>
          </div>
        </div>
      ))}
    </>
  );
};
