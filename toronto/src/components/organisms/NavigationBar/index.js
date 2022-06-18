import Icon from '@/components/atoms/Icon';
import Divider from '@/components/atoms/Divider';
import StyledLink from '@/components/atoms/StyledLink';
import { useNavigate } from 'react-router-dom';
import Tooltip from '../../molecules/Tooltip';

const NavigationBar = ({ user }) => {
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
              <StyledLink to='/'>
                <Icon
                  size={20}
                  iconName='users'
                  style={{ verticalAlign: 'bottom' }}
                />
              </StyledLink>
            </Tooltip>
            <Tooltip text='로그아웃'>
              <StyledLink
                to='/logout'
                style={{
                  color: 'inherit',
                }}
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
            {/* <Icon size={20} iconName='users' fill='#111' /> */}
            <StyledLink to='/login' style={{ color: 'inherit' }}>
              로그인
            </StyledLink>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {/* <Icon size={20} iconName='user' /> */}
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
