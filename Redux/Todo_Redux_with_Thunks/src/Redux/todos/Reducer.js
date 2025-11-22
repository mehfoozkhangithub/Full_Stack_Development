import * as abrakadabra from './ActionsTypes';

const initialState = {
  todos: [],
  isLoading: false,
  isError: false,
};

export const todoReducer = (oldState = initialState, { type, payload }) => {
  // console.log('🚀 ~ payload : insdide-reducer::', payload);
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

    //* here we are using add-todo...

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
        // todos: [...oldState.todos, payload],
      };
    }

    case abrakadabra.ADD_TODO_FAILURE: {
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };
    }

    //& here we are using edit-todo...

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
        todos: oldState.todos.map((el) =>
          el.id === payload.id ? payload.data : el
        ),
      };
    }

    case abrakadabra.EDITS_TODO_FAILURE: {
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };
    }
    //! here we are using delete-todo...

    case abrakadabra.DELETE_TODO_REQUEST: {
      return {
        ...oldState,
        isLoading: true,
        isError: false,
      };
    }

    case abrakadabra.DELETE_TODO_SUCCESS: {
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        todos: oldState.todos.filter((el) => el.id != payload),
      };
    }

    case abrakadabra.DELETE_TODO_FAILURE: {
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
