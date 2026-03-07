import axios from 'axios';
import * as types from './Actions';

const post_login_request = () => {
  return {
    type: types.POST_LOGIN_REQUEST,
  };
};

const post_login_success = (value) => {
  return {
    type: types.POST_LOGIN_SUCCESS,
    payload: value,
  };
};

const post_login_failure = (value) => {
  return {
    type: types.POST_LOGIN_FAILURE,
    payload: value,
  };
};

const login = (userData) => (dispatch) => {
  dispatch(post_login_request());
  return axios({
    method: 'post',
    baseURL: 'https://reqres.in',
    url: '/api/login',
    data: userData,
    headers: {
      'Content-Type': 'Application/json',
    },
  })
    .then((res) => dispatch(post_login_success(res)))
    .catch((err) => dispatch(post_login_failure(err)));
};

export { login, post_login_failure, post_login_success, post_login_request };
