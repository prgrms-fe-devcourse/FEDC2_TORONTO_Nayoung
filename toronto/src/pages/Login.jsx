import styled from 'styled-components';
import LoginForm from '@/components/organisms/LoginForm';

const Wrapper = styled.div`
  height: 100vh;
  padding: 150px 320px;
  display: flex;
  position: relative;
  justify-content: center;
`;

const Login = () => {
  return (
    <Wrapper>
      <LoginForm />
    </Wrapper>
  );
};

export default Login;
