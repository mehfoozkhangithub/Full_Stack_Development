import { configureStore } from '@reduxjs/toolkit';

import rootReducer from '../Redux_config/Reducer';

export const store = configureStore({ reducer: rootReducer });
// The store now has redux-thunk added and the Redux DevTools Extension is turned on
