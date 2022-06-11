import styled from 'styled-components';
import Input from '@/components/atoms/Input';
import Text from '@/components/atoms/Text';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextInputForm = ({
  textTitle,
  inputType,
  inputName,
  inputPlaceholder,
  inputOnChange,
  ...props
}) => {
  return (
    <Wrapper {...props}>
      <Text block style={{ marginTop: '16px' }}>
        {textTitle}
      </Text>
      <Input
        type={inputType}
        name={inputName}
        placeholder={inputPlaceholder}
        onChange={inputOnChange}
        block
      ></Input>
    </Wrapper>
  );
};

export default TextInputForm;
