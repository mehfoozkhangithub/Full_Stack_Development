import { legacy_createStore } from 'redux';

import { CounterReducer } from '../Reducer/Reducer';
import * as types from '../Reducer/Action';

export const myStore = legacy_createStore(CounterReducer, { count: 10 });

const newReducer = (state, action) => {
  console.log('🚀 ~ action:', action);

  if (action.type.startsWith('@@redux/REPLACE')) {
    return { count: 100 };
  }

  switch (action.type) {
    // * double
    case types.DOUBLE:
      return {
        ...state,
        count: state.count * 2,
      };

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
    default:
      return state;
  }
};

setTimeout(() => {
  myStore.replaceReducer(newReducer);
  myStore.dispatch({ type: types.DOUBLE });
}, 10000);

const observer = myStore['@@observable']();

const observable = {
  next: (state) =>
    console.log(
      'this is observer state form the function of observation method',
      state
    ),
};

observer.subscribe(observable);
