import styled from 'styled-components';

const Wrapper = styled.div`
  display: ${({ block }) => (block ? 'block' : 'inline-block')};
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 4px 8px;
  border: 1px solid ${({ invalid }) => (invalid ? 'red' : 'gray')};
  border-radius: 4px;
  box-sizing: border-box;
`;

const Input = ({
  block = false,
  invalid = false,
  required = false,
  disabled = false,
  readonly = false,
  wrapperProps,
  ...props
}) => {
  return (
    <Wrapper block={block} {...wrapperProps}>
      <StyledInput
        invalid={invalid}
        required={required}
        disabled={disabled}
        readOnly={readonly}
        {...props}
      />
    </Wrapper>
  );
};

export default Input;
