import { Flex, Box } from "@chakra-ui/react";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { ChakraProvider } from "@chakra-ui/react";

// 1. Import the extendTheme util - it will merge with the default theme.
import { extendTheme } from "@chakra-ui/react";

import { createBreakpoints } from "@chakra-ui/theme-tools";

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
    gray: {
      100: "#F2F2F2",
      200: "#E9E9E9",
      300: "#CCCCCC",
    },
  },
  additionalColors: { yellow: "#FFF78E" },
  styles: { global: { body: { bg: "gray.50" } } },
};
const customTheme = extendTheme(extendedTheme);
export const BaseTemplate: React.FC = ({ children }) => {
  return (
    <ChakraProvider theme={customTheme}>
      <Flex direction="column">
        <Header />
        <Box marginTop={{ base: "64px", lg: "80px" }}>{children}</Box>
        <Footer />
      </Flex>
    </ChakraProvider>
  );
};
