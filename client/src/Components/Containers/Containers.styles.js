import styled from "styled-components";
import { CONSTANT_COLOR } from "../../styles/constant.style";
import {
  IndexApp,
  IndexColumn,
  IndexFlexCenter,
  indexFullScreen,
  IndexDashboard,
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

export const Container = styled(IndexDashboard)`
  display: ${(props) => (props && "flex") || null};
  justify-content: ${({ center, column, start, end }) =>
    (center && "center") ||
    (column && "center") ||
    (start && "flex-start") ||
    (end && "flex-end") ||
    null};
  align-items: ${({ center, column }) =>
    (center && "center") || (column && "center") || null};
  flex-direction: ${({ column }) => (column && "center") || "row"};
  height: ${({ fullScreen }) => fullScreen && "100vh"};
  width: ${({ fullScreen }) => fullScreen && "100vw"};
  background-color: ${CONSTANT_COLOR.transparent};
`;
