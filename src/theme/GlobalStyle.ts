import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
}
body{
    
    margin:0;
    padding:0;
    font-family: 'Roboto', sans-serif;
    min-height:100vh;
    width: 100vw;
    box-sizing: border-box;
    overflow-x: hidden;
    
    
}
`;
export default GlobalStyle;