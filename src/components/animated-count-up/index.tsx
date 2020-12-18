import { Text, Box } from "@chakra-ui/react";
import { animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { DefaultText } from "@bit/limebit.limebit-ui.default-text";

import styles from "./styles.module.css";

interface AnimatedCountUpProps {
  from: number;
  to: number;
  subline: string;
  color: string;
}
export const AnimatedCountUp: React.FC<AnimatedCountUpProps> = ({
  from,
  to,
  subline,
  color,
}) => {
  const nodeRef = useRef<HTMLParagraphElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [inviewbox, setInviewbox] = useState(false);
  useEffect(() => {
    function isInViewbox() {
      if (
        nodeRef.current?.getBoundingClientRect() &&
        nodeRef.current.getBoundingClientRect().top >= 0 &&
        nodeRef.current.getBoundingClientRect().bottom <=
          (window.innerHeight || document.documentElement.clientHeight)
      ) {
        setInviewbox(true);
      }
    }
    window.addEventListener("scroll", isInViewbox);

    return () => {
      window.removeEventListener("scroll", isInViewbox);
    };
  }, []);
  if (inviewbox)
    animate(from, to, {
      duration: 1,
      onUpdate(value) {
        if (nodeRef.current) {
          nodeRef.current.textContent = value.toFixed(0);
        }
      },
    });
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
          <Box as={"span"} style={{ width: "100%" }}>
            <Box
              as={"span"}
              className={inviewbox ? styles.progress : undefined}
              backgroundColor={color}
              ref={barRef}
            ></Box>
          </Box>
        </Box>
      </Box>
      <DefaultText>{subline}</DefaultText>
    </>
  );
};
