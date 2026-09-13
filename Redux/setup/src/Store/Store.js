import { legacy_createStore } from 'redux';

import { Reducer } from '../Reducer/Reducer';

const initialState = { count: 0 };

export const myStore = legacy_createStore(Reducer, initialState);
