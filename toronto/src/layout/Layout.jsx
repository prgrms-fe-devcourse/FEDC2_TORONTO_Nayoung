import { Outlet } from 'react-router-dom';
import StyledLink from '@components/atoms/StyledLink';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80vh;
`;

function Layout() {
  return (
    <div>
      <h1>토론토</h1>
      <nav>
        <StyledLink to='/'>Home</StyledLink> |
        <StyledLink to='about'>About</StyledLink> |
        <StyledLink to='profile'>Profile</StyledLink>
      </nav>
      <ContentWrapper className='content'>
        <Outlet />
      </ContentWrapper>
    </div>
  );
}

export default Layout;
