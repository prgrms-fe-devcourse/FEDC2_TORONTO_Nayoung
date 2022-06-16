import { Outlet } from 'react-router-dom';
import { StyledLink, Loader } from '@components/atoms/';
import { useUsersState } from '../contexts/UserContext.js';

const Layout = () => {
  const state = useUsersState();
  const { data: user, loading, error } = state.user;

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
          <StyledLink to='controversy/result/62a9a9a96e38b64af1f0882a'>
            Result Page Test
          </StyledLink>{' '}
          |
        </nav>
        <div className='content'>
          <Outlet />
        </div>
      </div>
    );
  }
};

export default Layout;
