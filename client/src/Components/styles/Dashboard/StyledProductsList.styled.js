import styled from "styled-components";

export const StyledProductsListContainer = styled.div`
  display: flex;
  background-color: red;
  height: 500px;
  width: 50%;
  flex-direction: column;
  overflow-y: scroll;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    height: 200px;
    flex-direction: row;
    overflow-x: scroll;
  }
`;
