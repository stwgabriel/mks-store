import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    font-size: 62.5%;
    font-family: 'Montserrat', Helvetica, sans-serif;
  }
`;

export default GlobalStyles;
