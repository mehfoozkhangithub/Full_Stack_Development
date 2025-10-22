import { ADD_TODO, DELETE_TODO } from './Actions';
import { nanoid } from '@reduxjs/toolkit';

export const initialValue = [];

export const Reducer = (state, action) => {
  console.log('🚀 ~ state:', state);
  console.log('🚀 ~ action:', action);
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: nanoid(),
          text: action.payload,
          isEdit: false,
          isComplete: false,
        },
      ];

    default:
      return state;
  }
};
