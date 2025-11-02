import { loadData, saveData } from '../../Storeage/LocalStorage';
import { ADD_TODO } from './Actions';
import { nanoid } from '@reduxjs/toolkit';

const initialValue = {
  todos: loadData('todo') || [],
};

export const authReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case ADD_TODO: {
      const updateState = [
        ...state.todos,
        {
          id: nanoid(),
          text: payload,
          isEdit: false,
          isComplete: false,
        },
      ];
      saveData('todo', updateState);
      return {
        ...state,
        todos: updateState,
      };
    }
    default:
      return state;
  }
};
