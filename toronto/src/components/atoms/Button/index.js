import React from 'react';
import styled from 'styled-components';

const Button = ({
  type,
  icon,
  disabled = false,
  loading,
  onClick,
  children,
  ...props
}) => {
  return (
    <div {...props}>
      <StyledButton
        type={type}
        icon={icon}
        loading={loading}
        disabled={disabled}
        onClick={onClick}
        style={props.style}
        {...props}
      >
        {children}
      </StyledButton>
    </div>
  );
};

export default Button;

const StyledButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  background-color: #4582ee;
  color: white;
  min-width: 80px;
  min-height: 35px;
  padding: 10px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #2366f6;
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
