import { Text, useBreakpointValue, Box } from "@chakra-ui/core";
import { animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { DefaultText } from "../default-text";

import styles from "./styles.module.css";

interface AnimatedCountUpProps {
  from: number;
  to: number;
  subline: string;
}
export const AnimatedCountUp: React.FC<AnimatedCountUpProps> = ({
  from,
  to,
  subline,
}) => {
  const nodeRef = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 1,
      onUpdate(value) {
        if (node) {
          node.textContent = value.toFixed(0);
        }
      },
    });

    return () => controls.stop();
  }, [from, to]);

  const textSize = useBreakpointValue({
    base: "5xl",
    sm: "6xl",
    md: "4xl",
    lg: "6xl",
    xl: "6xl",
  });
  console.log("\x1b[33m%s\x1b[0m", "%c >> textSize", textSize);
  return (
    <>
      <Box display="inline-block" marginBottom="2">
        <Text ref={nodeRef} fontWeight={900} fontSize={textSize} />

        <Box className={styles.meter}>
          <span style={{ width: "100%" }}>
            <span className={styles.progress}></span>
          </span>
        </Box>
      </Box>
      <DefaultText>{subline}</DefaultText>
    </>
  );
};
