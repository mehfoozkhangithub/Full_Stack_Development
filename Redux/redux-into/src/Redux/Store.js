import { legacy_createStore } from 'redux';
import { Reducer, initialValue } from './Reducer';

export const myStore = legacy_createStore(Reducer, initialValue);
