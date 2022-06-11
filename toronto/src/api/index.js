import axios from 'axios';

export const requestApi = async (config) => {
  try {
    await axios({ ...config });
    return 1;
  } catch (error) {
    return 0;
  }
};
