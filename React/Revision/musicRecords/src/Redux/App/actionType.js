import * as types from './Action';

import axios from 'axios';

const getMusicRequest = () => {
  return {
    type: types.ADD_MUSIC_RQUEST,
  };
};

const getMusicSuccess = (queryData) => (dispatch) => {
  dispatch(getMusicRequest());

  return axios
    .get('http://localhost:8080/albums', queryData)
    .then((res) => {
      return dispatch({ type: types.ADD_MUSIC_SUCCESS, payload: res.data });
    })
    .catch((err) =>
      dispatch({
        type: types.ADD_MUSIC_FAILUERS,
        payload: err,
      }),
    );
};

export { getMusicSuccess };
