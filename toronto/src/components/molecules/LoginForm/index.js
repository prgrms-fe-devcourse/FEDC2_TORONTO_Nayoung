import styled from 'styled-components';
import Input from '@/components/atoms/Input';
import Text from '@/components/atoms/Text';
import Button from '@/components/atoms/Button';
import TextInputForm from '../TextInputForm';
import useForm from '@/hooks/useForm';
import { requestApi } from '@/api';

const Form = styled.form`
  padding: 16px;
  width: 400px;
  background-color: white;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const LoginForm = () => {
  const { errors, isLoading, handleChange, handleSubmit } = useForm({
    initialValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
    onSubmit: async (values) => {
      const res = await requestApi({
        method: 'POST',
        url: '/login',
        data: {
          email: values.email,
          password: values.password,
        },
      });
      if (res) alert('로그인 되었습니다.');
      else alert('로그인 실패하셨습니다.');
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
      <Text strong>로그인</Text>
      {/* <Text block style={{ marginTop: '16px' }}>
        이메일
      </Text>
      <Input
        type='email'
        name='email'
        placeholder='Email'
        block='true'
        onChange={handleChange}
      /> */}
      <TextInputForm
        textTitle='이메일'
        inputType='email'
        inputPlaceholder='email'
        inputName='email'
        inputOnChange={handleChange}
      />
      {errors.email && (
        <Text size={10} block color='red'>
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
        <Text size={10} block color='red'>
          {errors.password}
        </Text>
      )}
      <Button disabled={isLoading} style={{ marginTop: '16px' }}>
        로그인
      </Button>
    </Form>
  );
};

export default LoginForm;
