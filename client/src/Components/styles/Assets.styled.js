import styled from "styled-components";
import { theme } from "./_Theme.styled";

export const HorizontalLine = styled.div`
  height: ${({ height }) => height || "1px"};
  width: ${({ width }) => width || "100%"};
  background-color: ${({ bgColor }) => bgColor || theme.color.black};
`;

export const VerticalLine = styled.div`
  height: ${({ height }) => height || "100%"};
  width: ${({ width }) => width || "1px"};
  background-color: ${({ bgColor }) => bgColor || theme.color.black};
`;

export const Logo = styled.img`
  height: ${({ height }) => height || "500px"};
`;

export const Circle = styled.div`
  cursor: pointer;
  max-width: ${({ size }) => size || "100%"};
  max-height: ${({ size }) => size || "100%"};
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "grey" : theme.color.black)};
  transform: ${({ active }) => (active ? "scale(1.05)" : "scale(0.9)")};
`;
