import { Flex, Text } from "@chakra-ui/core";
import { theme } from "@chakra-ui/core";
import { Header } from "./components/header";
import { ChakraProvider } from "@chakra-ui/core";

// 1. Import the extendTheme util - it will merge with the default theme.
import { extendTheme } from "@chakra-ui/core";

// 2. Extend the theme to include custom colors, fonts, etc.
const fonts = {
  fonts: {
    heading: '"Source Code Pro", monospace',
    body: "Source Code Pro, system-ui, monospace",
    mono: "Menlo, monospace",
  },
};

const customTheme = extendTheme({ fonts });
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
