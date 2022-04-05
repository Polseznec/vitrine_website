import styled from "styled-components";
import { theme } from "./_Theme.styled";

export const StyledButton = styled.button`
  text-transform: uppercase;
  font-weight: bold;
  border: 2px solid;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 60px;
  background-color: ${({ bg }) => bg || "transparent"};
  color: ${({ color }) => color || theme.color.secondary};
  transition-duration: 0.2s;
  &:hover {
    transform: scale(0.98);
  }
`;
