import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`
  *{
    margin : 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none,
    text-decoration: none;
    font-family: 'Inter', sans-serif;
  }

  body {
    background-color: red;
  }

`;

export default GlobalStyle;