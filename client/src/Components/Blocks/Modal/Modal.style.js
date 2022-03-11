import styled from "styled-components";
import { IndexModal } from "./Modal.index.jsx";

export const Modal = styled(IndexModal)`
  width: 50vw;
  height: 50vh;
  top: 50%;
  left: 50%;
  margin-left: calc(50vw / 2);
  margin-top: calc(50vh / 2);
  position: fixed;
  left: 0;
  top: 0;
  overflow: auto;
  z-index: 1000;
  background-color: lightgray;
`;
