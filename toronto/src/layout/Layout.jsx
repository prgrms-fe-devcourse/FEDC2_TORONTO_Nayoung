import styled from 'styled-components';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import {
  useUsersState,
  useUsersDispatch,
  getAuth,
  postLogout,
} from '@/contexts/UserContext.js';
import { NavigationBar } from '@/components/organisms';
import { getToken } from '@/lib/Login.js';

const Layout = () => {
  const state = useUsersState();
  const dispatch = useUsersDispatch();
  const navigate = useNavigate();
  const { data: user, error } = state.user;
  const token = getToken();
  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        await getAuth(dispatch);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = async () => {
    const response = await postLogout(dispatch);
    if (response.data === 'You have been successfully logged out.') {
      const cookies = new Cookies();
      cookies.remove('USER_TOKEN');
      dispatch({ type: 'POST_LOGOUT_SUCCESS', data: null });
      navigate('/login');
    }
  };
  if (error) return <div>에러가 발생했습니다</div>;
  if (!user) {
    return (
      <div>
        <nav>
          <NavigationBar user={user} />
        </nav>
        <OutletWrapper>
          <Outlet />
        </OutletWrapper>
      </div>
    );
  } else if (user && token) {
    return (
      <div>
        <nav>
          <NavigationBar user={user} handleLogout={handleLogout} />
        </nav>
        <OutletWrapper>
          <Outlet />
        </OutletWrapper>
      </div>
    );
  }
};

export default Layout;

const OutletWrapper = styled.div`
  display: flex;
  padding: 0 15rem 0 15rem;
`;
