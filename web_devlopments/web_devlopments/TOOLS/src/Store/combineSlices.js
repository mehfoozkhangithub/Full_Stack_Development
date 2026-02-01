import { combineSlices } from '@reduxjs/toolkit';

import { myOwnReducer, myTodoReducers } from '../Reducer/Reducer';

export const rootSlices = combineSlices({
  count: myOwnReducer,
  todo: myTodoReducers,
});
