import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalContextProvider } from './context/global';
import { ChakraProvider, CSSReset } from "@chakra-ui/react";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <CSSReset />
      <GlobalContextProvider>
        <div className="app-container">
          <App />
        </div>
      </GlobalContextProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
