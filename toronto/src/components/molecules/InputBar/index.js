import Input from '@/components/atoms/Input';
import Button from '@/components/atoms/Button';
import Icon from '@/components/atoms/Icon';
import { useState } from 'react';
import styled from 'styled-components';

const IconWrapper = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  background-color: inherit;
`;

const InputBar = ({
  placeholder,
  buttonText,
  buttonType = 'outside', // inside, outside
  onSubmit,
  buttonWidth = 80,
  totalWidth = 300,
}) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setText('');
    onSubmit(text);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        position: 'relative',
        display: 'flex',
        width: totalWidth,
        alignItems: 'center',
        gap: 10,
        boxSizing: 'border-box',
      }}
    >
      <Input
        placeholder={placeholder}
        wrapperProps={{
          style: {
            flex: 1,
          },
        }}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onDrop={(e) => e.preventDefault()}
        style={{ height: 40, flex: 1 }}
      />
      {buttonType === 'outside' ? (
        <Button
          style={{ width: buttonWidth, height: 40, boxSizing: 'border-box' }}
        >
          {buttonText}
        </Button>
      ) : (
        <IconWrapper>
          <Icon iconName='search' color='#999999' />
        </IconWrapper>
      )}
    </form>
  );
};

export default InputBar;
