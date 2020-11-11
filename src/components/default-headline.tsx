import { Heading, HeadingProps, useBreakpointValue } from "@chakra-ui/core";

import { useTheme } from "@chakra-ui/core";
interface DefaultHeadlineProps extends HeadingProps {
  size: "s" | "m" | "l";
}
export const DefaultHeadline: React.FC<DefaultHeadlineProps> = ({
  as,
  size,
  children,
  ...props
}) => {
  const headingSizes = {
    s: { base: "md", md: "lg", lg: "xl", xl: "2xl" },
    m: { base: "lg", md: "xl", lg: "2xl", xl: "3xl" },
    l: { base: "xl", md: "2xl", lg: "3xl", xl: "4xl" },
  };
  const headingSize = useBreakpointValue(headingSizes[size]);

  const headingMarginBottom = {
    s: { base: "4", md: "6", lg: "10" },
    m: { base: "5", md: "7", lg: "12" },
    l: { base: "6", md: "8", lg: "12" },
  };
  const marginBottomSize = useBreakpointValue(headingMarginBottom[size]);
  const theme = useTheme();
  console.log("\x1b[33m%s\x1b[0m", "%c >> variant", headingSize);
  console.log("\x1b[33m%s\x1b[0m", "%c >> theme", theme);
  return (
    <Heading
      as={as}
      fontFamily="Source Sans Pro"
      size={headingSize}
      textTransform="uppercase"
      fontWeight="bold"
      marginBottom={marginBottomSize}
      {...props}
    >
      {children}
    </Heading>
  );
};
