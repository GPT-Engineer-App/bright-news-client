import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#004225", // Dark green, inspired by TechCrunch greens
    800: "#026440", // Medium green, a bit lighter than 900
    700: "#04855a", // Regular green, much lighter than 800
    600: "#6ac48a", // Light green, for highlights
    500: "#a0d9af", // Pale green, background or light elements
    400: "#e8f5e9", // Very pale green, for backgrounds
    300: "#202124", // Dark grey, for text and accents
    200: "#5f6368", // Medium grey, for secondary text
    100: "#e8eaed", // Light grey, for background contrasts
  },
};

const theme = extendTheme({
  colors,
  fonts: {
    heading: `'Segoe UI', 'San Francisco', 'Roboto', sans-serif`,
    body: `'Segoe UI', 'San Francisco', 'Roboto', sans-serif`,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
