import React from 'react';
import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: #97503e;
  box-shadow: 0px 8px 16px #0000000d;
  padding: 16px 32px;
  font-size: 16px;
  font-weight: 700;
  color: white;
  margin: 12px 0;
  cursor: pointer;
  border-radius: 8px;
  border: none;
  outline: none;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Button = ({
  disabled,
  onClick,
  title,
  navButton,
  left,
  right,
}) => {
  return (
    <StyledButton
      disabled={disabled}
      onClick={onClick}
      navButton={navButton}
      left={left}
      right={right}
    >
      {title}
    </StyledButton>
  );
};
