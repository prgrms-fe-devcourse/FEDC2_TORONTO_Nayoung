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

const SignUpForm = () => {
  return (
    <Form>
      <Header>Sign Up</Header>
      <Text>성명</Text>
      <Input
        type="text"
        name="name"
        placeholder="Name"
        block="true"
        style={{}}
      />
      <Text>이메일</Text>
      <Input type="email" name="email" placeholder="Email" block="true" />
      <Text>비밀번호</Text>
      <Input
        type="password"
        name="password"
        placeholder="Password"
        block="true"
      />
      <Text>비밀번호 확인</Text>
      <Input
        type="password"
        name="passwordCheck"
        placeholder="Password Check"
        block="true"
      />
      <button>회원가입</button>
    </Form>
  );
};

export default SignUpForm;
