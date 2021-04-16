import React from "react";
import { Box } from "@chakra-ui/react";
import DefaultButton, {
  DefaultButtonProps,
} from "@bit/limebit.limebit-ui.default-button";

export const ButtonWithTooltipDisable = React.forwardRef<
  HTMLDivElement,
  DefaultButtonProps
>(({ children, onMouseEnter, ...props }, ref) => {
  return (
    // @TODO: Find way to fix typing.
    // @ts-ignore
    <Box ref={ref} onMouseEnter={props.isDisabled ? onMouseEnter : undefined}>
      <DefaultButton
        onMouseEnter={props.isDisabled ? undefined : onMouseEnter}
        {...props}
      >
        {children}
      </DefaultButton>
    </Box>
  );
});
