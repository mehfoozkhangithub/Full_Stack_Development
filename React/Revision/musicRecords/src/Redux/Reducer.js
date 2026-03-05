import * as types from './Action';

const initialState = {
  musicRecords: [],
  isLoading: false,
  isError: { status: false, msg: null },
};

const Reducer = (oldState = initialState, { payload, type }) => {
  switch (type) {
    case types.ADD_MUSIC_RQUEST:
      return {
        ...oldState,
        isLoading: true,
      };

    case types.ADD_MUSIC_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        musicRecords: payload,
      };

    case types.ADD_MUSIC_FAILUERS:
      return {
        ...oldState,
        isLoading: false,
        isError: { status: true, msg: payload },
      };

    default:
      return oldState;
  }
};

export { Reducer };
