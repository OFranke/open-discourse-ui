import { Text, useBreakpointValue } from "@chakra-ui/core";
import styles from "./styles.module.css";
export const ColoredSubline: React.FC = ({ children }) => {
  const textSize = useBreakpointValue({
    base: "sm",
    sm: "xl",
    md: "2xl",
    lg: "3xl",
    xl: "4xl",
  });
  return (
    <Text
      marginBottom="1"
      fontFamily="Source Code Pro"
      textTransform="uppercase"
      fontWeight="bold"
      color="white"
      fontStyle="italic"
      fontSize={textSize}
    >
      <span
        style={{ background: "#EB558A" }}
        className={styles.insertWhitespace}
      >
        {children}
      </span>
    </Text>
  );
};
