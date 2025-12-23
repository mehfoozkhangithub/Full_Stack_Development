import { configureStore } from '@reduxjs/toolkit';

import { myReducers } from '../Reducer/Reducer';

export const myStore = configureStore({
  reducer: myReducers,
});
