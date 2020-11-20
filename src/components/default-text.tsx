import { Text, TextProps, useBreakpointValue } from "@chakra-ui/react";
export const DefaultText: React.FC<TextProps> = ({ children, ...props }) => {
  const textSize = useBreakpointValue({
    base: "sm",
    sm: "xl",
    md: "2xl",
    lg: "2xl",
    xl: "4xl",
  });
  const marginBottom = useBreakpointValue({
    base: "4",
    md: "4",
    lg: "6",
    xl: "8",
  });
  return (
    <Text fontSize={textSize} marginBottom={marginBottom} {...props}>
      {children}
    </Text>
  );
};
