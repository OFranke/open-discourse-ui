import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider, CSSReset } from "@chakra-ui/react";

import { ChakraProvider } from "@chakra-ui/react";

// 1. Import the extendTheme util - it will merge with the default theme.
import { extendTheme } from "@chakra-ui/react";

import { createBreakpoints } from "@chakra-ui/theme-tools";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  // Then add your custom breakpoints as key-value pairs
  const breakpoints = createBreakpoints({
    sm: "480px",
    md: "768px",
    lg: "1024px",
    xl: "2560px",
  });

  // 2. Extend the theme to include custom colors, fonts, etc.
  const extendedTheme = {
    breakpoints,
    fonts: {
      heading: "Source Sans Pro",
      body: "Source Sans Pro",
    },
    colors: {
      pink: {
        500: "#EB558A",
      },
    },
    additionalColors: { yellow: "#FFF78E" },
    styles: { global: { body: { bg: "gray.50" } } },
  };
  const customTheme = extendTheme(extendedTheme);
  console.log("\x1b[33m%s\x1b[0m", "%c >> theme", customTheme);
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
