import { Progress, Text, useBreakpointValue, Box } from "@chakra-ui/core";
import { animate } from "framer-motion";
import { useEffect, useRef } from "react";

import { useInView } from "react-intersection-observer";

interface AnimatedProgressProps {
  to: number;
}
export const AnimatedProgress: React.FC<AnimatedProgressProps> = ({ to }) => {
  const nodeRef = useRef<HTMLParagraphElement>(null);

  const textSize = useBreakpointValue({
    base: "sm",
    sm: "xl",
    md: "2xl",
    lg: "3xl",
    xl: "4xl",
  });

  return (
    <Box
      borderRadius={"0.5em"}
      backgroundColor="rgb(233, 233, 233)"
      height="10px"
    >
      <Box
        backgroundColor="rgb(62, 122, 235)"
        height="10px"
        borderRadius="1rem"
        transition="1s ease"
        transitionDelay="0.5s"
      ></Box>
    </Box>
  );
};
