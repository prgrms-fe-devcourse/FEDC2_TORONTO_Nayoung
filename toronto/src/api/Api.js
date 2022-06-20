import axios from 'axios';
import Send from '.';
import { getToken, onSaveToken } from '@/lib/Login.js';

export const postLoginApi = async (email, password) => {
  const res = await Send.post('/login', {
    email,
    password,
  });
  onSaveToken(res.data.token);
  return res.data.user;
};

export const postSignUpApi = async (email, fullName, password) => {
  const res = await Send.post('/signup', {
    email,
    fullName,
    password,
  });
  onSaveToken(res.data.token);
  return res.data.user;
};

export const postCommentApi = async (commentBody) => {
  const token = getToken();
  await axios({
    method: 'POST',
    url: `${process.env.REACT_APP_END_POINT}/comments/create`,
    data: commentBody,
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
};

export const getAuthUser = async () => {
  const res = await Send.get('/auth-user');
  return res.data;
};

export const postLogoutApi = async () => {
  const res = await Send.post('/logout');
  return res;
};

export const getPostApi = async (postId) => {
  if (!postId) return;
  const res = await Send.get(`/posts/${postId}`);
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
  return res.data;
};

// 내 정보 변경
export const putUpdateUserApi = async (fullName, username) => {
  const res = await Send.put('/settings/update-user', {
    fullName,
    username,
  });
  return res.data;
};

// 비밀번호 변경
export const putUpdatePasswordApi = async (password) => {
  const res = await Send.put('/settings/update-password', {
    password,
  });
  return res;
};

// EditProfile 내 게시물 임시 더미데이터 API
export const getUserPostApi = async () => {
  const res = await axios.get('/data/postDummy.json');
  return res;
};

// EditProfile 좋아요 게시물 임시 더미데이터 API
export const getUserDummyApi = async () => {
  const res = await axios.get('/data/userDummy.json');
  return res;
};

// 전체 posts 목록 불러오기
export const getPostsApi = async () => {
  const res = await Send.get('/posts');
  return res;
};

// 채널 목록 불러오기
export const getChannels = async () => {
  const res = await Send.get('/channels');
  return res;
};

// 특정 채널 목록 불러오기
export const getChannelsName = async (channelName) => {
  const res = await Send.get(`/channels/${channelName}`);
  return res;
};

// 특정 채널의 포스트 목록
export const getPostsChannel = async (channelId) => {
  const res = await Send.get(`posts/channel/${channelId}`);
  return res;
};

// 특정 채널의 포스트 목록 offset, limit으로 불러오기
export const getPostsSlice = async (channelId, offset, limit) => {
  const res = await Send.get(`posts/channel/${channelId}`, {
    params: {
      offset,
      limit,
    },
  });
  return res;
};

// 글 쓰기
export const postPost = async (formData) => {
  const res = await Send.post(`posts/create`, formData);
  return res;
};

// 포스트 삭제
export const deletePost = async (postId) => {
  if (!postId) return;
  const res = await Send.delete(`posts/delete`, {
    data: {
      id: postId,
    },
  });
  return res;
};

// 모든 검색 결과 불러오기
export const getSearchAll = async (value) => {
  const res = await Send.get(`/search/all/${value}`);
  return res;
};

// 댓글 삭제
export const deleteCommentApi = async (commentId) => {
  if (!commentId) return;
  const res = await Send.delete(`comments/delete`, {
    data: {
      id: commentId,
    },
  });
  return res;
};
