import * as abrakadabra from './ActionsTypes';

const initialState = {
  todos: [],
  isLoading: false,
  isError: false,
};

export const todoReducer = (oldState = initialState, { type, payload }) => {
  switch (type) {
    //# here we are doing get-todo...
    case abrakadabra.GET_TODO_REQUEST: {
      return {
        ...oldState,
        isLoading: true,
        isError: false,
      };
    }
    case abrakadabra.GET_TODO_SUCCESS: {
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        todos: payload,
      };
    }
    case abrakadabra.GET_TODO_FAILURE: {
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };
    }

    //$ here we are using add-todo...

    case abrakadabra.ADD_TODO_REQUEST: {
      return {
        ...oldState,
        isLoading: true,
        isError: false,
      };
    }
    case abrakadabra.ADD_TODO_SUCCESS: {
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        todos: [...oldState.todos, payload],
      };
    }
    case abrakadabra.ADD_TODO_FAILURE: {
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };
    }

    //& here we are using add-todo...

    case abrakadabra.EDITS_TODO_REQUEST: {
      return {
        ...oldState,
        isLoading: true,
        isError: false,
      };
    }
    case abrakadabra.EDITS_TODO_SUCCESS: {
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        todos: payload,
      };
    }
    case abrakadabra.EDITS_TODO_FAILURE: {
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };
    }

    default:
      return oldState;
  }
};
