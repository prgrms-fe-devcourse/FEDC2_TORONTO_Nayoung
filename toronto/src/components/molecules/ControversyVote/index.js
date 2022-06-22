import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Text } from '@components/atoms';
import { Button } from 'react-neon-ui';

const ControversyVote = ({
  agreeTitle,
  disagreeTitle,
  imgSrc,
  onChange,
  ...props
}) => {
  return (
    <ControversyVoteWrapper {...props}>
      <Button
        onClick={(e) => {
          onChange('agree');
        }}
        variant='secondary'
        style={{ width: '400px', height: '400px' }}
      >
        <BtnTextWrapper>
          <Text block strong size={56}>
            {agreeTitle}
          </Text>
        </BtnTextWrapper>
      </Button>
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
        <BtnTextWrapper>
          <Text block strong size={56}>
            {disagreeTitle}
          </Text>
        </BtnTextWrapper>
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

const ControversyVoteWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const BtnTextWrapper = styled.div`
  word-break: keep-all;
`;
