import axios from 'axios';

const END_POINT = process.env.REACT_APP_END_POINT;

export const requestApi = async (url, config) => {
  try {
    await axios({ ...config, url: `${END_POINT}${url}` });
    return 1;
  } catch (error) {
    return 0;
  }
};
