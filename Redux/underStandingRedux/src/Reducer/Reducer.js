import { ADD_DATA, REDUCE_DATA } from './Action';

export const reducer = (oldState, actions) => {
  switch (actions.type) {
    case ADD_DATA:
      return {
        ...oldState,
        count: oldState.count + 1,
      };
    case REDUCE_DATA:
      return {
        ...oldState,
        count: oldState.count - 1,
      };
    default:
      return oldState;
  }
};
