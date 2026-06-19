/* eslint-disable react-refresh/only-export-components */
//state management

import { useEffect, useReducer } from 'react';

/* 
useReducer
*/

// this is initial Value
const initialState = {
  data: [],
  isError: false,
  isLoading: false,
};

// action

const ACTIONS = {
  API_Request: 'API_Request',
  Fetch_Data: 'Fetch_Data',
  ERROR: 'Error',
};

// reducer (logic)

const Reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.API_Request: {
      return { ...state, isLoading: true, data: [] };
    }
    case ACTIONS.Fetch_Data: {
      return { ...state, isLoading: false, data: payload };
    }
    case ACTIONS.ERROR: {
      return { ...state, isError: true, isLoading: false };
    }
    default:
      return state;
  }
};

// client silde [fetch hook]
export const useFetch = (url) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    dispatch({ type: ACTIONS.API_Request });
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        dispatch({ type: ACTIONS.Fetch_Data, payload: res });
      })
      .catch((err) => {
        console.log(`🚀 ~ err:`, err);
        dispatch({ type: ACTIONS.ERROR });
      });
  }, [url]);

  return state;
};
