import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: white;
    }
    body{
        background: black;
        font-family: "Quiet Sans", sans-serif;
        overflow-x: hidden;

    }
    a{
        text-decoration: none;
        user-select: none;
    }
    img{
        user-select: none;
    }

`;

export default GlobalStyle;
