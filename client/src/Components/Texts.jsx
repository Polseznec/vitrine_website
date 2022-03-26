import React from "react";
//styled
import { StyledBlocTitle } from "./styles/Texts.styled";

export const BlocTitle = ({ title, color }) => {
  return <StyledBlocTitle color={color}>{title}</StyledBlocTitle>;
};
