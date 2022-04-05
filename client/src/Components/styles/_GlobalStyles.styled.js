import { createGlobalStyle } from "styled-components";
import { theme } from "./_Theme.styled";

export const GlobalStyles = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=PT+Mono&display=swap');

    * { box-sizing: border-box}

    body {
        font-family: 'poppins',sans-serif;
        margin:0px;
        padding: 0px;
        box-sizing: border-box;
        min-height: 100vh;
        background-color: ${theme.color.pirmary};
        }
    
    h1,h2,h3,h4,h5,h6 {
        margin: 0;
        padding: 0;
    }

    a {
        color: white;
        text-decoration: none;
    }
    `;
