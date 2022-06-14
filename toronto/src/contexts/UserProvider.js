import { createContext, useContext, useEffect, useReducer } from 'react';

const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);

const reducer = (state, action) => {
  switch (action.type) {
    case 'INIT_USER': {
      return action.payload;
    }
    case 'LOGIN_USER': {
      return action.payload;
    }
    case 'AUTH_USER': {
      return action.payload;
    }
    case 'LOGOUT_USER': {
      return action.payload;
    }
    default: {
      // eslint-disable-next-line no-console
      console.error('Wrong type');
      break;
    }
  }
};

const UserProvider = ({ children, initialUser }) => {
  const [user, dispatch] = useReducer(reducer, initialUser || []);

  useEffect(() => {
    dispatch({ type: 'INIT_USERS', payload: initialUser || [] });
  }, [initialUser]);
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
