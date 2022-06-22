import axios from 'axios';
import { getToken } from '../lib/Login.js';

export const requestApi = async (url, config) => {
  try {
    await axios({ ...config, url: `${process.env.REACT_APP_END_POINT}${url}` });
    return 1;
  } catch (error) {
    return 0;
  }
};

const instance = axios.create({
  baseURL: process.env.REACT_APP_END_POINT,
  headers: { 'Content-Type': 'application/json;charset=UTF-8' },
  timeout: 10000,
});

instance.interceptors.request.use(
  (config) => {
    const token = getToken();
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default instance;
