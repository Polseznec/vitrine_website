import { createGlobalStyle } from "styled-components";
import { CONSTANT_COLOR } from "./constant.style";

export const GlobalStyles = createGlobalStyle`
    body{
        margin:0px;
        padding: 0px;
        box-sizing: border-box;
        min-height: 100vh;
        background-color: ${CONSTANT_COLOR.pirmary};
        }
        `;
