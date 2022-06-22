import styled from 'styled-components';
import LoginForm from '@/components/organisms/LoginForm';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  position: relative;
`;

const Login = () => {
  return (
    <Wrapper>
      <LoginForm />
    </Wrapper>
  );
};

export default Login;
