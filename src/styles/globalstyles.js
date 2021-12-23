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

    * {
    box-sizing: border-box;
    }
`;

export default GlobalStyle;
