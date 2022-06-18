import { useNavigate } from 'react-router-dom';
import { Icon, Divider, StyledLink } from '@/components/atoms';
import { Tooltip } from '@/components/molecules';

const NavigationBar = ({ user, handleLogout }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div
        onClick={handleLogoClick}
        style={{ fontSize: 24, color: '#2366F6', cursor: 'pointer' }}
      >
        토론토
        <Divider type='vertical' />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        {user ? (
          <>
            <Tooltip text='사용자 목록 보기'>
              <StyledLink to='/user/list'>
                <Icon
                  size={20}
                  iconName='users'
                  style={{ verticalAlign: 'bottom' }}
                />
              </StyledLink>
            </Tooltip>
            <Tooltip text='로그아웃'>
              <StyledLink
                to='/'
                style={{
                  color: 'inherit',
                }}
                onClick={handleLogout}
              >
                로그아웃
              </StyledLink>
            </Tooltip>
            <Tooltip text='내 정보 보기'>
              <StyledLink
                to={`/${user._id}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: 'inherit',
                  gap: '5px',
                }}
              >
                <Icon size={20} iconName='user' />
                {user.fullName}
              </StyledLink>
            </Tooltip>
          </>
        ) : (
          <>
            <Tooltip text='사용자 목록 보기'>
              <StyledLink to='/user/list'>
                <Icon
                  size={20}
                  iconName='users'
                  style={{ verticalAlign: 'bottom' }}
                />
              </StyledLink>
            </Tooltip>
            <StyledLink to='/login' style={{ color: 'inherit' }}>
              로그인
            </StyledLink>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <StyledLink to='/sign-up' style={{ color: 'inherit' }}>
                회원가입
              </StyledLink>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
