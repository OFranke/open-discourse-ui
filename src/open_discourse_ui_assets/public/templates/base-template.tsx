import {
  Flex,
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
} from "@chakra-ui/core";
import { Header } from "./components/header";
import { customTheme } from "./theming";
import React from "react";

export const BaseTemplate: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <ColorModeProvider>
        <Flex direction="column">
          <Header />
          <Flex direction="column" alignItems="center">
            {children}
          </Flex>
        </Flex>
      </ColorModeProvider>
    </ThemeProvider>
  );
};
