import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import mainTheme from "./themes/main-theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={mainTheme}>
      {/* 👇 Here's the script */}
      <ColorModeScript initialColorMode={mainTheme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
