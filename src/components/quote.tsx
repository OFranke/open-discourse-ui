import { Box } from "@chakra-ui/react";
import React from "react";
import { DefaultText } from "@bit/limebit.limebit-ui.default-text";

export const Quote: React.FC = ({ children }) => {
  return (
    <Box
      textAlign="center"
      paddingY={{
        base: "8",
        sm: "10",
        md: "16",
        lg: "24",
        xl: "28",
      }}
    >
      <DefaultText>{children}</DefaultText>
    </Box>
  );
};
