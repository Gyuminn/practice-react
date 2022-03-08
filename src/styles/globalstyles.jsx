import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    #root, body, html {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
    }

    body {
        background-color: ${(props) => props.theme.bgColor};
        color: ${(props) => props.theme.textColor};
    }

    a {
        text-decoration: none;
        color:inherit;
    }
    
    * {
    box-sizing: border-box;
    }
`;

export default GlobalStyle;
