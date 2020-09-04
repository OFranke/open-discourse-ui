import { theme } from "@chakra-ui/core";

export const theming = {
  backgroundYellow: "#FDC002",
};

export const customTheme = {
  ...theme,
  fonts: {
    ...theme.fonts,
    body: "ubuntu",
  },
  colors: {
    ...theme.colors,
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  },
};
