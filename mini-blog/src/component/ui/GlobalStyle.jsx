import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --border: 1px solid #c4c4c4;
    --radius: 10px;
    --padding: 20px 10px;
  }

  body {
    margin: 0;
    padding: 0;
  }

  textarea {
    resize: none;
    border: 1px solid #c4c4c4;
    width: 70vw;

    &:focus {
      outline: none;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }

  button {
    background-color: #c2c2c2;
    border-radius: 5px;
    color: black;
    padding: 5px 15px;
    border: none;
    cursor: pointer;
  }
`;
