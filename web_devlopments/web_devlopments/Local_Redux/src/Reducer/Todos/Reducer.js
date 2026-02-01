import * as types from './Action';

const initialValue = { todo: [] };

export const todoReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case types.ADDTODOS: {
      if (payload.trim() === '') {
        return state;
      } else {
        const todoValue = {
          id: Date.now(),
          text: payload,
          isEdit: false,
          isComplete: false,
        };
        return {
          ...state,
          todo: [...state.todo, todoValue],
        };
      }
    }

    case types.DELETETODOS: {
      return {
        ...state,
        todo: state.todo.filter((el) => el.id !== payload),
      };
    }

    case types.EDITTODOS: {
      return {
        ...state,
        todo: state.todo.map((el) =>
          el.id === payload ? { ...el, isEdit: true } : el
        ),
      };
    }
    case types.CONFIRMTODOS: {
      return {
        ...state,
        todo: state.todo.map((el) =>
          el.id === payload.id
            ? { ...el, isEdit: false, text: payload.text }
            : el
        ),
      };
    }
    case types.CANCELTODOS: {
      return {
        ...state,
        todo: state.todo.map((el) =>
          el.id === payload ? { ...el, isEdit: false } : el
        ),
      };
    }

    default:
      return state;
  }
};
