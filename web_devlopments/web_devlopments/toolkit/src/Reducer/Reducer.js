import { createSlice, nanoid } from '@reduxjs/toolkit';
import { fetchUser } from './Actions';
//  this todo-reducer

const todoReducer = createSlice({
  name: 'todos',
  initialState: { item: [], isLoading: false, isError: false },
  reducers: {
    addTodos: {
      prepare: (text) => {
        console.log('🚀 ~ text:', text);
        let todo = {
          id: nanoid(),
          text: text,
          isEdit: false,
          isComplete: false,
        };
        return { payload: todo };
      },
      reducer: (state, action) => {
        state.item.push(action.payload);
      },
    },
    removeTodo: (state, action) => {
      state.item = state.item.filter((el) => el.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.item = action.payload;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export const { addTodos, removeTodo } = todoReducer.actions;

// this is counter todos

const counter = createSlice({
  name: 'counter',
  initialState: { count: [] },
  reducers: {},
});

export const ownReducer = {
  todos: todoReducer.reducer,
  counter: counter.reducer,
};
