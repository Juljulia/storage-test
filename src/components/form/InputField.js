import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  box-shadow: 0px 8px 16px #0000000d;
  background-color: white;
  height: 42px;
  width: 100%;
  font-size: 16px;
  line-height: 26px;
  padding: 18px 16px;
  margin: 12px 0;
  color: #a3a3a3;
  outline: none;
  border-radius: 8px;
  border: none;
  &:focus {
    border: 1px solid #ccc;
  }
`;

const StyledLabel = styled.label`
  font-size: 14px;
  font-weight: 700;
`;

export const InputField = ({ placeholder, label, onChange }) => {
  const id = Math.random(10000);
  return (
    <>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput id={id} placeholder={placeholder} onChange={onChange} />
    </>
  );
};
