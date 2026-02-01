import {
  DELETE_TODO_ITEMS,
  ADD_TODO_ITEMS,
  EDITS_TODO_ITEMS,
  LOADING_TODO_ITEMS,
  ERROR_TODO_ITEMS,
} from './Action';
import { initialValue } from './Store';

export const reducer = (state = initialValue, action) => {
  console.log('🚀 ~ action:', action);
  switch (action.type) {
    case LOADING_TODO_ITEMS:
      return { ...state, isLoading: true };

    case ERROR_TODO_ITEMS:
      return { ...state, isLoading: false, isError: true };

    case ADD_TODO_ITEMS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        items: [
          ...state.items,
          {
            id: Date.now(),
            text: action.payload,
            isEdits: false,
            isComplete: false,
          },
        ],
      };

    case EDITS_TODO_ITEMS:
      if (action.payload.updatedText && action.payload.id) {
        return {
          ...state,
          items: state.items.map((el) =>
            el.id === action.payload.id
              ? {
                  ...el,
                  isEdits: !el.isEdits,
                  text: action.payload.updatedText,
                }
              : el
          ),
        };
      } else {
        return {
          ...state,
          items: state.items.map((el) =>
            el.id === action.payload ? { ...el, isEdits: !el.isEdits } : el
          ),
        };
      }

    case DELETE_TODO_ITEMS:
      return {
        ...state,
        items: state.items.filter((el) => el.id != action.payload),
      };

    default:
      return state;
  }
};
