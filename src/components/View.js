import React from 'react';
import styled from 'styled-components';

const StyledView = styled.div`
  margin: 0 auto;
  max-width: 420px;
  width: 100vw;
  min-height: 100vh;
  background-color: #bec8c3;
  padding: 24px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const View = ({ children }) => {
  return <StyledView>{children}</StyledView>;
};
