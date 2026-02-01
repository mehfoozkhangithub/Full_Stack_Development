import { configureStore } from '@reduxjs/toolkit';

import { rootSlices } from './combineSlices';

export const myOwnStore = configureStore({
  reducer: rootSlices,
});
