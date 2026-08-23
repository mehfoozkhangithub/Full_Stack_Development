import axios from 'axios';

export const ApiCall = axios.create({
  baseURL: 'http://localhost:3001',
});
