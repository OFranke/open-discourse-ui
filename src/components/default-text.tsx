import { Text, TextProps, useBreakpointValue } from "@chakra-ui/react";
export const DefaultText: React.FC<TextProps> = ({ children, ...props }) => {
  const textSize = useBreakpointValue({
    base: "sm",
    sm: "xl",
    md: "2xl",
    lg: "2xl",
    xl: "4xl",
  });

  return (
    <Text fontSize={textSize} {...props}>
      {children}
    </Text>
  );
};
