import Icon from '@/components/atoms/Icon';
import Divider from '@/components/atoms/Divider';
import StyledLink from '@/components/atoms/StyledLink';
import { useNavigate } from 'react-router-dom';

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
            <div>
              <StyledLink to='/'>
                <Icon
                  size={20}
                  iconName='users'
                  style={{ verticalAlign: 'bottom' }}
                />
              </StyledLink>
            </div>
            <div>
              <StyledLink
                to='/logout'
                style={{
                  color: 'inherit',
                }}
              >
                로그아웃
              </StyledLink>
            </div>
            <div
              onClick={() => navigate(`/${user._id}`)}
              style={{ display: 'flex', alignItems: 'center' }}
            >
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
            </div>
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
