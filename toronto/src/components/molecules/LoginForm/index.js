import styled from 'styled-components';
import Input from '@/components/atoms/Input';
import Header from '@/components/atoms/Header';
import Text from '@/components/atoms/Text';
import Button from '@/components/atoms/Button';
import useForm from '@/hooks/useForm';
import { requestApi } from '@/api';

const Form = styled.form`
  padding: 16px;
  width: 400px;
  background-color: white;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  border: 1px solid red;
  box-sizing: border-box;
`;

const LoginForm = () => {
  const { errors, handleChange, handleSubmit } = useForm({
    initialValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
    onSubmit: async (values) => {
      await requestApi({
        method: 'POST',
        url: '/login',
        data: {
          email: values.email,
          password: values.password,
        },
      });
    },
    validate: ({ email, password }) => {
      const newErrors = {};
      if (!email) newErrors.email = '이메일을 입력하세요';
      if (!/^.+@.+\..+$/.test(email))
        newErrors.email = '올바른 이메일을 입력해주세요.';
      if (!password) newErrors.password = '비밀번호를 입력하세요';
      return newErrors;
    },
  });

  return (
    <Form onSubmit={handleSubmit}>
      <Header>Login</Header>
      <Text block style={{ marginTop: '16px' }}>
        이메일
      </Text>
      <Input
        type='email'
        name='email'
        placeholder='Email'
        block='true'
        onChange={handleChange}
      />
      {errors.email && (
        <Text block color='red'>
          {errors.email}
        </Text>
      )}
      <Text block style={{ marginTop: '16px' }}>
        비밀번호
      </Text>
      <Input
        type='password'
        name='password'
        placeholder='Password'
        block='true'
        onChange={handleChange}
      />
      {errors.password && (
        <Text block color='red'>
          {errors.password}
        </Text>
      )}
      <Button>로그인</Button>
    </Form>
  );
};

export default LoginForm;
