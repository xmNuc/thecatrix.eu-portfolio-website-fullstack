import React from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

export const InputComp = ({
  name,
  label,
  handleChange,
  type,
  autoFocus,
  handleShowPass,
  showPassword,
  autoComplete,
}) => {
  return (
    <>
      <InputGroup className="input-grup">
        <InputGroup.Text id="basic-addon1" className="input-group-titile">
          {label}
        </InputGroup.Text>
        <FormControl
          name={name}
          placeholder={label}
          aria-label={label}
          onChange={handleChange}
          type={type}
          autoFocus={autoFocus}
          required
          autoComplete={autoComplete}
        />

        {name === 'password' && (
          <Button onMouseDown={handleShowPass} onMouseUp={handleShowPass}>
            ShowPass {showPassword === 'password' ? '👀' : '✔'}
          </Button>
        )}
      </InputGroup>
    </>
  );
};
