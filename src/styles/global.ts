import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', Helvetica, sans-serif;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.text};
  }

  button {
    cursor: pointer;
  }

  /* @media (max-width: 595px) {
    :root {
      font-size: 70%;
    }
  } */
`;

export default GlobalStyles;
