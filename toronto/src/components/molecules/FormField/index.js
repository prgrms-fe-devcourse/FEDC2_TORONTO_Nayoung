import styled from 'styled-components';
import Input from '@/components/atoms/Input';
import Text from '@/components/atoms/Text';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  & > .textTitle {
    margin: 32px 0 16px 0;
  }
`;

const FormField = ({
  textTitle,
  inputType,
  inputName,
  inputPlaceholder,
  inputOnChange,
  textError,
  ...props
}) => {
  const inputStyle = {
    border: 'none',
    borderBottom: '2px solid',
  };
  return (
    <Wrapper {...props}>
      <Text
        block
        strong
        className='textTitle'
        style={{ fontFamily: 'S-CoreDream-Regular' }}
      >
        {textTitle}
      </Text>
      <Input
        type={inputType}
        name={inputName}
        placeholder={inputPlaceholder}
        onChange={inputOnChange}
        block
        style={{ ...inputStyle }}
      ></Input>
      {textError && (
        <Text size={10} block color='red'>
          {textError}
        </Text>
      )}
    </Wrapper>
  );
};

export default FormField;
