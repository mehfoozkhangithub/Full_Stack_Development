import { legacy_createStore } from 'redux';

import { DOUBLE, ADD_DATA, REDUCE_DATA } from './Action';
import { reducer } from './Reducer';

export const ownStore = legacy_createStore(reducer, { count: 10 });

// ----------- DEMO FOR replaceReducer() -----------------
const newReducer = (state = { count: 100 }, action) => {
  switch (action.type) {
    case DOUBLE:
      return { ...state, count: state.count * 2 };

    case ADD_DATA:
      return {
        ...state,
        count: state.count + 1,
      };
    case REDUCE_DATA:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

// after 10 seconds, we replace reducer dynamically
setTimeout(() => {
  console.log('🌀 Reducer replaced dynamically!');
  ownStore.replaceReducer(newReducer);
  ownStore.dispatch({ type: DOUBLE });
  console.log('🆕 State after replaceReducer:', ownStore.getState());
}, 10000);

// ----------- DEMO FOR @@observable() -----------------
const observable = ownStore['@@observable']();
const observer = {
  next: (state) => console.log('📡 Observable -> new state:', state),
};
observable.subscribe(observer);
