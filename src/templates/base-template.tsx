import { Flex, Text } from "@chakra-ui/react";
import { theme } from "@chakra-ui/react";
import { Header } from "./components/header";
import { ChakraProvider } from "@chakra-ui/react";

// 1. Import the extendTheme util - it will merge with the default theme.
import { extendTheme } from "@chakra-ui/react";

import { createBreakpoints } from "@chakra-ui/theme-tools";

// Then add your custom breakpoints as key-value pairs
const breakpoints = createBreakpoints({
  sm: "480px",
  md: "768px",
  lg: "1024px",
  xl: "1920px",
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
};

const customTheme = extendTheme(extendedTheme);
export const BaseTemplate: React.FC = ({ children }) => {
  return (
    <ChakraProvider theme={customTheme}>
      <Flex direction="column">
        <Header />
        {children}
      </Flex>
    </ChakraProvider>
  );
};
