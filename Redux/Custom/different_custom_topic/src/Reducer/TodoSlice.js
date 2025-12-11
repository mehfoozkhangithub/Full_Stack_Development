import { createSlice, nanoid } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
  },
  reducers: {
    // # this is cerated the value of todo
    addTodos: {
      prepare(text) {
        return { payload: { id: nanoid(), text, done: false } };
      },
      reducer(state, action) {
        state.items.push(action.payload);
      },
    },
    // ? this is just toggaling the value of done = true to false || false to true
    toggleTodos(state, action) {
      const t = state.items.find((i) => i.ind === action.payload);
      if (t) t.done = !t.done;
    },
    // ! this is for deleteing the value of the todos

    removeTodos(state, action) {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
  },
});

export const { addTodos, toggleTodos, removeTodos } = todoSlice.actions;

export default todoSlice.reducer;

// $ here we are just doing the selector to great  for re-use the value in custom components

export const selectTodos = (state) => state.todos.items;
export const selectTodosCounts = (state) => state.todos.items.length;
export const selectTodosDoneCounts = (state) =>
  state.todos.items.filter((t) => t.done).length;
