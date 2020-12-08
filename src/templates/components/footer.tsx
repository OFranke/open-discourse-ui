import React from "react";
import { Flex, Box, Link, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";
import { DefaultContainer } from "../../components/default-container";
import { NavItem } from "./nav-item";
import { DefaultText } from "../../components/default-text";

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
      <DefaultContainer size="l">
        <Flex
          as="nav"
          align="center"
          display={{ base: "block", sm: "flex" }}
          wrap="wrap"
          paddingY={{ base: "2", sm: "4" }}
          width="100%"
        >
          <DefaultText
            fontSize={textSize}
            marginBottom="0"
            marginTop={{ base: 4, lg: 0 }}
            flex="1"
            flexGrow={1}
            textAlign={{ base: "center", sm: "left" }}
          >
            © 2020 Limebit GmbH
          </DefaultText>

          <Box
            display={"flex"}
            alignItems="center"
            flexGrow={1}
            justifyContent={{ base: "center", sm: "flex-end" }}
            flex="1"
          >
            <NavItem href="/impressum" underlineColor="black">
              Impressum
            </NavItem>
            <NavItem href="/datenschutz" underlineColor="black">
              Datenschutz
            </NavItem>
          </Box>
        </Flex>
      </DefaultContainer>
    </>
  );
};
