import axios from 'axios';
import Send from '.';
import { onSaveToken } from '../lib/Login.js';

export const postLogin = async ({ email, password }) => {
  const res = await Send.post('/login', {
    email,
    password,
  });
  onSaveToken(res.data.token); //save token in cookie
  return res;
};

export const postSignUp = async ({ email, fullName, password }) => {
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

export const getUsers = async ({ offset, limit }) => {
  const res = await Send.get('/auth-user', { params: { offset, limit } });
  return res;
};

export const getOnlineUsers = async () => {
  const res = await Send.get('/online-users');
  return res;
};

// 사용자 정보
export const getUser = async (userId) => {
  const res = await Send.get('/users/userId');
  return res;
};

// 프로필 이미지 변경 및 커버 이미지 변경
/* bodyFormData
  {
    isCover: false,
    image: Binary
  }
*/
export const postUploadPhoto = async (bodyFormData) => {
  const res = await axios({
    method: 'post',
    url: '/users/upload-photo',
    data: bodyFormData,
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return res;
};

// 내 정보 변경
export const putUpdateUser = async (fullName, username) => {
  const res = await Send.put('/settings/update-user', {
    params: { fullName, username },
  });
  return res;
};

// 비밀번호 변경
export const putUpdatePassword = async (password) => {
  const res = await Send.put('/settings/update-password', {
    params: { password },
  });
  return res;
};

// TODO: 채널부터 추가
