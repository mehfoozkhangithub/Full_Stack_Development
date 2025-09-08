import { useContext, useRef } from "react";
import { TodosContexts } from "../Context/CreateContext";
import { DeleteTodo, EditsTodo, UpdateTodo } from "../Reducer/Action";

export const Todos = () => {
  const { state, dispatch } = useContext(TodosContexts);
  // console.log(state, "this is state form  todo file");
  const updateText = useRef("");

  const handleDelete = (id) => {
    dispatch(DeleteTodo(id));
  };

  const handleEdits = (id) => {
    dispatch(EditsTodo(id));
  };

  const handleUpdate = (id) => {
    let value = updateText.current.value;
    dispatch(UpdateTodo({ text: value, id: id }));
    updateText.current.focus();
  };

  return (
    <>
      <h1>Todos</h1>
      {state &&
        state.map((element) =>
          element.isEdit && element.isEdit ? (
            <div key={element.id}>
              <input
                defaultValue={element.text}
                type="text"
                className="border-2 p-1 rounded-md"
                ref={updateText}
              />
              <button className="capitalize font-bold  border !border-green-800">
                cancel
              </button>
              <button
                onClick={() => handleUpdate(element.id)}
                className="capitalize font-bold  border !border-green-800"
              >
                update
              </button>
            </div>
          ) : (
            <div key={element.id}>
              <h1>{element.text}</h1>
              <button onClick={() => handleEdits(element.id)}>edit</button>
              <button onClick={() => handleDelete(element.id)}>delete</button>
            </div>
          )
        )}
    </>
  );
};
