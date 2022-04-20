import styled from "styled-components";

import { theme } from "./_Theme.styled";

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

export const FullScreenModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  overflow: auto;
  z-index: 1000;
  border-top: 5px solid ${theme.color.black};
  background-color: ${theme.color.white};
  animation: slider 0.5s ease-in-out;

  @keyframes slider {
    0% {
      top: 100vh;
    }
    100% {
      top: 0;
    }
  }
`;
