import React from "react";
//styled
import { StyledButton, StyledCrossButton } from "./styles/Button.styled";
//asset
import cross from "../assets/svg/x_cross.svg";
import { Circle } from "./styles/Assets.styled";

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

export const CrossButton = ({ onClick }) => {
  return <StyledCrossButton src={cross} onClick={onClick}></StyledCrossButton>;
};

export const CircleButton = ({ onClick, size }) => {
  return <Circle onClick={onClick} size={size}></Circle>;
};
