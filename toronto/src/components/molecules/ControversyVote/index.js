import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Text } from '@components/atoms';
import { Button } from 'react-neon-ui';

const ControversyVoteWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 80px 0;
`;

const ControversyVote = ({
  agreeTitle,
  disagreeTitle,
  imgSrc,
  onChange,
  ...props
}) => {
  return (
    <ControversyVoteWrapper {...props}>
      <div>
        <Button
          onClick={(e) => {
            onChange('agree');
          }}
          variant='secondary'
          style={{ width: '400px', height: '400px' }}
        >
          <Text block strong size={80}>
            {agreeTitle}
          </Text>
        </Button>
      </div>
      <TextWrapper>
        <Text strong size={48}>
          VS
        </Text>
      </TextWrapper>
      <Button
        onClick={(e) => {
          onChange('disagree');
        }}
        style={{ width: '400px', height: '400px' }}
      >
        <Text block strong size={80}>
          {disagreeTitle}
        </Text>
      </Button>
    </ControversyVoteWrapper>
  );
};

ControversyVote.propTypes = {
  agreeTitle: PropTypes.string,
  disagreeTitle: PropTypes.string,
  imgSrc: PropTypes.string,
};

export default ControversyVote;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  font-family: 'S-CoreDream-Regular';
`;
