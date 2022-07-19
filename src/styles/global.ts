import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: transparent;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: #0a192f;

    color: #ffffff;
    -webkit-font-smoothing: antialiased;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;

    font-size: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background 200ms;
  }

  body,
  input,
  textarea,
  button {
    font-family: 'Nunito', sans-serif;
    font-weight: normal;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: bold;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
