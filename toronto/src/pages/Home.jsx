import styled from 'styled-components';

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
`;

const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>가장 먼저 보여지는 페이지입니다.</p>
      <Box />
    </div>
  );
};

export default Home;
