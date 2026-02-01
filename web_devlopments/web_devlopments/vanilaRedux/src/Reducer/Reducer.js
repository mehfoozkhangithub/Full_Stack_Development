// import {DECREMENT,INCREMENT} from "./Action"
import * as types from './Action';

export const CounterReducer = (state, action) => {
  switch (action.type) {
    // # increment
    case types.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    // ! decrement
    case types.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    /* 
        continue
        break
        return        
        */

    default:
      return state;
  }
};
