import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
  }

  body {
    color: #6c6c6c;
    font-size: 1rem;

    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #27AE60;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
      background-color: #EDEDED;
    }
  }

  /* Minimal display responsiveness */
  @media (max-width: 700px) and (max-height: 870px) {
    .app-container {
      width: 50%;
      height: 50%;
    }
  }

  /* Displaying 50% of the content beyond 700px width and 870px height */
  @media (min-width: 700px) and (min-height: 870px) {
    .app-container {
      width: 10%;
      height: 10%;
      margin: 0 !important;
      padding: 0 !important;
    }

    * {
      margin: 0 !important;
      padding: 0 !important;
    }
  }
`;

export default GlobalStyle;
