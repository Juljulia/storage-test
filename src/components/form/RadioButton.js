import React from 'react';

export const RadioButton = ({ htmlFor, id, value, onChange, label, name }) => {
  return (
    <label htmlFor={htmlFor} style={{ margin: '4px 0' }}>
      <input
        type='radio'
        id={id}
        value={value}
        onChange={onChange}
        name={name}
      />
      {label}
    </label>
  );
};
