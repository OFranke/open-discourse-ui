import { Text, TextProps, useBreakpointValue } from "@chakra-ui/react";
export const Tagline: React.FC<TextProps> = ({ children, ...props }) => {
  const textSize = useBreakpointValue({
    base: "sm",
    sm: "lg",
    md: "xl",
    lg: "2xl",
    xl: "3xl",
  });
  return (
    <Text
      fontSize={textSize}
      textTransform="uppercase"
      fontWeight="bold"
      color="pink.500"
      marginBottom={{ base: "2", md: "4", lg: "6" }}
      {...props}
    >
      {children}
    </Text>
  );
};
