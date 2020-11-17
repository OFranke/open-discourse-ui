import React from "react";
import { useBreakpointValue, Box, BoxProps, Stack } from "@chakra-ui/react";
import { DefaultText } from "./default-text";

export interface CalloutProps extends BoxProps {
  calloutText: string;
}

export const Callout: React.FC<CalloutProps> = ({ calloutText, ...props }) => {
  const padding = useBreakpointValue({
    base: "2",
    sm: "2",
    md: "3",
    lg: "4",
    xl: "5",
  });
  const marginY = useBreakpointValue({
    base: "4",
    sm: "10",
    md: "10",
    lg: "14",
    xl: "14",
  });
  const borderWidth = useBreakpointValue({
    base: "1px",
    md: "2px",
    xl: "3px",
  });
  return (
    <Stack>
      <Box
        boxShadow="0 5px 50px -12px rgba(0,0,0,0.12)"
        borderColor="gray.600"
        backgroundColor="gray.200"
        borderWidth={borderWidth}
        rounded="md"
        overflow="hidden"
        position="relative"
        marginY={marginY}
        {...props}
      >
        <DefaultText padding={padding}>
          <DefaultText fontWeight="bold" as="span">
            Hinweis:
          </DefaultText>{" "}
          {calloutText}
        </DefaultText>
      </Box>
    </Stack>
  );
};
