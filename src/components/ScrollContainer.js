import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 42px;
  max-height: 200px;
  overflow-y: auto;
`;

export const ScrollContainer = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
