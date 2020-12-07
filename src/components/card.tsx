import { Box, BoxProps } from "@chakra-ui/react";
export const Card: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box
      padding={{
        base: "2",
        lg: "4",
      }}
      boxShadow="0 5px 50px -12px rgba(0,0,0,0.25)"
      rounded="md"
      {...props}
    >
      {children}
    </Box>
  );
};
