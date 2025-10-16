// api
import axios from 'axios';

// https://reqres.in/api

export const FetchData = async (url) => {
  try {
    let res = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1',
      },
    });
    let val = await res.data;
    return val;
  } catch (error) {
    console.log('🚀 ~ error:', error);
  }
};
