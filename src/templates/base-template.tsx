import { Flex, Text } from "@chakra-ui/core";
import { theme } from "@chakra-ui/core";
import { Header } from "./components/header";
import { ChakraProvider } from "@chakra-ui/core";

// 1. Import the extendTheme util - it will merge with the default theme.
import { extendTheme } from "@chakra-ui/core";

import { createBreakpoints } from "@chakra-ui/theme-tools";

// Then add your custom breakpoints as key-value pairs
const breakpoints = createBreakpoints({
  sm: "30em", // 30*16 = up to 480px --> Mobile
  md: "48em", // 48*16 = from 481px to 768px --> Mobile Landscape & Tablet
  lg: "85em", // 85*16 = from 769px to 1360px --> HD Ready
  xl: "120em", // 120*16 = from 1361px to 1920px --> Full HD
});

// 2. Extend the theme to include custom colors, fonts, etc.
const extendedTheme = {
  breakpoints,
  fonts: {
    heading: "Source Sans Pro",
    body: "Source Sans Pro",
  },
  // textStyles: {
  //   h1: {
  //     // you can also use responsive styles
  //     fontSize: ["48px", "72px"],
  //     fontWeight: "bold",
  //     lineHeight: "110%",
  //     letterSpacing: "-2%",
  //   },
  //   h2: {
  //     fontSize: ["36px", "48px"],
  //     fontWeight: "semibold",
  //     lineHeight: "110%",
  //     letterSpacing: "-1%",
  //   },
  // },
};

const customTheme = extendTheme(extendedTheme);
// font-family: 'Source Code Pro', monospace;
// font-family: 'Source Sans Pro', sans-serif;
export const BaseTemplate: React.FC = ({ children }) => {
  return (
    <ChakraProvider theme={customTheme}>
      <Flex direction="column">
        <Header />
        {/* <Flex padding="1.5rem" direction="column"> */}
        {children}
        {/* </Flex> */}
      </Flex>
    </ChakraProvider>
  );
};
