import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { StyledLink, Loader, Button } from '@components/atoms/';
import {
  useUsersState,
  useUsersDispatch,
  getAuth,
  postLogout,
} from '@/contexts/UserContext.js';
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
    if (response.statusText === 'OK') {
      const cookies = new Cookies();
      cookies.remove('USER_TOKEN');
      navigate('/login');
    }
  };

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
  } else if (user && token) {
    return (
      <div>
        <h1>토론토</h1>
        <nav>
          <StyledLink to='/'>Home</StyledLink> |
          <StyledLink to={user._id}>Profile</StyledLink> |
          <StyledLink to={'/'}>
            <Button onClick={handleLogout}>Logout</Button>
          </StyledLink>
        </nav>
        <div className='content'>
          <Outlet />
        </div>
      </div>
    );
  }
};

export default Layout;
