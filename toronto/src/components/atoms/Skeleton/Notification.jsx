import styled from 'styled-components';
import Circle from './Circle';
import Paragraph from './Paragraph';

const Notification = () => {
  return (
    <Wrapper>
      <Circle size={60}></Circle>
      <Paragraph line={3} style={{ width: '300px' }}></Paragraph>
    </Wrapper>
  );
};

export default Notification;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5em;
  margin: 0.5em 0 0.5em 0;
`;
