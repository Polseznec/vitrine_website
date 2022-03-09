import React from "react";

export const IndexButton = ({ className, text, ...props }) => {
  return (
    <button className={className} {...props}>
      {text}
    </button>
  );
};
