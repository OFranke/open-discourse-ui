import React from "react";
import { Box, BoxProps, Stack } from "@chakra-ui/react";
import { DefaultText } from "@bit/limebit.limebit-ui.default-text";

export interface CalloutProps extends BoxProps {
  calloutText: string;
}

export const Callout: React.FC<CalloutProps> = ({ calloutText, ...props }) => {
  return (
    <Box
      boxShadow="0 5px 50px -12px rgba(0,0,0,0.12)"
      borderColor="gray.600"
      backgroundColor="gray.200"
      borderWidth={{
        base: "1px",
        md: "2px",
        xl: "3px",
      }}
      rounded="md"
      marginY={{
        base: "4",
        sm: "10",
        md: "10",
        lg: "12",
        xl: "14",
      }}
      {...props}
    >
      <DefaultText
        padding={{ base: "2", sm: "2", md: "3", lg: "4", xl: "5" }}
        margin={{ base: 0, sm: 0, md: 0, lg: 0, xl: 0 }}
      >
        <strong>Hinweis: </strong>
        {calloutText}
      </DefaultText>
    </Box>
  );
};
