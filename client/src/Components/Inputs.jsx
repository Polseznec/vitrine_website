import React from "react";

//styled
import {
  StyledSubmitInput,
  StyledForm,
  StyledInput,
} from "./styles/Inputs.styled";

//function
import { toCapitalizeFirstLetter as TCF } from "./fonctions";

export const Input = ({ ...props }) => {
  return <StyledInput {...props} />;
};

export const TextInput = ({
  name,
  placeholder,
  onChange,
  value,
  label,
  br,
}) => {
  return (
    <>
      {label ? <label>{label}</label> : null}
      <Input
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {br ? <br /> : null}
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
  br,
}) => {
  return (
    <>
      {label ? <label>{label}</label> : null}
      <Input
        type="number"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        step=".01"
      />
      {unit ? <span>{unit}</span> : null}
      {br ? <br /> : null}
    </>
  );
};

export const EmailInput = ({ name, id, onChange, value, label, br }) => {
  return (
    <>
      {label ? <label htmlFor="email">{label}</label> : null}
      <Input
        type="text"
        name={name}
        id={id}
        onChange={onChange}
        value={value}
      />
      {br ? <br /> : null}
    </>
  );
};

export const PasswordInput = ({ name, id, onChange, value, label, br }) => {
  return (
    <>
      {label ? <label htmlFor="password">{label}</label> : null}
      <Input
        type="password"
        name={name}
        id={id}
        onChange={onChange}
        value={value}
      />
      {br ? <br /> : null}
    </>
  );
};

export const CheckboxeInput = ({ onChange, checked, name, label, br }) => {
  return (
    <>
      {label ? <label>{label}</label> : null}
      <input
        type="checkbox"
        onChange={onChange}
        checked={checked}
        name={name}
      />
      {br ? <br /> : null}
    </>
  );
};

export const FileInput = ({ name, label, br }) => {
  return (
    <>
      {label ? <label>{label}</label> : null}
      <input type="file" name={name} />
      {br ? <br /> : null}
    </>
  );
};

export const SubmitInput = ({ value, bg, color }) => {
  return (
    <StyledSubmitInput type="submit" value={value} bg={bg} color={color} />
  );
};

export const SelectInput = ({ value, name, onChange, options, label, br }) => {
  return (
    <>
      {label ? <label>{label}</label> : null}
      <select value={value} name={name} onChange={onChange}>
        {options.map((option, key) => (
          <option value={option} key={key}>
            {TCF(option)}
          </option>
        ))}
      </select>
      {br ? <br /> : null}
    </>
  );
};

export const Form = ({ action, onSubmit, id, children }) => {
  return (
    <StyledForm action={action} onSubmit={onSubmit} id={id}>
      {children}
    </StyledForm>
  );
};
