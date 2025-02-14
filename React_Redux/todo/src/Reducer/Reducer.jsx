import { createSlice, nanoid } from "@reduxjs/toolkit";

let initialState = [];
const Reducer = createSlice({
  initialState,
  name: "api",
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
        edit: false,
      };
      state.push(todo);
    },
    deleteTodo: (state, action) => {},
    editTodo: (state, action) => {},
  },
});

export const { addTodo, editTodo, deleteTodo } = Reducer.actions;

export default Reducer.reducer;
