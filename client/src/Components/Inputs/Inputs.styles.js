import styled from "styled-components";
import { IndexButton, IndexForm } from "./Inputs.Index.jsx";
import { CONSTANT_COLOR } from "../../styles/constant.style";

export const Button = styled(IndexButton)`
  width: 100px;
  height: 40px;
  box-shadow: none;
  border: none;
  background-color: ${CONSTANT_COLOR.secondary};
  margin: 5px;
  cursor: pointer;
`;

export const Form = styled(IndexForm)`
  background-color: red;
  width: 400px;
  height: 600px;
`;
