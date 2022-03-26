import styled from "styled-components";
export const StyledSelectedProductContainer = styled.div`
  display: flex;
  background-color: lightblue;
  width: 50%;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`;
