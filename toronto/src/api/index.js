import axios from 'axios';

export const requestApi = async (config) => {
  try {
    const res = await axios({ ...config });
    console.log(res);
    return res;
  } catch (error) {
    console.warn(error);
  }
};
