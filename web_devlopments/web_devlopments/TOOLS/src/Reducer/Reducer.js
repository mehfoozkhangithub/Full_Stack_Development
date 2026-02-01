/* eslint-disable no-unused-vars */
import {
  createReducer,
  createSlice,
  nanoid,
  createSelector,
} from '@reduxjs/toolkit';

import * as action_type from './Actions';

export const myOwnReducer = createReducer(
  { value: 0, sumOfNumberPayload: 0, unHandleAction: 0 },
  (builder) => {
    builder
      .addCase(action_type.increment, (state, action) => {
        state.value++;
        // state.value += action.payload;
      })
      .addCase(action_type.decrement, (state, action) => {
        state.value--;
        // state.value -= action.payload;
      })
      .addMatcher(action_type.isActionWithNumberPayload, (state, action) => {
        state.sumOfNumberPayload += action.payload;
      })
      .addDefaultCase((state, action) => {
        state.unHandleAction += 1;
      });
  }
);

const myOwnTodoReducer = createSlice({
  name: 'todos',
  initialState: { todoItems: [], isLoading: false, isError: null },
  reducers: {
    addTodos: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        isEdits: false,
        isComplete: false,
      };
      state.todoItems.push(todo);
    },
  },
  selectors: {
    todo: (state) => state.todoItems,
  },
  extraReducers: (builder) => {
    builder
      //fetch/ read
      .addCase(action_type.fetchTodos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(action_type.fetchTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todoItems = action.payload;
      })
      .addCase(action_type.fetchTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      //# created
      .addCase(action_type.addTodo.fulfilled, (state, action) => {
        state.todoItems.push(action.payload);
      })
      //* edits
      .addCase(action_type.updateTodos.fulfilled, (state, action) => {
        const index = state.todoItems.findIndex(
          (value) => value.id === action.payload.id
        );
        state.todoItems[index] = action.payload.values;
      })
      //! delete
      .addCase(action_type.deleteTodos.fulfilled, (state, action) => {
        state.todoItems = state.todoItems.filter(
          (el) => el.id !== action.payload
        );
      });
  },
});

export const { addTodos } = myOwnTodoReducer.actions;

export const { todo } = myOwnTodoReducer.getSelectors((value) => value.todo);

export const myTodoReducers = myOwnTodoReducer.reducer;
