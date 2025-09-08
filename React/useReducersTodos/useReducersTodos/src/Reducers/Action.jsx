export const AddTodo = (value) => {
  return { type: "ADD_TODO", payload: value };
};

export const DeleteTodo = (id) => {
  return { type: "DELETE_TODO", payload: id };
};

export const EditsTodo = (id) => {
  return { type: "EDITS_TODO", payload: id };
};
