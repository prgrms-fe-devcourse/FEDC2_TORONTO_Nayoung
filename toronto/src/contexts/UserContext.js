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
  createAsyncDispatcher,
} from '@/utils/asyncActionUtils';

const initialState = {
  users: initialAsyncState,
  user: initialAsyncState,
};

const signUpHandler = createAsyncHandler('POST_SIGNUP', 'user');
const usersHandler = createAsyncHandler('GET_USERS', 'users');
const userHandler = createAsyncHandler('GET_USER', 'testUser');
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
export const postSignUp = createAsyncDispatcher('POST_SIGNUP', postSignUpApi);

// getUsersAPI 연동
export const getUsers = createAsyncDispatcher('GET_USERS', getUsersApi);

// getUserAPI 연동
export const getUser = createAsyncDispatcher('GET_USER', getUserApi);

// postLoginAPI 연동
export const postLogin = createAsyncDispatcher('POST_LOGIN', postLoginApi);

//postLogoutAPI 연동
export const postLogout = createAsyncDispatcher('POST_LOGOUT', postLogoutApi);

// getAuthUserAPI 연동
export const getAuth = createAsyncDispatcher('GET_AUTH_USER', getAuthUser);

export const putUpdateUser = createAsyncDispatcher(
  'PUT_UPDATE_USER',
  putUpdateUserApi,
);

export const postProfileImage = createAsyncDispatcher(
  'POST_PROFILE_IMAGE',
  postUploadPhotoApi,
);
