import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  html {
    font-family: Rubik, sans-serif;
  }

  body {
    text-align: center;
  }

  #root {
    display: flex;
    flex-direction: column;
  }
`;

export { GlobalStyle };
