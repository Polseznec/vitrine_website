import React from "react";
//styled
import { StyledBlocTitle } from "./styles/Texts.styled";
//functions
import { toCapitalize as TC } from "./fonctions";

export const BlocTitle = ({ title, color }) => {
  return <StyledBlocTitle color={color}>{TC(title)}</StyledBlocTitle>;
};
