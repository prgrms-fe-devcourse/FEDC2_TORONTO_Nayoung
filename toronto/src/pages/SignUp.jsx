import styled from 'styled-components';
import SignUpForm from '@/components/organisms/SignUpForm';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  position: relative;
  justify-content: center;
`;
const SignUp = () => {
  return (
    <Wrapper>
      <SignUpForm />
    </Wrapper>
  );
};

export default SignUp;
