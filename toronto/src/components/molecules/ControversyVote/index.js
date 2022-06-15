import Text from '@/components/atoms/Text';
import Image from '@/components/atoms/Image';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const ControversyVoteWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const AgreeButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  padding: 16px;
  background-color: ${({ selected }) => (selected ? '#649dd6' : '')};

  &:hover {
    background-color: #5488ce;
  }
  &:active {
    background-color: #2f66d2:
  }
  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
`;

const DisagreeButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  padding: 16px;
  font-size: 16px;
  background-color: ${({ selected }) => (selected ? '#ef5941' : '')};

  &:hover {
    background-color: #ef3322;
  }
  &:active {
    background-color: #de3322;
  }
  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
`;

const ControversyVote = ({
  agreeTitle,
  disagreeTitle,
  imgSrc,
  onChange,
  ...props
}) => {
  const [agree, setAgree] = useState('');

  useEffect(() => {
    onChange && onChange(agree);
  }, [agree, onChange]);

  return (
    <ControversyVoteWrapper {...props}>
      <AgreeButton
        onClick={(e) => setAgree('agree')}
        selected={agree === 'agree' ? true : false}
      >
        <Text block strong size={16}>
          {agreeTitle}
        </Text>
        <Image src={imgSrc} style={{ marginTop: '8px' }} />
      </AgreeButton>
      <Text strong size={48}>
        VS
      </Text>
      <DisagreeButton
        onClick={(e) => setAgree('disagree')}
        selected={agree === 'disagree' ? true : false}
      >
        <Text block strong size={16}>
          {disagreeTitle}
        </Text>
        <Image src={imgSrc} style={{ marginTop: '8px' }} />
      </DisagreeButton>
    </ControversyVoteWrapper>
  );
};

ControversyVote.propTypes = {
  agreeTitle: PropTypes.string,
  disagreeTitle: PropTypes.string,
  imgSrc: PropTypes.string.isRequired,
};

export default ControversyVote;
