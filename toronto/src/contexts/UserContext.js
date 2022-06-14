import React, { createContext, useReducer, useContext } from 'react';
import { getUsersApi, getUserApi, postLoginApi } from '../api/Api';

const initialState = {
  users: {
    loading: false,
    data: null,
    error: null,
  },
  user: {
    loading: false,
    data: null,
    error: null,
  },
};

const loadingState = {
  loading: true,
  data: null,
  error: null,
};

const success = (data) => ({
  loading: false,
  data,
  error: null,
});

const error = (error) => ({
  loading: false,
  data: null,
  error: error,
});

const usersReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: loadingState,
      };
    case 'GET_USERS_SUCCESS':
      return {
        ...state,
        users: success(action.data),
      };
    case 'GET_USERS_ERROR':
      return {
        ...state,
        users: error(action.error),
      };
    case 'GET_USER':
      return {
        ...state,
        user: loadingState,
      };
    case 'GET_USER_SUCCESS':
      return {
        ...state,
        user: success(action.data),
      };
    case 'GET_USER_ERROR':
      return {
        ...state,
        user: error(action.error),
      };
    case 'POST_LOGIN':
      return {
        ...state,
        user: loadingState,
      };
    case 'POST_LOGIN_SUCCESS':
      return {
        ...state,
        user: success(action.data),
      };
    case 'POST_LOGIN_ERROR':
      return {
        ...state,
        user: error(action.error),
      };
    default:
      throw new Error(`Unhanded action type: ${action.type}`);
  }
};

const UsersStateContext = createContext();
const UsersDispatchContext = createContext();

export const useUsersState = () => {
  const state = useContext(UsersStateContext);
  if (!state) {
    throw new Error('Cannot find UsersProvider');
  }
  return state;
};

export const useUsersDispatch = () => {
  const dispatch = useContext(UsersDispatchContext);
  if (!dispatch) {
    throw new Error('Cannot find UsersProvider');
  }
  return dispatch;
};

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

export async function getUsers(dispatch) {
  dispatch({ type: 'GET_USERS' });
  try {
    const response = getUsersApi();
    dispatch({ type: 'GET_USERS_SUCCESS', data: response.data });
  } catch (e) {
    dispatch({ type: 'GET_USERS_ERROR', error: e });
  }
}

export async function getUser(dispatch, id) {
  dispatch({ type: 'GET_USER' });
  try {
    const response = getUserApi(id);
    dispatch({ type: 'GET_USER_SUCCESS', data: response.data });
  } catch (e) {
    dispatch({ type: 'GET_USER_ERROR', error: e });
  }
}

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
