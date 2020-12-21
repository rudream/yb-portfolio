import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: white;
    }
    html{
        &::-webkit-scrollbar{
            width: 0.5rem
        }
        &::-webkit-scrollbar-thumb{
            background-color: #4D789E;
            border-radius: 2rem;
        }
        &::-webkit-scrollbar-track{
            background-color: black;
        }
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
