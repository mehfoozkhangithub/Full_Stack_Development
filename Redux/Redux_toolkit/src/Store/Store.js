import { configureStore } from '@reduxjs/toolkit';

import { myReducer } from '../Reducer/Reducer';

export const myStore = configureStore({
  reducer: myReducer,
});
