/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Icon, StyledLink, Image, Header, Text } from '@/components/atoms';
import { Tooltip } from '@/components/molecules';
import logoImg from '@/assets/images/toronto.png';
const NavigationBar = ({ user, handleLogout }) => {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <Wrapper>
      <LogoWrapper onClick={handleLogoClick}>
        <Image src={logoImg} width={50} height={50} />
        <Header level={4}>토론토</Header>
      </LogoWrapper>
      <NavigationWrapper>
        {user ? (
          <TooltipWrapper>
            <Tooltip text='사용자 목록 보기'>
              <NavigateLink to='/user/list'>
                <Icon size={20} iconName='users' />
              </NavigateLink>
            </Tooltip>
            <Tooltip text='로그아웃'>
              <NavigateLink to='/' onClick={handleLogout}>
                <Text>로그아웃</Text>
              </NavigateLink>
            </Tooltip>
            <Tooltip text='알림'>
              <StyledLink
                to='/notifications'
                style={{
                  color: 'inherit',
                }}
              >
                <Icon
                  size={20}
                  iconName='bell'
                  style={{ verticalAlign: 'bottom' }}
                />
              </StyledLink>
            </Tooltip>
            <Tooltip text='내 정보 보기'>
              <NavigateLink to={`/users/${user._id}`}>
                <Icon
                  size={20}
                  iconName='user'
                  style={{ marginRight: '5px' }}
                />
                <Text>{user.fullName}</Text>
              </NavigateLink>
            </Tooltip>
          </TooltipWrapper>
        ) : (
          <TooltipWrapper>
            <Tooltip text='사용자 목록 보기'>
              <NavigateLink to='/user/list'>
                <Icon
                  size={20}
                  iconName='users'
                  style={{ verticalAlign: 'bottom' }}
                />
              </NavigateLink>
            </Tooltip>
            <NavigateLink to='/login'>
              <Text>로그인</Text>
            </NavigateLink>
            <NavigationWrapper>
              <NavigateLink to='/sign-up'>
                <Text>회원가입</Text>
              </NavigateLink>
            </NavigationWrapper>
          </TooltipWrapper>
        )}
      </NavigationWrapper>
    </Wrapper>
  );
};

export default NavigationBar;

const Wrapper = styled.div`
  display: flex;
  height: 60px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(219, 219, 219);
  padding: 0 30px 0 30px;
`;

const LogoWrapper = styled.div`
  display: flex;
  cursor: pointer;
  font-size: 24px;
  color: #000;
  align-items: center;
`;

const NavigationWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

const TooltipWrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

const NavigateLink = styled(StyledLink)`
  display: flex;
  color: inherit;
  align-items: center;
`;
