import { Text, useBreakpointValue } from "@chakra-ui/react";
import styles from "./styles.module.css";
export const ColoredSubline: React.FC = ({ children }) => {
  const textSize = useBreakpointValue({
    base: "sm",
    sm: "xl",
    md: "2xl",
    lg: "3xl",
    xl: "4xl",
  });
  const marginBottom = useBreakpointValue({
    base: "4",
    sm: "10",
    md: "10",
    lg: "14",
    xl: "14",
  });
  return (
    <Text
      marginBottom={marginBottom}
      fontFamily="Source Code Pro"
      textTransform="uppercase"
      fontWeight="bold"
      color="white"
      fontStyle="italic"
      fontSize={textSize}
    >
      <Text as="span" background="pink.500" className={styles.insertWhitespace}>
        {children}
      </Text>
    </Text>
  );
};
