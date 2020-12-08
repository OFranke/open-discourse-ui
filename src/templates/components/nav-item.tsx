import React from "react";
import { Box } from "@chakra-ui/react";
import { DefaultText } from "../../components/default-text";
import { useRouter } from "next/router";
import { NextChakraLink } from "../../components/next-chakra-link";

interface NavItemProps {
  href: string;
  underlineColor: string;
}
export const NavItem: React.FC<NavItemProps> = ({
  href,
  underlineColor,
  children,
}) => {
  const textSize = {
    base: "sm",
    sm: "md",
    md: "md",
    lg: "xl",
    xl: "4xl",
  };
  const router = useRouter();
  console.log("\x1b[33m%s\x1b[0m", "%c >> router.pathname", router.pathname);
  const isActiveLink = router.pathname == href;
  return (
    <NextChakraLink href={href} _hover={{ textDecoration: "none" }}>
      <Box>
        <DefaultText
          as="span"
          marginBottom={-4}
          display="inline-block"
          fontSize={textSize}
          borderBottom="transparent 4px solid"
          _hover={{
            textDecoration: "none",
            borderBottom: `${underlineColor} 4px solid`,
          }}
          {...(isActiveLink && { borderBottom: `${underlineColor} 4px solid` })}
        >
          {children}
        </DefaultText>
      </Box>
    </NextChakraLink>
  );
};
