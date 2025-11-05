import { Load_data, save_data } from '../../Local_storage/Local_storage';
import { LOGIN_FAILURE, LOGIN_SUCCESS } from './actions';

const token = Load_data('token');

const initialState = {
  isAuth: token ? true : false,
  token: token || '',
};

export const authReducer = (state = initialState, { payload, type }) => {
  console.log('🚀 ~ payload:', payload);
  switch (type) {
    case LOGIN_SUCCESS: {
      save_data('token', payload);
      return {
        ...state,
        isAuth: true,
        token: payload,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isAuth: false,
        token: payload,
      };
    }

    default:
      return state;
  }
};
