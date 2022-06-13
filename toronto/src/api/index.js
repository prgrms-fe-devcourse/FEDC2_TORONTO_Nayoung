import axios from 'axios';

const END_POINT = 'http://kdt.frontend.2nd.programmers.co.kr:5002';

export const requestApi = async (url, config) => {
  try {
    await axios({ ...config, url: `${END_POINT}${url}` });
    return 1;
  } catch (error) {
    return 0;
  }
};
