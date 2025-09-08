import { createSlice, nanoid } from "@reduxjs/toolkit";

let initialState = [];
const Reducer = createSlice({
  initialState,
  name: "todos",
  reducers: {
    // here we are using the addTodo function which helps to add the data in initialState which us called a state in the function of the todo
    addTodo: (state, action) => {
      console.log("this is from reducer todo..", action, state);
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
        edit: false,
      };
      state.push(todo);
    },
    deleteTodo: (state, action) => {
      console.log("this is from reducer todo..", action, state);
      return state.filter((el) => {
        return el.id !== action.payload;
      });
    },
    // editTodo: (state, action) => {},
    // toggle: (state, action) => {},
  },
});

export const { addTodo, editTodo, deleteTodo } = Reducer.actions;

export default Reducer.reducer;
