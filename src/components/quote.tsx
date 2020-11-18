import { useBreakpointValue, Box, BoxProps } from "@chakra-ui/react";
import React from "react";
import { DefaultText } from "./default-text";

interface QuoteProps extends BoxProps {
  text: string;
  author: string;
  authorSubtext: string;
}
export const Quote: React.FC<QuoteProps> = ({
  text,
  author,
  authorSubtext,
  ...props
}) => {
  const textSize = useBreakpointValue({
    base: "xs",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "2xl",
  });

  const paddingY = useBreakpointValue({
    base: "8",
    sm: "10",
    md: "16",
    lg: "24",
    xl: "28",
  });
  return (
    <Box textAlign="center" paddingY={paddingY} {...props}>
      <DefaultText>{text}</DefaultText>
      <DefaultText fontSize={textSize}>
        <strong>{author}</strong>, {authorSubtext}
      </DefaultText>
    </Box>
  );
};
