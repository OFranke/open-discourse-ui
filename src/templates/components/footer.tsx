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
    <DefaultContainer size="l">
      <Flex
        as="nav"
        align="center"
        display={{ base: "block", md: "flex" }}
        wrap="wrap"
        paddingY={{ base: "2", md: "4" }}
        width="100%"
      >
        <Flex align="center" flex="1">
          <Link href={"/"}>
            <Box
              width={{
                base: "120px",
                sm: "120px",
                md: "150px",
                lg: "150px",
                xl: "240px",
              }}
            >
              <Image
                src={"/images/logos/open_discourse.png"}
                alt={"Open Discourse Logo"}
                layout="responsive"
                width="1250px"
                height="400px"
                quality="75"
              />
            </Box>
          </Link>
        </Flex>

        <DefaultText
          fontSize={textSize}
          marginBottom="0"
          marginTop={{ base: 4, lg: 0 }}
          flex="1"
          flexGrow={1}
          textAlign={{ base: "left", md: "center" }}
        >
          © 2020 Limebit GmbH
        </DefaultText>

        <Box
          display={{ base: "block", md: "flex" }}
          alignItems="center"
          flexGrow={1}
          justifyContent="flex-end"
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
  );
};
