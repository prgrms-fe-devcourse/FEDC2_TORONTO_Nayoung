import axios from 'axios';
import Send from '.';
import { getToken, onSaveToken } from '@/lib/Login.js';

export const postLoginApi = async (email, password) => {
  const res = await serverless({
    method: 'POST',
    url: '/login',
    body: {
      email,
      password,
    },
  });
  onSaveToken(res.data.token);
  return res.data.user;
};

export const postSignUpApi = async (email, fullName, password) => {
  const res = await serverless({
    method: 'POST',
    url: '/signup',
    body: {
      email,
      fullName,
      password,
    },
  });
  onSaveToken(res.data.token);
  return res.data.user;
};

export const postCommentApi = async (commentBody) => {
  const token = getToken();
  const res = serverless({
    method: 'POST',
    url: `/comments/create`,
    body: commentBody,
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
  return res;
};

export const getAuthUser = async () => {
  const token = getToken();
  const res = await serverless({
    method: 'GET',
    url: '/auth-user',
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
  return res.data;
};

export const postLogoutApi = async () => {
  const res = await serverless({
    method: 'POST',
    url: '/logout',
  });
  return res;
};

export const getPostApi = async (postId) => {
  if (!postId) return;
  const res = await serverless({
    method: 'GET',
    url: `/posts/${postId}`,
  });
  return res;
};

export const getUsersApi = async ({ offset, limit }) => {
  const res = await serverless({
    method: 'GET',
    url: `/users/get-users?offset=${offset}&limit=${limit}`,
  });
  return res;
};

export const getOnlineUsers = async () => {
  const res = await serverless({
    method: 'GET',
    url: '/online-users',
  });
  return res;
};

// 사용자 정보
export const getUserApi = async (userId) => {
  const res = await serverless({
    method: 'GET',
    url: `/users/${userId}`,
  });
  return res;
};

// 프로필 이미지 변경 및 커버 이미지 변경
export const postUploadPhotoApi = async (bodyFormData) => {
  const token = getToken();
  // 원래 코드
  const res = await axios({
    method: 'post',
    url: `${process.env.REACT_APP_END_POINT}/users/upload-photo`,
    data: bodyFormData,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

// 내 정보 변경
export const putUpdateUserApi = async (fullName, username) => {
  // 요청은 잘 되고 프론트 url 변경해야 할 듯?
  const token = getToken();
  const res = await serverless({
    method: 'PUT',
    url: '/settings/update-user',
    body: {
      fullName,
      username,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

// 비밀번호 변경
export const putUpdatePasswordApi = async (password) => {
  // 요청은 잘 오고, 프론트 url 처리 필요
  const token = getToken();
  const res = await serverless({
    method: 'PUT',
    url: '/settings/update-password',
    body: {
      password,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

// 전체 posts 목록 불러오기
export const getPostsApi = async () => {
  const res = await serverless({
    method: 'GET',
    url: '/posts',
  });
  return res;
};

// 채널 목록 불러오기
export const getChannels = async () => {
  const res = await serverless({
    method: 'GET',
    url: '/channels',
  });
  return res;
};

// 특정 채널 목록 불러오기
export const getChannelsName = async (channelName) => {
  const res = await serverless({
    method: 'GET',
    url: `/channels/${channelName}`,
  });
  return res;
};

// 특정 채널의 포스트 목록
export const getPostsChannel = async (channelId) => {
  const res = await serverless({
    method: 'GET',
    url: `posts/channel/${channelId}`,
  });
  return res;
};

// 특정 채널의 포스트 목록 offset, limit으로 불러오기
export const getPostsSlice = async (channelId, offset, limit) => {
  const res = await serverless({
    method: 'GET',
    url: `/posts/channel/${channelId}?offset=${offset}&limit=${limit}`,
  });
  return res;
};

// 글 쓰기 폼데이터 나중에
export const postPost = async (formData) => {
  const res = await Send.post(`posts/create`, formData);
  return res;
};

export const deletePost = async (postId) => {
  const token = getToken();
  if (!postId) return;
  const res = await serverless({
    method: 'DELETE',
    url: `/posts/delete`,
    body: {
      id: postId,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

// 모든 검색 결과 불러오기
export const getSearchAll = async (value) => {
  const res = await serverless({
    method: 'GET',
    url: `/search/all/${value}`,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
  return res;
};

export const deleteCommentApi = async (commentId) => {
  if (!commentId) return;
  const token = getToken();
  const res = await serverless({
    method: 'DELETE',
    url: '/comments/delete',
    body: {
      id: commentId,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

export const deleteLikeApi = async (likeId) => {
  if (!likeId) return;
  const token = getToken();
  const res = await serverless({
    method: 'DELETE',
    url: '/likes/delete',
    body: {
      id: likeId,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

export const postLikeApi = async (postId) => {
  if (!postId) return;
  const token = getToken();
  const res = await serverless({
    method: 'POST',
    url: '/likes/create',
    body: {
      postId,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

export const serverless = async (options) => {
  try {
    const res = await fetch(`/.netlify/functions/request`, {
      method: 'POST',
      body: JSON.stringify(options),
    });
    return await res.json();
  } catch (e) {
    console.log('serverless에서 request로 넘어갈 때 오류남 ' + e);
  }
};
