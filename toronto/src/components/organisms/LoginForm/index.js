import styled from 'styled-components';
import Text from '@/components/atoms/Text';
import Button from '@/components/atoms/Button';
import FormField from '@/components/molecules/FormField';
import useForm from '@/hooks/useForm';
import {
  postLogin,
  useUsersDispatch,
  useUsersState,
} from '../../../contexts/UserContext.js';
import { useNavigate } from 'react-router-dom';

const CardForm = styled.form`
  padding: 7% 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background-color: white;
  position: absolute;
`;

const LoginForm = () => {
  const state = useUsersState();
  const dispatch = useUsersDispatch();
  const { data: user, loading, error } = state.user;
  const navigate = useNavigate();

  const { errors, isLoading, handleChange, handleSubmit } = useForm({
    initialValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
    onSubmit: async (values) => {
      const res = await postLogin(dispatch, values.email, values.password);
      if (res) {
        navigate('/');
      } else {
        navigate('/login');
      }
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

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!user) {
    return (
      <CardForm onSubmit={handleSubmit}>
        <Text strong style={{ marginBottom: '32px' }}>
          로그인
        </Text>
        <FormField
          textTitle='이메일'
          inputType='email'
          inputPlaceholder='email'
          inputName='email'
          inputOnChange={handleChange}
          textError={errors.email}
        />
        <FormField
          textTitle='비밀번호'
          inputType='password'
          inputPlaceholder='password'
          inputName='password'
          inputOnChange={handleChange}
          textError={errors.password}
        />
        <Button disabled={isLoading} style={{ marginTop: '32px' }}>
          로그인
        </Button>
      </CardForm>
    );
  }
  if (user) {
    return <Text>로그인 Navigation을 Logout으로 변경</Text>;
  }
};

export default LoginForm;
