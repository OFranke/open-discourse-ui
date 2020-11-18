import React from "react";
import { Box, Link } from "@chakra-ui/react";
import { DefaultText } from "../../components/default-text";
import { useBreakpointValue } from "@chakra-ui/react";

interface NavItemProps {
  href: string;
  underlineColor: string;
}
export const NavItem: React.FC<NavItemProps> = ({
  href,
  underlineColor,
  children,
}) => {
  const textSize = useBreakpointValue({
    base: "sm",
    sm: "md",
    md: "md",
    lg: "xl",
    xl: "4xl",
  });
  return (
    <Link href={href} _hover={{ textDecoration: "none" }}>
      <Box>
        <DefaultText
          marginTop={{ base: 4, lg: 0 }}
          marginRight={{ base: 6, lg: 10, xl: 14 }}
          display="inline-block"
          fontSize={textSize}
          _hover={{
            textDecoration: "none",
            borderBottom: `${underlineColor} 4px solid`,
          }}
        >
          {children}
        </DefaultText>
      </Box>
    </Link>
  );
};
