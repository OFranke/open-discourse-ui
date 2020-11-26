import { DefaultButton, DefaultButtonProps } from "./default-button";
import { Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";
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
    <NextLink href={href} passHref>
      <ChakraLink _hover={{ textDecoration: "none" }} isExternal={isExternal}>
        <DefaultButton {...props}>{children}</DefaultButton>
      </ChakraLink>
    </NextLink>
  );
};
