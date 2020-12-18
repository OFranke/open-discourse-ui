import { Text, Box } from "@chakra-ui/react";
import { animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { DefaultText } from "@bit/limebit.limebit-ui.default-text";

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

  return (
    <>
      <Box display="inline-block" marginBottom="2">
        <Text
          ref={nodeRef}
          fontWeight={900}
          fontSize={{
            base: "5xl",
            sm: "6xl",
            md: "4xl",
            lg: "6xl",
            xl: "6xl",
          }}
        />

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
