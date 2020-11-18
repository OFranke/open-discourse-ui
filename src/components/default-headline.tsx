import { Heading, HeadingProps, useBreakpointValue } from "@chakra-ui/react";

import { useTheme } from "@chakra-ui/react";
interface DefaultHeadlineProps extends HeadingProps {
  size: "xs" | "s" | "m" | "l";
}
export const DefaultHeadline: React.FC<DefaultHeadlineProps> = ({
  as,
  size,
  children,
  ...props
}) => {
  const headingSizes = {
    xs: { base: "sm", md: "md", lg: "lg", xl: "xl" },
    s: { base: "md", md: "lg", lg: "xl", xl: "2xl" },
    m: { base: "lg", md: "xl", lg: "2xl", xl: "3xl" },
    l: { base: "xl", md: "2xl", lg: "3xl", xl: "4xl" },
  };
  const headingSize = useBreakpointValue(headingSizes[size]);

  const headingMarginBottom = {
    xs: { base: "2", md: "4", lg: "6" },
    s: { base: "4", md: "6", lg: "10" },
    m: { base: "5", md: "7", lg: "12" },
    l: { base: "6", md: "8", lg: "12" },
  };
  const marginBottomSize = useBreakpointValue(headingMarginBottom[size]);
  const theme = useTheme();
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
