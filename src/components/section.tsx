import { useBreakpointValue, Box, BoxProps } from "@chakra-ui/core";

export const Section: React.FC<BoxProps> = ({ children, ...props }) => {
  const marginBottomSize = useBreakpointValue({
    base: "8",
    sm: "14",
    md: "20",
    lg: "20",
    xl: "32",
  });
  return (
    <Box as="section" marginBottom={marginBottomSize} {...props}>
      {children}
    </Box>
  );
};
