import React, { createContext, useReducer, useContext } from 'react';
import { getUsersApi, getUserApi, postLoginApi } from '@/api/Api';
import {
  createAsyncHandler,
  initialAsyncState,
} from '@/utils/asyncActionUtils';
import { getAuthUser } from '../api/Api';
//TODO: 새로고침해도 쿠키가 있을경우 로그인 상태로 유지, get auth  => cookie 동작
//TODO: 로그아웃 시 쿠키 삭제

const initialState = {
  users: initialAsyncState,
  user: initialAsyncState,
};

const usersHandler = createAsyncHandler('GET_USERS', 'users');
const userHandler = createAsyncHandler('GET_USER', 'user');
const loginHandler = createAsyncHandler('POST_LOGIN', 'user');
const authHandler = createAsyncHandler('GET_AUTH_USER', 'user');
const usersReducer = (state, action) => {
  switch (action.type) {
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
    case 'GET_AUTH_USER':
    case 'GET_AUTH_USER_SUCCESS':
    case 'GET_AUTH_USER_ERROR':
      return authHandler(state, action);
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
export async function postLogin(dispatch, formEmail, formPassword) {
  dispatch({ type: 'POST_LOGIN' });
  try {
    const response = await postLoginApi({
      email: formEmail,
      password: formPassword,
    });
    dispatch({ type: 'POST_LOGIN_SUCCESS', data: response.data.user });
    return response;
  } catch (e) {
    dispatch({ type: 'POST_LOGIN_ERROR', error: e });
  }
}

// getAuthUserAPI 연동
export async function getAuth(dispatch) {
  dispatch({ type: 'GET_AUTH_USER' });
  try {
    const response = await getAuthUser();
    dispatch({ type: 'GET_AUTH_USER_SUCCESS', data: response.data });
  } catch (e) {
    dispatch({ type: 'GET_AUTH_USER_ERROR', error: e });
  }
}
