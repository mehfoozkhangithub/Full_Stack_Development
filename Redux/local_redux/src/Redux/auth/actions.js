import axios from 'axios';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';

export const REMOVE_TOKEN = 'REMOVE_TOKEN';

export const loginUser = (payload) => (dispatch) => {
  const { email, password } = payload;
  dispatch({ type: LOGIN_REQUEST });
  axios
    .post(
      'https://reqres.in/api/login',
      { email, password },
      {
        headers: {
          'x-api-key': 'reqres-free-v1',
          'Content-Type': 'application/json',
        },
      }
    )
    .then((res) => {
      console.log('🚀 ~ res:', res);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAILURE, payload: err.message });
    });
};
