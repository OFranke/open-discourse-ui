import { Stack } from "@chakra-ui/core";
import React, {ReactNode} from "react";

export const Container: React.FC = ({ children }) => {
  return (
    <Stack paddingY="10rem" minHeight="50%" maxW="6xl" alignItems="center" justifyContent="center">
      {children}
    </Stack>
  );
};
