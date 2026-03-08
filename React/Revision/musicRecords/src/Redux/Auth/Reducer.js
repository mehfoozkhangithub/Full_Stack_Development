import * as types from './Actions';

import { loadData, saveData } from '../../Data/LocalStorage';

const token_key = 'token';
const token = loadData(token_key);

const initialValue = {
  isAuth: token ? true : false,
  token: token || '',
  isAuthLoading: false,
  isAuthError: false,
};

export const Reducer = (oldState = initialValue, { type, payload }) => {
  switch (type) {
    case types.POST_LOGIN_REQUEST:
      return {
        ...oldState,
        isAuthLoading: true,
      };

    case types.POST_LOGIN_SUCCESS:
      saveData(token_key, payload.data.token);
      return {
        ...oldState,
        isAuthLoading: false,
        isAuthError: false,
        token: payload.data.token,
        isAuth: true,
      };

    case types.POST_LOGIN_FAILURE:
      return {
        ...oldState,
        isAuthLoading: false,
        isAuthError: true,
        token: '',
        isAuth: false,
      };

    default:
      return oldState;
  }
};
