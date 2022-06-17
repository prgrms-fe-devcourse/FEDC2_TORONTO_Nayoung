import { Outlet } from 'react-router-dom';
import { StyledLink, Loader } from '@components/atoms/';
import {
  useUsersState,
  useUsersDispatch,
  getAuth,
} from '@/contexts/UserContext.js';
import { getToken } from '@/lib/Login.js';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Layout = () => {
  const state = useUsersState();
  const dispatch = useUsersDispatch();
  const navigate = useNavigate();
  const { data: user, loading, error } = state.user;
  useEffect(() => {
    const fetchData = async () => {
      const token = getToken();
      if (token) {
        await getAuth(dispatch);
      } else {
        navigate('/login');
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  if (loading) return <Loader type='spinner' />;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!user) {
    return (
      <div>
        <h1>토론토</h1>
        <nav>
          <StyledLink to='/'>Home</StyledLink> |
          <StyledLink to='about'>About</StyledLink> |
          <StyledLink to='login'>Login</StyledLink> |
          <StyledLink to='sign-up'>Sign Up</StyledLink> |
        </nav>
        <div className='content'>
          <Outlet />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>토론토</h1>
        <nav>
          <StyledLink to='/'>Home</StyledLink> |
          <StyledLink to={user._id}>Profile</StyledLink> |
          <StyledLink to='logout'>Logout</StyledLink> |
        </nav>
        <div className='content'>
          <Outlet />
        </div>
      </div>
    );
  }
};

export default Layout;
