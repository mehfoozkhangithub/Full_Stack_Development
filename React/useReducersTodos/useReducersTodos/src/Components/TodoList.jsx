import React, { useContext, useEffect, useReducer, useRef } from "react";
import { TodoContexts } from "../Context/logicContext";
import { DeleteTodo, EditsTodo } from "../Reducers/Action";
import { Reducer } from "../Reducers/Reducer";

export const TodoList = () => {
  const dataHai = useContext(TodoContexts);

  const updateData = useRef("");
  console.log(dataHai.data, "this is our dataBase");

  const [state, dispatch] = useReducer(Reducer, dataHai.data);

  const handlDelete = (id) => {
    // console.log(id);
    dispatch(DeleteTodo(id));
  };

  const handleEdit = (id) => {
    dispatch(EditsTodo(id));
  };

  // const handleUpdate = () => {};

  // console.log(dataHai.data, "this is our dataBase");
  // console.log(state, "this is our state");

  useEffect(() => {
    dataHai.setData(state);
  }, [state, dataHai]);

  // console.log(state, "state in the list file");
  return (
    <>
      {dataHai.data &&
        dataHai.data.map((el) =>
          el.isEdit && el.isEdit ? (
            <div
              key={el.id}
              className="listing my-4 flex justify-between items-center border p-2 border-red-500 text-[10px]"
            >
              <input
                defaultValue={el.text}
                type="text"
                className="border-2 p-1 rounded-md"
                ref={updateData}
              />
              <button className="capitalize font-bold  border !border-green-800">
                cancel
              </button>
              <button
                onClick={handleEdit}
                className="capitalize font-bold  border !border-green-800"
              >
                update
              </button>
            </div>
          ) : (
            <div
              key={el.id}
              className="listing my-4 flex justify-between items-center border p-2 border-red-500 text-[10px]"
            >
              <h1 className="capitalize">{el.text}</h1>

              <div className="btn flex justify-evenly items-center gap-1">
                <button
                  onClick={() => handleEdit(el.id)}
                  className="edits capitalize border !border-green-800"
                >
                  edits
                </button>
                <button
                  onClick={() => handlDelete(el.id)}
                  className="delete capitalize border !border-green-800"
                >
                  delete
                </button>
              </div>
            </div>
          )
        )}
    </>
  );
};
