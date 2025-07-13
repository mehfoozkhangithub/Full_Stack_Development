export const Reducers = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };

    case 'DECREMENT':
      return { count: state.count - 1 };

    case 'RESET':
      return { count: 0 };

    case 'IncrementByValue':
      return { count: state.count + action.payload };

    case 'decrementByValue':
      return { count: state.count - action.payload };

    default:
      return state;
  }
};