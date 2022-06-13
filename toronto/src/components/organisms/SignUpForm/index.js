import styled from 'styled-components';
import Text from '@/components/atoms/Text';
import Button from '@/components/atoms/Button';
import FormField from '@/components/molecules/FormField';
import useForm from '@/hooks/useForm';
import { requestApi } from '@/api';

const CardForm = styled.form`
  padding: 7% 14%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background-color: white;
  position: absolute;
`;

const SignUpForm = () => {
  const { errors, isLoading, handleChange, handleSubmit } = useForm({
    initialValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
    onSubmit: async (values) => {
      const res = await requestApi('/signup', {
        method: 'POST',
        data: {
          email: values.email,
          fullName: values.name,
          password: values.password,
        },
      });
      if (res) alert('회원가입 되었습니다.');
      else alert('회원가입 되지 않았습니다.');
    },
    validate: ({ name, email, password, passwordConfirm }) => {
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
    },
  });

  return (
    <CardForm onSubmit={handleSubmit}>
      <Text strong style={{ marginBottom: '32px' }}>
        회원가입
      </Text>
      <FormField
        textTitle='성명'
        inputType='text'
        inputName='name'
        inputPlaceholder='성명'
        inputOnChange={handleChange}
        textError={errors.name}
      />
      <FormField
        textTitle='이메일'
        inputType='email'
        inputName='email'
        inputPlaceholder='이메일'
        inputOnChange={handleChange}
        textError={errors.email}
      />
      <FormField
        textTitle='비밀번호'
        inputType='password'
        inputName='password'
        inputPlaceholder='비밀번호'
        inputOnChange={handleChange}
        textError={errors.password}
      />
      <FormField
        textTitle='비밀번호 확인'
        inputType='password'
        inputName='passwordConfirm'
        inputPlaceholder='비밀번호 확인'
        inputOnChange={handleChange}
        textError={errors.passwordConfirm}
      />
      <Button disabled={isLoading} style={{ marginTop: '32px' }}>
        회원가입
      </Button>
    </CardForm>
  );
};

export default SignUpForm;
