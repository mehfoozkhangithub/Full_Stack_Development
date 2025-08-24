import { legacy_createStore } from './../../node_modules/redux/src/createStore';
import { reducer } from './Reducer';

// useREducer(reducer,initialState)
const store = legacy_createStore(reducer, { count: 15 })

export { store };
