import { Outlet } from 'react-router-dom';
import StyledLink from '@components/atoms/StyledLink';

function Layout() {
  return (
    <div>
      <h1>토론토</h1>
      <nav>
        <StyledLink to='/'>Home</StyledLink> |
        <StyledLink to='about'>About</StyledLink> |
        <StyledLink to='profile'>Profile</StyledLink> ||
        <StyledLink to='login'>Login</StyledLink> |
        <StyledLink to='sign-up'>Sign Up</StyledLink> |{' '}
      </nav>
      <div className='content'>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
