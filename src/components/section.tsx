import { Box, BoxProps } from "@chakra-ui/react";

export const Section: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box
      as="section"
      marginBottom={{
        base: "8",
        sm: "14",
        md: "20",
        lg: "20",
        xl: "32",
      }}
      {...props}
    >
      {children}
    </Box>
  );
};
