import React from "react";

export const Button = ({ className, onClick, title, ...props }) => {
  return (
    <button className={className} onClick={onClick} {...props}>
      {title}
    </button>
  );
};
