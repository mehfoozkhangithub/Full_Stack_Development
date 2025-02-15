// import React from "react";
import { useSelector } from "react-redux";

export const Todos = () => {
  const data = useSelector((state) => state.todo);
  console.log(data, "this is we get todos");

  return (
    <>
      {data?.map((element, id) => (
        <div
          key={id}
          className="flex items-center justify-around gap-1 border-2 border-blue-600 w-[40%] py-2"
        >
          <h1 className="capitalize font-bold">{element.text}</h1>
          <div className=" flex gap-2 w-[20%]">
            <button className="capitalize p-2 bg-red-600">delete</button>
            <button className="capitalize p-2 bg-green-500">edits</button>
          </div>
        </div>
      ))}
    </>
  );
};
