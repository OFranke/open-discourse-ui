import {
  ResponsiveValue,
  Text,
  TextProps,
  useBreakpointValue,
} from "@chakra-ui/react";
import styles from "./styles.module.css";

interface ColoredSublineProps {
  backgroundColor: string;
}

export const ColoredSubline: React.FC<ColoredSublineProps> = ({
  backgroundColor,
  children,
}) => {
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
      <Text
        as="span"
        background={backgroundColor}
        className={styles.insertWhitespace}
      >
        {children}
      </Text>
    </Text>
  );
};
