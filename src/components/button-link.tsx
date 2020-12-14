import {
  DefaultButton,
  DefaultButtonProps,
} from "@bit/limebit.limebit-ui.default-button";
import { NextChakraLink } from "@bit/limebit.limebit-ui.next-chakra-link";
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
