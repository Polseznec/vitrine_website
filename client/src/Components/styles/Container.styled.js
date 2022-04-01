import styled from "styled-components";

export const FullScreenContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
`;

export const Padding = styled.div`
  padding: ${({ padding }) => padding};
`;

export const StyledHeaderContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-image: url(https://images.unsplash.com/photo-1524672353063-4f66ee1f385e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2938&q=80);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const StyledFooterContainer = styled.div`
  min-height: 50vh;
  min-width: 100vw;
  background-color: black;
  color: #f1f1f1;
`;
