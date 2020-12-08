import { DefaultButton, DefaultButtonProps } from "./default-button";
import { Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";
import { NextChakraLink } from "./next-chakra-link";
interface ButtonLinkProps extends DefaultButtonProps {
  href: string;
  isExternal?: boolean;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
  isExternal,
  children,
  ...props
}) => {
  return (
    <NextChakraLink
      href={href}
      isExternal={isExternal}
      _hover={{ textDecoration: "none" }}
    >
      <DefaultButton {...props}>{children}</DefaultButton>
    </NextChakraLink>
  );
};
