import React from "react";

export const AddTodos = () => {
  const inputValue = React.useRef("");

  return (
    <>
      <div className="flex justify-center items-center flex-col h-[100vh]">
        <h1 className="text-3xl font-bold underline capitalize text-amber-300 text-center">
          to do ...📕
        </h1>
        <form
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
      </div>
    </>
  );
};
