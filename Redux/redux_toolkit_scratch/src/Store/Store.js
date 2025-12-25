import { configureStore } from '@reduxjs/toolkit';

// import { myCountReducer } from '../Reducer/Reducer';

// export const myStore = configureStore({
//   reducer: myCountReducer,
// });

/* this is combineSlicer */

import { rootReducer } from '../Reducer/CombineSlicer';

export const myStore = configureStore({
  reducer: rootReducer,
});
