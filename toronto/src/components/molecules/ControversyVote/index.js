import styled from 'styled-components';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Text, Image } from '@components/atoms';

const ControversyVoteWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 80px 0;
`;

const ControversyButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  padding: 16px;
  height: 500px;
  width: 350px;
  background-color: ${({ selected, backgroundColor }) =>
    selected ? backgroundColor : ''};

  &:hover {
    background-color: ${(hoverBackgroundColor) => hoverBackgroundColor};
  }
  &:active {
    background-color: ${(activeBackgroundColor) => activeBackgroundColor};
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
      <ControversyButton
        onClick={(e) => setAgree('agree')}
        selected={agree === 'agree' ? true : false}
        backgroundColor='#649dd6'
        hoverBackgroundColor='#5488ce'
        activeBackgroundColor='#2f66d2'
      >
        <Text block strong size={16}>
          {agreeTitle}
        </Text>
        <Image
          src={imgSrc}
          width={'100%'}
          height={'95%'}
          mode={'fill'}
          style={{ borderRadius: '4px' }}
        />
      </ControversyButton>
      <Text strong size={48}>
        VS
      </Text>
      <ControversyButton
        onClick={(e) => setAgree('disagree')}
        selected={agree === 'disagree' ? true : false}
        backgroundColor='#ef5941'
        hoverBackgroundColor='#ef3322'
        activeBackgroundColor='de3322'
      >
        <Text block strong size={16}>
          {disagreeTitle}
        </Text>
        <Image
          src={imgSrc}
          width={'100%'}
          height={'95%'}
          mode={'fill'}
          style={{ borderRadius: '4px' }}
        />
      </ControversyButton>
    </ControversyVoteWrapper>
  );
};

ControversyVote.propTypes = {
  agreeTitle: PropTypes.string,
  disagreeTitle: PropTypes.string,
  imgSrc: PropTypes.string,
};

export default ControversyVote;
