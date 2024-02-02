import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background-color: ${({ theme }) => theme.colors.bg};
}
label{
    color: #fff;
}

/* p: "#364B55", */
`;

export default GlobalStyle;
