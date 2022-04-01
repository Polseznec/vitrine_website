import styled from "styled-components";

export const FullScreenContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
`;

export const Padding = styled.div`
  padding: ${({ padding }) => padding};
`;

export const StyledHeaderContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: blue;
`;

export const StyledFooterContainer = styled.div`
  min-height: 50vh;
  min-width: 100vw;
  background-color: black;
  color: #f1f1f1;
`;
