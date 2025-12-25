import { combineSlices } from '@reduxjs/toolkit';

import { myCountReducer, myTodoReducer } from '../Reducer/Reducer';

export const rootReducer = combineSlices({
  todoSlicer: myTodoReducer,
  countSlicer: myCountReducer,
});
