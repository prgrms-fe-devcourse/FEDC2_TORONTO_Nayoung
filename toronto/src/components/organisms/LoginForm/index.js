import styled from 'styled-components';
import { Text, Button, Loader, Header, Image } from '@/components/atoms/';
import FormField from '@/components/molecules/FormField';
import useForm from '@/hooks/useForm';
import {
  postLogin,
  useUsersDispatch,
  useUsersState,
} from '@/contexts/UserContext.js';
import { useNavigate } from 'react-router-dom';
import logoImg from '@/assets/images/toronto.png';

const LoginForm = () => {
  const state = useUsersState();
  const dispatch = useUsersDispatch();
  const { data: user, loading } = state.user;
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
        alert('아이디 또는 비밀번호가 맞지 않습니다.');
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

  if (loading) return <Loader type='spinner' />;
  if (!user) {
    return (
      <CardForm onSubmit={handleSubmit}>
        <Image src={logoImg} width={200} height={200} />
        <HeaderWrapper>
          <Header strong>로그인</Header>
        </HeaderWrapper>
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
    return <Text>유저 객체가 있습니다 처리가 필요합니다!</Text>;
  }
};

export default LoginForm;

const HeaderWrapper = styled.div`
  margin: 32px 0 32px 0;
`;

const CardForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background-color: white;
  position: absolute;
`;
