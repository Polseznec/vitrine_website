import styled from "styled-components";

export const StyledModal = styled.div`
  width: 50vw;
  height: 50vh;
  margin-left: calc(50vw / 2);
  margin-top: calc(50vh / 2);
  position: fixed;
  left: 0;
  top: 0;
  overflow: auto;
  z-index: 1000;
  background-color: lightgray;
`;
