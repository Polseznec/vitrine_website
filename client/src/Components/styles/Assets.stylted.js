import styled from "styled-components";

export const HorizontalLine = styled.div`
  height: ${({ height }) => height || "1px"};
  width: ${({ width }) => width || "100%"};
  background-color: ${({ bgColor }) => bgColor || "black"};
`;

export const VerticalLine = styled.div`
  height: ${({ height }) => height || "100%"};
  width: ${({ width }) => width || "1px"};
  background-color: ${({ bgColor }) => bgColor || "black"};
`;
