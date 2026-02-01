import * as types from './Action';

import {
  dataLoad,
  dataSave,
  removedata,
} from '../../LocalStorage/localStorage';

const tokenKeys = 'token';

const tokenValue = dataLoad(tokenKeys);

const initialValue = {
  token: tokenValue || '',
  // isAuth: true,
  isAuth: tokenValue ? true : false,
  isError: null,
  isLoading: false,
};

export const authReducer = (state = initialValue, action) => {
  console.log('🚀 ~ action:', action);
  switch (action.type) {
    case types.REMOVE_TOKEN: {
      removedata(tokenKeys);
      return {
        ...state,
        token: '',
        isAuth: false,
      };
    }
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case types.LOGIN_SUCCESSFULL: {
      // if (action.payload === 'wrong_credentials') return state;

      dataSave(tokenKeys, action.payload);

      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: action.payload,
        isError: null,
      };
    }

    case types.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };

    default:
      return state;
  }
};
