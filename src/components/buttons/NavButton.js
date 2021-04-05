import React from 'react';
import styled from 'styled-components';
import { StyledButton } from './Button';

const StyledNavButton = styled(StyledButton)`
  position: absolute;
  bottom: 0;
  right: ${(props) => props.alignment === 'right' && '24px'};
`;

export const NavButton = ({ disabled, onClick, title, alignment }) => {
  return (
    <StyledNavButton
      disabled={disabled}
      onClick={onClick}
      alignment={alignment}
    >
      {title}
    </StyledNavButton>
  );
};
