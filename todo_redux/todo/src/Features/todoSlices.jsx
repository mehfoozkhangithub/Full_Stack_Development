import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: { id: 1, text: "hello world" },
};
export const counterSlices = createSlice({
  initialState,
  name: "todo",
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((id) => id !== action.payload);
    },
  },
});

export const { increment, decrement } = counterSlices.actions;

export default counterSlices.reducer;
