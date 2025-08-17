import { createSlice, nanoid } from "@reduxjs/toolkit";

let dataBase = [];
const Reducer = createSlice({
  initialState: dataBase,
  name: "api",
  reducers: {
    // here we are using the addTodo function which helps to add the data in initialState which us called a state in the function of the todo
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
        edit: false,
      };
      state.push(todo);
    },
    deleteTodo: (state, action) => {
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
