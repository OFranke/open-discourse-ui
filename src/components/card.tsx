import { Box } from "@chakra-ui/core";
export const Card: React.FC = ({ children }) => {
  return (
    <Box boxShadow="0 5px 50px -12px rgba(0,0,0,0.25)" rounded="md">
      {children}
    </Box>
  );
};
