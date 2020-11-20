import { DefaultButton, DefaultButtonProps } from "./default-button";
import { Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";
interface ButtonLinkProps extends DefaultButtonProps {
  href: string;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
  children,
  ...props
}) => {
  return (
    <NextLink href={href} passHref>
      <ChakraLink _hover={{ textDecoration: "none" }}>
        <DefaultButton {...props}>{children}</DefaultButton>
      </ChakraLink>
    </NextLink>
  );
};
