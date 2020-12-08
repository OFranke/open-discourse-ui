import { Text, TextProps } from "@chakra-ui/react";
export const Tagline: React.FC<TextProps> = ({ children, ...props }) => {
  return (
    <Text
      fontSize={{
        base: "sm",
        sm: "lg",
        md: "xl",
        lg: "2xl",
        xl: "3xl",
      }}
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
