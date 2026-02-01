import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '../Utils/Api';

export const increment = createAction('counter/increment');
export const decrement = createAction('counter/decrement');
export const incrementByValue = createAction('counter/incrementByValue');
export const unknow = createAction('counter/unknown');

export const randomNumber = createAction('random/number');

export const isActionWithNumberPayload = (action) => {
  // console.log('🚀 ~ action:', action);
  // it's always return bool value
  return typeof action.payload === 'number';
};

//? this is action Page we only use in createReducer

/* 

? READ

# CREATE

* EDITS

! DELETE


*/

// ? READ

export const fetchTodos = createAsyncThunk('readTodo', async () => {
  const res = await api.get('/todo');

  return res.data;
});

// # CREATE

export const addTodo = createAsyncThunk('createTodo', async (newPost) => {
  const res = await api.post('/todo', newPost);
  return res.data;
});

// ! DELETE

export const deleteTodos = createAsyncThunk('deleteTodo', async (id) => {
  await api.delete(`/todo/${id}`);
  return id;
});

// * EDITS

export const updateTodos = createAsyncThunk(
  'updateTodo',
  async ({ id, updateValue }) => {
    const res = await api.patch(`/todo/${id}`, updateValue);
    return res.data;
  }
);
