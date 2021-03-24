import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
    padding: 0;
    margin: 0;
  }
  body {
    font-family: 'Open Sans';
  }
  #root {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
    display: flex;
  }
  p,
  label {
    font-family: 'Open Sans';
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
