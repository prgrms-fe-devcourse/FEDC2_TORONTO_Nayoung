import styled from 'styled-components';
import LoginForm from '@/components/molecules/LoginForm';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9fafb;
`;

const Login = () => {
  return (
    <Wrapper>
      <LoginForm />
    </Wrapper>
  );
};

export default Login;
