import { useColorModeValue, Text } from "@chakra-ui/core";

export const BodyText: React.FC = ({ children }) => {
  return (
    <Text fontFamily="'Source Sans Pro', sans-serif" m="6">
      {children}
    </Text>
  );
};
