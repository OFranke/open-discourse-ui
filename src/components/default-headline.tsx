import { Heading, HeadingProps } from "@chakra-ui/react";

import { useTheme } from "@chakra-ui/react";
interface DefaultHeadlineProps extends HeadingProps {
  size: //  "xs" |
  "s" | "m";
  //  | "l";
}
export const DefaultHeadline: React.FC<DefaultHeadlineProps> = ({
  as,
  size,
  children,
  ...props
}) => {
  const headingSizes = {
    // xs: { base: "sm", md: "md", lg: "lg", xl: "xl" },
    s: { base: "xl", md: "3xl", lg: "4xl", xl: "5xl" },
    m: { base: "2xl", md: "4xl", lg: "4xl", xl: "6xl" },
    // l: { base: "xl", md: "2xl", lg: "3xl", xl: "4xl" },
  };

  const headingMarginBottom = {
    // xs: { base: "2", md: "4", lg: "6" },
    s: { base: "4", md: "6", lg: "10" },
    m: { base: "5", md: "7", lg: "12" },
    // l: { base: "6", md: "8", lg: "12" },
  };

  return (
    <Heading
      as={as}
      fontFamily="Source Sans Pro"
      fontSize={headingSizes[size]}
      textTransform="uppercase"
      fontWeight="bold"
      marginBottom={headingMarginBottom[size]}
      {...props}
    >
      {children}
    </Heading>
  );
};
