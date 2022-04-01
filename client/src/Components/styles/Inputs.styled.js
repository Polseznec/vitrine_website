import styled from "styled-components";

export const StyledTextInput = styled.input`
  width: auto;
`;

export const StyledInput = styled.input`
  border: none;
  background-color: transparent;
  border-bottom: 2px solid black;
`;

export const StyledForm = styled.form`
  border: 1px solid black;
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
