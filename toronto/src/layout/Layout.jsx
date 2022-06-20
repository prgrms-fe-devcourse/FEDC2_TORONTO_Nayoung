import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { Loader } from '@/components/atoms/';
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
  const { data: user, loading, error } = state.user;
  const token = getToken();
  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        await getAuth(dispatch);
      } else {
        navigate('/login');
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

  if (loading) return <Loader type='spinner' />;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!user) {
    return (
      <div>
        <nav>
          <NavigationBar user={user} />
        </nav>
        <div className='content'>
          <Outlet />
        </div>
      </div>
    );
  } else if (user && token) {
    return (
      <div>
        <nav>
          <NavigationBar user={user} handleLogout={handleLogout} />
        </nav>
        <div className='content'>
          <Outlet />
        </div>
      </div>
    );
  }
};

export default Layout;
