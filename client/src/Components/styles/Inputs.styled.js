import styled from "styled-components";

export const StyledTextInput = styled.input`
  width: 100%;
`;

export const StyledSubmitInput = styled.input`
  border: 2px solid;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 60px;
  background-color: ${({ bg }) => bg || "transparent"};
  color: ${({ color }) => color || "#000000"};
  transition-duration: 0.2s;
  &:hover {
    transform: scale(0.98);
  }
`;
