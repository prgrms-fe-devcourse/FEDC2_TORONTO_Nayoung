import React, { createContext, useReducer, useContext } from 'react';
import {
  postSignUpApi,
  getUsersApi,
  getUserApi,
  postLoginApi,
  postUploadPhotoApi,
  getAuthUser,
  putUpdateUserApi,
  postLogoutApi,
} from '@/api/Api';
import {
  createAsyncHandler,
  initialAsyncState,
} from '@/utils/asyncActionUtils';

const initialState = {
  users: initialAsyncState,
  user: initialAsyncState,
};

const signUpHandler = createAsyncHandler('POST_SIGNUP', 'user');
const usersHandler = createAsyncHandler('GET_USERS', 'users');
const userHandler = createAsyncHandler('GET_USER', 'user');
const loginHandler = createAsyncHandler('POST_LOGIN', 'user');
const logoutHandler = createAsyncHandler('POST_LOGOUT', 'user');
const authHandler = createAsyncHandler('GET_AUTH_USER', 'user');
const updateHandler = createAsyncHandler('PUT_UPDATE_USER', 'user');
const uploadProfileImageHandler = createAsyncHandler(
  'POST_PROFILE_IMAGE',
  'user',
);

const usersReducer = (state, action) => {
  switch (action.type) {
    case 'POST_SIGNUP':
    case 'POST_SIGNUP_SUCCESS':
    case 'POST_SIGNUP_ERROR':
      return signUpHandler(state, action);
    case 'GET_USERS':
    case 'GET_USERS_SUCCESS':
    case 'GET_USERS_ERROR':
      return usersHandler(state, action);
    case 'GET_USER':
    case 'GET_USER_SUCCESS':
    case 'GET_USER_ERROR':
      return userHandler(state, action);
    case 'POST_LOGIN':
    case 'POST_LOGIN_SUCCESS':
    case 'POST_LOGIN_ERROR':
      return loginHandler(state, action);
    case 'POST_LOGOUT':
    case 'POST_LOGOUT_SUCCESS':
    case 'POST_LOGOUT_ERROR':
      return logoutHandler(state, action);
    case 'GET_AUTH_USER':
    case 'GET_AUTH_USER_SUCCESS':
    case 'GET_AUTH_USER_ERROR':
      return authHandler(state, action);
    case 'PUT_UPDATE_USER':
    case 'PUT_UPDATE_USER_SUCCESS':
    case 'PUT_UPDATE_USER_ERROR':
      return updateHandler(state, action);
    case 'POST_PROFILE_IMAGE':
    case 'POST_PROFILE_IMAGE_SUCCESS':
    case 'POST_PROFILE_IMAGE_ERROR':
      return uploadProfileImageHandler(state, action);

    default:
      throw new Error(`Unhanded action type: ${action.type}`);
  }
};

const UsersStateContext = createContext();
const UsersDispatchContext = createContext();

export default function UsersProvider({ children }) {
  const [state, dispatch] = useReducer(usersReducer, initialState);
  return (
    <UsersStateContext.Provider value={state}>
      <UsersDispatchContext.Provider value={dispatch}>
        {children}
      </UsersDispatchContext.Provider>
    </UsersStateContext.Provider>
  );
}

// state 조회 커스텀 Hook
export const useUsersState = () => {
  const state = useContext(UsersStateContext);
  if (!state) {
    throw new Error('Cannot find UsersProvider');
  }
  return state;
};

// dispatch 사용할 수 있게 해주는 커스텀 Hook
export const useUsersDispatch = () => {
  const dispatch = useContext(UsersDispatchContext);
  if (!dispatch) {
    throw new Error('Cannot find UsersProvider');
  }
  return dispatch;
};

// postSignUpAPI 연동
export async function postSignUp(dispatch, email, fullName, password) {
  dispatch({ type: 'POST_SIGNUP' });
  try {
    const response = await postSignUpApi({
      email: email,
      fullName: fullName,
      password: password,
    });
    dispatch({ type: 'POST_SIGNUP_SUCCESS', data: response.data.user });
    return response;
  } catch (e) {
    dispatch({ type: 'POST_SIGNUP_ERROR', error: e });
  }
}

// getUsersAPI 연동
export async function getUsers(dispatch) {
  dispatch({ type: 'GET_USERS' });
  try {
    const response = getUsersApi();
    dispatch({ type: 'GET_USERS_SUCCESS', data: response.data });
  } catch (e) {
    dispatch({ type: 'GET_USERS_ERROR', error: e });
  }
}
// getUserAPI 연동
export async function getUser(dispatch, id) {
  dispatch({ type: 'GET_USER' });
  try {
    const response = getUserApi(id);
    dispatch({ type: 'GET_USER_SUCCESS', data: response.data });
  } catch (e) {
    dispatch({ type: 'GET_USER_ERROR', error: e });
  }
}

// postLoginAPI 연동
export async function postLogin(dispatch, email, password) {
  dispatch({ type: 'POST_LOGIN' });
  try {
    const response = await postLoginApi({
      email: email,
      password: password,
    });
    dispatch({ type: 'POST_LOGIN_SUCCESS', data: response.data.user });
    return response;
  } catch (e) {
    dispatch({ type: 'POST_LOGIN_ERROR', error: e });
  }
}

//postLogoutAPI 연동
export async function postLogout(dispatch) {
  dispatch({ type: 'POST_LOGOUT' });
  try {
    const response = await postLogoutApi();
    dispatch({ type: 'POST_LOGOUT_SUCCESS', data: null });
    return response;
  } catch (e) {
    dispatch({ type: 'POST_LOGOUT_ERROR', error: e });
  }
}

// getAuthUserAPI 연동
export async function getAuth(dispatch) {
  dispatch({ type: 'GET_AUTH_USER' });
  try {
    const response = await getAuthUser();
    dispatch({ type: 'GET_AUTH_USER_SUCCESS', data: response.data });
    return response;
  } catch (e) {
    dispatch({ type: 'GET_AUTH_USER_ERROR', error: e });
  }
}

export async function putUpdateUser(dispatch, fullName, username) {
  dispatch({ type: 'PUT_UPDATE_USER' });
  try {
    const response = await putUpdateUserApi(fullName, username);
    dispatch({ type: 'PUT_UPDATE_USER_SUCCESS', data: response.data });
    alert('성명이 성공적으로 바뀌었습니다!');
  } catch (e) {
    dispatch({ type: 'PUT_UPDATE_USER_ERROR', error: e });
  }
}

export async function postProfileImage(dispatch, bodyFormData) {
  dispatch({ type: 'POST_PROFILE_IMAGE' });
  try {
    const response = await postUploadPhotoApi(bodyFormData);
    dispatch({ type: 'POST_PROFILE_IMAGE_SUCCESS', data: response.data });
    alert('이미지가 성공적으로 바뀌었습니다!');
  } catch (e) {
    dispatch({ type: 'POST_PROFILE_IMAGE_ERROR', error: e });
  }
}
