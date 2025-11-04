/* eslint-disable no-unused-vars */
import { LOGIN_FAILURE, LOGIN_SUCCESS } from './actions';

const initialState = {
  //   token: token ? true : false,
};

export const authReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return {};

    default:
      return state;
  }
};
