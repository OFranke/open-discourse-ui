import React from "react";
import { Flex, Box, Stack, useBreakpointValue } from "@chakra-ui/react";
import { DefaultContainer } from "@bit/limebit.limebit-ui.default-container";
import { NavItem } from "./nav-item";
import { DefaultText } from "@bit/limebit.limebit-ui.default-text";

export const Footer: React.FC = () => {
  const textSize = useBreakpointValue({
    base: "sm",
    sm: "md",
    md: "md",
    lg: "xl",
    xl: "4xl",
  });
  return (
    <>
      <Box borderTop="1px solid" width="100%" borderColor="gray.200" />
      <DefaultContainer size="l" as="footer">
        <Flex
          as="nav"
          align="center"
          display={{ base: "block", sm: "flex" }}
          flexDirection="row-reverse"
          wrap="wrap"
          paddingY={{ base: "2", sm: "4" }}
          width="100%"
        >
          <Stack
            direction="row"
            spacing={{ base: 6, lg: 10, xl: 14 }}
            alignItems="center"
            flexGrow={1}
            justifyContent={{ base: "center", sm: "flex-end" }}
            flex="1"
          >
            <NavItem
              href="https://www.limebit.de/impressum"
              underlineColor="black"
              isExternal
            >
              Impressum
            </NavItem>
            <NavItem
              href="https://www.limebit.de/datenschutz"
              underlineColor="black"
              isExternal
            >
              Datenschutz
            </NavItem>
          </Stack>

          <DefaultText
            fontSize={textSize}
            marginBottom="0"
            textAlign={{ base: "center", sm: "left" }}
          >
            © 2021 Limebit GmbH
          </DefaultText>
        </Flex>
      </DefaultContainer>
    </>
  );
};
