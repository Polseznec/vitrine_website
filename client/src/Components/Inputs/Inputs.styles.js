import styled from "styled-components";
import { IndexButton, IndexForm } from "./Inputs.index.jsx";

export const Button = styled(IndexButton)`
  width: 200px;
  height: 50px;
  box-shadow: none;
  border: none;
  background-color: blue;
`;

export const SexyButton = styled(Button)`
  background-color: pink;
`;

export const Form = styled(IndexForm)`
  background-color: red;
  width: 400px;
  height: 600px;
`;
