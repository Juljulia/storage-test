import React from 'react';
import styled from 'styled-components';
import { StyledButton } from './buttons/Button';

const StyledListItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fcfcfc;
  border-radius: 4px;
  width: 100%;
  margin: 4px 0;
  padding: 4px 0 4px 8px;
`;

const StyledText = styled.p`
  margin: 0;
`;

const SmallButton = styled(StyledButton)`
  background-color: #547d81;
  color: white;
  padding: 4px 6px;
  font-size: 12px;
  margin: 0 4px 0 0;
`;

export const ListItem = ({ text, disabled, onClick, value, btnTitle }) => {
  return (
    <StyledListItem>
      <StyledText>{text}</StyledText>
      {btnTitle && (
        <SmallButton onClick={onClick} value={value} disabled={disabled}>
          {btnTitle}
        </SmallButton>
      )}
    </StyledListItem>
  );
};
