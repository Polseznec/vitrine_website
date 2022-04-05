import styled from "styled-components";
import { theme } from "./_Theme.styled";

export const StyledBlocTitle = styled.h3`
  color: ${({ color }) => color || theme.color.white};
`;
export const HeaderTitle = styled.h1`
  color: ${({ color }) => color || theme.color.white};
`;
