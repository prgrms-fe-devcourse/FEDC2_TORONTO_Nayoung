import styled from 'styled-components';
import Input from '@/components/atoms/Input';
import Header from '@/components/atoms/Header';
import Text from '@/components/atoms/Text';
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

const checkInput = (name, email, password, passwordConfirm) => {
  const newErrors = {};
  if (!name) newErrors.name = '이름을 입력하세요';
  if (!email) newErrors.email = '이메일을 입력하세요';
  if (!/^.+@.+\..+$/.test(email))
    newErrors.email = '올바른 이메일을 입력해주세요.';
  if (!password) newErrors.password = '비밀번호를 입력하세요';
  if (!passwordConfirm)
    newErrors.passwordConfirm = '비밀번호 확인을 입력하세요';
  if (password !== passwordConfirm)
    newErrors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
  return newErrors;
};

const SignUpForm = () => {
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
        url: '/signup',
        data: {
          email: values.email,
          fullName: values.name,
          password: values.password,
        },
      });
    },
    validate: (values) => {
      return checkInput(values);
      // return checkInput(name, email, password, passwordConfirm);
    },
  });

  return (
    <Form onSubmit={handleSubmit}>
      <Header>Sign Up</Header>
      <Text block style={{ marginTop: '16px' }}>
        성명
      </Text>
      <Input
        type="text"
        name="name"
        placeholder="Name"
        block="true"
        onChange={handleChange}
      />
      {errors.name && (
        <Text block color="red">
          {errors.name}
        </Text>
      )}
      <Text block style={{ marginTop: '16px' }}>
        이메일
      </Text>
      <Input
        type="email"
        name="email"
        placeholder="Email"
        block="true"
        onChange={handleChange}
      />
      {errors.email && (
        <Text block color="red">
          {errors.email}
        </Text>
      )}
      <Text block style={{ marginTop: '16px' }}>
        비밀번호
      </Text>
      <Input
        type="password"
        name="password"
        placeholder="Password"
        block="true"
        onChange={handleChange}
      />
      {errors.password && (
        <Text block color="red">
          {errors.password}
        </Text>
      )}
      <Text block style={{ marginTop: '16px' }}>
        비밀번호 확인
      </Text>
      <Input
        type="password"
        name="passwordConfirm"
        placeholder="Password Confirm"
        block="true"
        onChange={handleChange}
      />
      {errors.passwordConfirm && (
        <Text block color="red">
          {errors.passwordConfirm}
        </Text>
      )}
      <button>회원가입</button>
    </Form>
  );
};

export default SignUpForm;
