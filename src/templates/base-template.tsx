import { Flex } from "@chakra-ui/react";
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
  },
  additionalColors: { yellow: "#FFF78E" },
};

const customTheme = extendTheme(extendedTheme);
export const BaseTemplate: React.FC = ({ children }) => {
  return (
    <ChakraProvider theme={customTheme}>
      <Flex direction="column">
        <Header />
        {children}
        <Footer />
      </Flex>
    </ChakraProvider>
  );
};
