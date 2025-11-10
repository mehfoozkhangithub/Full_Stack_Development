import {
  delete_token,
  Load_data,
  save_data,
} from '../../Local_storage/Local_storage';
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REMOVE_TOKEN,
} from './actions';

let token_var = 'token';

const token = Load_data(token_var);

const initialState = {
  isAuth: token ? true : false,
  token: token || '',
  isError: false,
  isLoading: false,
};

export const authReducer = (state = initialState, { payload, type }) => {
  console.log('🚀 ~ state:', state);
  console.log('🚀 ~ payload:', payload);
  switch (type) {
    case REMOVE_TOKEN: {
      delete_token(token_var);
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        token: '',
      };
    }

    case LOGIN_SUCCESS: {
      save_data('token', payload);
      return {
        ...state,
        isAuth: true,
        token: payload,
        isLoading: true,
        isError: false,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isAuth: false,
        token: '',
        isError: true,
        isLoading: false,
      };
    }
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    default:
      return state;
  }
};
