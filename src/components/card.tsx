import { Box, useBreakpointValue, BoxProps } from "@chakra-ui/react";
export const Card: React.FC<BoxProps> = ({ children, ...props }) => {
  const padding = useBreakpointValue({
    base: "2",
    lg: "4",
  });
  return (
    <Box
      padding={padding}
      boxShadow="0 5px 50px -12px rgba(0,0,0,0.25)"
      rounded="md"
      {...props}
    >
      {children}
    </Box>
  );
};
