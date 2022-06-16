import styled from 'styled-components';
import Text from '@/components/atoms/Text';
import { useEffect, useState } from 'react';

const AgreeButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? '#649dd6' : 'gray')};
  color: white;
  min-width: 80px;
  min-height: 35px;
  padding: 10px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #5488ce;
  }
  &:active {
    background-color: #2f66d2;
  }
  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
  &:disabled {
    background-color: gray;
    cursor: default;
  }
`;

const DisagreeButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? '#ef5941' : 'gray')};
  color: white;
  min-width: 80px;
  min-height: 35px;
  padding: 10px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #ef3322;
  }
  &:active {
    background-color: #de3322;
  }
  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
  &:disabled {
    background-color: gray;
    cursor: default;
  }
`;

const Vote = ({ agreeText, disagreeText, onChange }) => {
  const [agree, setAgree] = useState('');

  useEffect(() => {
    onChange && onChange(agree);
  }, [agree, onChange]);

  return (
    <div
      style={{
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div>
        <AgreeButton
          onClick={(e) => setAgree('agree')}
          style={{ display: 'inline-block' }}
          selected={agree === 'agree' ? true : false}
        >
          {agreeText}
        </AgreeButton>
        <Text style={{ margin: '0 20px' }}>VS</Text>
        <DisagreeButton
          onClick={(e) => setAgree('disagree')}
          style={{ display: 'inline-block' }}
          selected={agree === 'disagree' ? true : false}
        >
          {disagreeText}
        </DisagreeButton>
      </div>
      <div style={{ display: agree === '' ? 'block' : 'none' }}>
        <Text>의견을 선택해주세요.</Text>
      </div>
    </div>
  );
};

export default Vote;
