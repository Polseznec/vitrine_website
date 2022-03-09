import styled from "styled-components";
import {
  IndexApp,
  IndexColumn,
  IndexFlexCenter,
  indexFullScreen,
} from "./Containers.index.jsx";

export const App = styled(IndexApp)``;

export const FlexCenter = styled(IndexFlexCenter)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Column = styled(IndexColumn)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FullScreen = styled(indexFullScreen)`
  min-height: 100vh;
  min-width: 100vw;
`;
