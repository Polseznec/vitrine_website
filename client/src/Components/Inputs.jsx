import React from "react";

export const Form = ({ className, text, ...props }) => {
  return (
    <form className={className} {...props}>
      {text}
      <EmailInput />
      <PasswordInput />
    </form>
  );
};

export const EmailInput = ({ className, ...props }) => {
  return <input className={className} {...props}></input>;
};

export const PasswordInput = ({ className, ...props }) => {
  return <input className={className} {...props}></input>;
};
