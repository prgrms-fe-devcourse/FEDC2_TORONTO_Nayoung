import styled from 'styled-components';
import Input from '@/components/atoms/Input';
import Header from '@/components/atoms/Header';
import Text from '@/components/atoms/Text';

const Form = styled.form`
  padding: 16px;
  width: 400px;
  background-color: white;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  border: 1px solid red;
  box-sizing: border-box;
`;

const LoginForm = () => {
  return (
    <Form>
      <Header>Login</Header>
      <Text>이메일</Text>
      <Input type="email" name="email" placeholder="Email" block="true" />
      <Text>비밀번호</Text>
      <Input
        type="password"
        name="password"
        placeholder="Password"
        block="true"
      />
      <button>로그인</button>
    </Form>
  );
};

export default LoginForm;
