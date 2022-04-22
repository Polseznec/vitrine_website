import styled from "styled-components";
import { theme } from "./_Theme.styled";

export const StyledBlocTitle = styled.h3`
  color: ${({ color }) => color || theme.color.white};
`;
export const HeaderTitle = styled.h1`
  color: ${({ color }) => color || theme.color.white};
`;

export const H4 = styled.h4`
  color: ${({ color }) => color || theme.color.white};
  font-size: ${({ size }) => size || "1em"};
`;

export const Span = styled.span`
  font-size: 14px;
  color: ${({ color }) => color || theme.color.black};
`;
