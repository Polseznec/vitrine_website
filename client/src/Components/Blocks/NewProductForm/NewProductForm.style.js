import styled from "styled-components";
import { IndexNewProductForm } from "./NewProductForm.index.jsx";

export const NewProductForm = styled(IndexNewProductForm)`
  width: 100vw;
  height: 100vh;
  top: 50%;
  left: 50%;
  position: fixed;
  left: 0;
  top: 0;
  overflow: auto;
  z-index: 1000;
  background-color: rgb(211, 211, 211, 0.5);
`;
