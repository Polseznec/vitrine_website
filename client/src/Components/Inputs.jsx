import React from "react";
//styled
import { StyledTextInput, StyledSubmitInput } from "./styles/Inputs.styled";

export const TextInput = ({ name, placeholder, onChange, value, label }) => {
  return (
    <>
      {label ? <label>{label}</label> : null}
      <StyledTextInput
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </>
  );
};
export const NumberInput = ({
  name,
  placeholder,
  onChange,
  value,
  label,
  unit,
}) => {
  return (
    <>
      {label ? <label>{label}</label> : null}
      <StyledTextInput
        type="number"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        step=".01"
      />
      {unit ? <span>{unit}</span> : null}
    </>
  );
};

export const EmailInput = ({ name, id, onChange, value, label }) => {
  return (
    <>
      {label ? <label>{label}</label> : null}
      <StyledTextInput
        type="text"
        name={name}
        id={id}
        onChange={onChange}
        value={value}
      />
    </>
  );
};

export const PasswordInput = ({ name, id, onChange, value, label }) => {
  return (
    <>
      {label ? <label>{label}</label> : null}
      <StyledTextInput
        type="password"
        name={name}
        id={id}
        onChange={onChange}
        value={value}
      />
    </>
  );
};

export const CheckboxeInput = ({ onChange, checked, name, label }) => {
  return (
    <>
      {label ? <label>{label}</label> : null}
      <input
        type="checkbox"
        onChange={onChange}
        checked={checked}
        name={name}
      />
    </>
  );
};

export const FileInput = ({ name, label }) => {
  return (
    <>
      {label ? <label>{label}</label> : null}
      <input type="file" name={name} />
    </>
  );
};

export const SubmitInput = ({ value, bg, color }) => {
  return (
    <StyledSubmitInput type="submit" value={value} bg={bg} color={color} />
  );
};
