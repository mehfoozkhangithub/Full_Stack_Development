import { ADD_TODOS, COMPLETE_TODOS, DELETE_TODOS, EDITS_TODOS } from './Action';

const initialState = {
  todos: [],
};

export const todosReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case ADD_TODOS:
      return {
        ...state,
        todos: [...state.todos, payload],
      };

    case DELETE_TODOS:
      return {
        todos: state.todos.filter((el) => el.id != payload),
      };

    default:
      return state;
  }
};
