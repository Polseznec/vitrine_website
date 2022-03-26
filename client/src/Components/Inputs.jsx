import React from "react";
//styled
import { StyledTextInput, StyledSubmitInput } from "./styles/Inputs.styled";

export const TextInput = ({ name, placeholder, onChange, value }) => {
  return (
    <StyledTextInput
      type="text"
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};
export const NumberInput = ({ name, placeholder, onChange, value }) => {
  return (
    <StyledTextInput
      type="number"
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export const EmailInput = ({ name, id, onChange, value }) => {
  return (
    <StyledTextInput
      type="text"
      name={name}
      id={id}
      onChange={onChange}
      value={value}
    />
  );
};

export const PasswordInput = ({ name, id, onChange, value }) => {
  return (
    <StyledTextInput
      type="password"
      name={name}
      id={id}
      onChange={onChange}
      value={value}
    />
  );
};

export const FileInput = ({ name }) => {
  return <input type="file" name={name} />;
};

export const SubmitInput = ({ value, bg, color }) => {
  return (
    <StyledSubmitInput type="submit" value={value} bg={bg} color={color} />
  );
};
