import { useBreakpointValue, Box, BoxProps } from "@chakra-ui/react";
import React from "react";
import { DefaultText } from "./default-text";

export const Quote: React.FC = ({ children }) => {
  const paddingY = useBreakpointValue({
    base: "8",
    sm: "10",
    md: "16",
    lg: "24",
    xl: "28",
  });
  return (
    <Box textAlign="center" paddingY={paddingY}>
      <DefaultText>{children}</DefaultText>
    </Box>
  );
};
