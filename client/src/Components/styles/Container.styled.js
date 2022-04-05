import styled from "styled-components";

import { theme } from "../styles/_Theme.styled";

export const FullScreenContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
`;

export const Padding = styled.div`
  padding: ${({ padding }) => padding};
`;

export const StyledFooterContainer = styled.div`
  min-height: 100px;
  min-width: 100vw;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px;
  color: ${theme.color.white};
  font-size: 11px;
`;
