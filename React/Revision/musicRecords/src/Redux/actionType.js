import * as types from './Action';

import axios from 'axios';

const getMusicRequest = () => {
  return {
    type: types.ADD_MUSIC_RQUEST,
  };
};

const getMusicSuccess = (dispatch) => {
  dispatch(getMusicRequest());

  return axios
    .get('http://localhost:8080/albums')
    .then((res) => dispatch({ type: types.ADD_MUSIC_SUCCESS, payload: res }))
    .catch((err) =>
      dispatch({
        type: types.ADD_MUSIC_FAILUERS,
        payload: err,
      }),
    );
};

export { getMusicSuccess };
