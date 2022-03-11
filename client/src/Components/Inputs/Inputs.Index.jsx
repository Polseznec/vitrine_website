import React from "react";

export const IndexButton = ({ className, onClick, title, ...props }) => {
  return (
    <button className={className} onClick={onClick} {...props}>
      {title}
    </button>
  );
};

export const IndexForm = ({ className, text, ...props }) => {
  return (
    <form className={className} {...props}>
      {text}
      <IndexEmailInput />
      <IndexPasswordInput />
    </form>
  );
};

export const IndexEmailInput = ({ className, ...props }) => {
  return <input className={className} {...props}></input>;
};

export const IndexPasswordInput = ({ className, ...props }) => {
  return <input className={className} {...props}></input>;
};
