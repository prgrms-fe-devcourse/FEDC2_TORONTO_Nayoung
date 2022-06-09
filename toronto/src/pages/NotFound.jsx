import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  font-size: 128px;
  font-weight: 400;
`;

const NotFoundPage = () => {
  return (
    <Wrapper>
      <Text>404 Not Found</Text>
      <Link to="/">
        <button>홈으로</button>
      </Link>
    </Wrapper>
  );
};

export default NotFoundPage;
