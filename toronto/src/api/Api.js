import axios from 'axios';
import Send from '.';
import { getToken, onSaveToken } from '@/lib/Login.js';

export const postLoginApi = async ({ email, password }) => {
  const res = await Send.post('/login', {
    email,
    password,
  });
  onSaveToken(res.data.token);
  return res;
};

export const postSignUpApi = async ({ email, fullName, password }) => {
  const res = await Send.post('/signup', {
    email,
    fullName,
    password,
  });
  return res;
};

export const getAuthUser = async () => {
  const res = await Send.get('/auth-user');
  return res;
};

export const postLogout = async () => {
  const res = await Send.post('/logout');
  return res;
};

export const getUsersApi = async ({ offset, limit }) => {
  const res = await Send.get('/users/get-users', { offset, limit });
  return res;
};

export const getOnlineUsers = async () => {
  const res = await Send.get('/online-users');
  return res;
};

// 사용자 정보
export const getUserApi = async (userId) => {
  const res = await Send.get(`/users/${userId}`);
  return res;
};

// 프로필 이미지 변경 및 커버 이미지 변경
export const postUploadPhotoApi = async (bodyFormData) => {
  const token = getToken();
  const res = await axios({
    method: 'post',
    url: `${process.env.REACT_APP_END_POINT}/users/upload-photo`,
    data: bodyFormData,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

// 내 정보 변경
export const putUpdateUserApi = async (fullName, username) => {
  const res = await Send.put('/settings/update-user', {
    fullName,
    username,
  });
  return res;
};

// 비밀번호 변경
export const putUpdatePasswordApi = async (password) => {
  const res = await Send.put('/settings/update-password', {
    password,
  });
  return res;
};

// TODO: 채널부터 추가
