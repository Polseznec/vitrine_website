import React from "react";
//styled
import {
  StyledButton,
  StyledCrossButton,
  StyledTextButton,
} from "./styles/Button.styled";
//asset
import cross from "../assets/svg/x_cross.svg";
import { Circle } from "./styles/Assets.styled";

export const Button = ({ className, onClick, title, bg, color, ...props }) => {
  return (
    <StyledButton
      className={className}
      onClick={onClick}
      {...props}
      bg={bg}
      color={color}
    >
      {title}
    </StyledButton>
  );
};
export const TextButton = ({ onClick, text, selecte, color, props }) => {
  return (
    <StyledTextButton
      onClick={onClick}
      selecte={selecte}
      color={color}
      {...props}
    >
      {text}
    </StyledTextButton>
  );
};
export const CrossButton = ({ onClick, props }) => {
  return (
    <StyledCrossButton
      src={cross}
      onClick={onClick}
      {...props}
    ></StyledCrossButton>
  );
};

export const CircleButton = ({ onClick, size, props }) => {
  return <Circle onClick={onClick} size={size} {...props}></Circle>;
};
