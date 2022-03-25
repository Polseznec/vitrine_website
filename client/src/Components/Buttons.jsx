import React from "react";
import { StyledButton } from "./styles/Button.styled";

export const Button = ({ className, onClick, title, bg, color, ...props }) => {
  return (
    <StyledButton
      className={className}
      onClick={onClick}
      {...props}
      //styled
      bg={bg}
      color={color}
    >
      {title}
    </StyledButton>
  );
};
