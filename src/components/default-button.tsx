import { Button, ButtonProps, useBreakpointValue } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export interface DefaultButtonProps extends ButtonProps {
  colorScheme: string;
}
export const DefaultButton: React.FC<DefaultButtonProps> = ({
  children,
  colorScheme,
  ...props
}) => {
  const buttonSize = useBreakpointValue({ base: "md", md: "md", lg: "lg" });

  return (
    <Button
      colorScheme={colorScheme}
      size={buttonSize}
      fontSize={{ xl: "2xl" }}
      padding={{ xl: "8" }}
      textTransform="uppercase"
      rightIcon={<ArrowForwardIcon />}
      {...props}
    >
      {children}
    </Button>
  );
};
