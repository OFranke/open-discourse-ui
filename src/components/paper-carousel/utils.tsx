import { Flex, FlexProps, Box } from "@chakra-ui/react";
import styles from "./styles.module.css";

export const SlideContainer: React.FC<FlexProps> = ({
  children,
  marginBottom,
}) => {
  return (
    <Flex
      marginTop={{ base: "50px", md: "75px", lg: "100px" }}
      marginBottom={marginBottom}
      flexDirection="column"
    >
      {children}
    </Flex>
  );
};

export const InnerContainer: React.FC = ({ children }) => {
  return (
    <Box
      className={styles.shadowed}
      marginTop="-25vh"
      paddingX={{ base: 4, md: 10, xl: 24 }}
      paddingY={{ base: 6, md: 14, xl: 40 }}
      backgroundImage="linear-gradient(rgba(255, 255, 255, 1), rgba(247, 250, 252, 1))"
    >
      {children}
    </Box>
  );
};
