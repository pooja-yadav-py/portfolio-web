import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
    --dark-bg: #0E6655;
    --ul-bg: #117A65;
    --white : white;
    --hover-bg:#48C9B0;
}
ul li{
    list-style:none; 
    box-sizing: border-box;
}
a{
    
    text-decoration: none;
}
`;

export default GlobalStyles;