import React, { useState } from "react";
import { Flex, Box, IconButton, Stack, chakra } from "@chakra-ui/react";

import { FaGithub } from "react-icons/fa";

import { HamburgerIcon } from "@chakra-ui/icons";
import { DefaultContainer } from "@bit/limebit.limebit-ui.default-container";
import { useTheme } from "@emotion/react";
import { NavItem } from "./nav-item";
import { NextChakraLink } from "@bit/limebit.limebit-ui.next-chakra-link";

export const Header: React.FC = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const theme: any = useTheme();
  return (
    <Box position="fixed" width="100%" bg="white" zIndex="100">
      <DefaultContainer size="l" as="header">
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          paddingY={{ base: "2", lg: "4" }}
          width="100%"
        >
          <Flex align="center" mr={5}>
            <NextChakraLink href={"/"}>
              <picture>
                <source
                  srcSet={require(`../../../public/images/logos/open_discourse.png?resize&size=240&format=webp`)}
                  type="image/webp"
                />
                <source
                  srcSet={require(`../../../public/images/logos/open_discourse.png?resize&size=240`)}
                  type="image/png"
                />
                <chakra.img
                  width={{
                    base: "120px",
                    sm: "120px",
                    md: "150px",
                    lg: "150px",
                    xl: "240px",
                  }}
                  alt={"Open Discourse Logo"}
                  src={require(`../../../public/images/logos/open_discourse.png?resize&size=240`)}
                />
              </picture>
            </NextChakraLink>
          </Flex>

          <Box display={{ base: "block", lg: "none" }} onClick={handleToggle}>
            <IconButton
              variant="ghost"
              aria-label="Menü Öffnen"
              size="lg"
              icon={<HamburgerIcon w="8" h="8" />}
            />
          </Box>

          <Stack
            direction={{ base: "column", lg: "row" }}
            display={{ base: show ? "flex" : "none", lg: "flex" }}
            spacing={{ base: 4, lg: 10, xl: 14 }}
            width={{ base: "full", lg: "auto" }}
            alignItems={{ base: "left", lg: "center" }}
            marginTop={{ base: 4, lg: 0 }}
          >
            <NavItem href="/methodik" underlineColor="black">
              Methodik
            </NavItem>
            <NavItem
              underlineColor={theme.colors.pink[500]}
              href="/tools-und-daten"
            >
              Tools und Daten
            </NavItem>
            <NavItem
              href="/analysen"
              underlineColor={theme.additionalColors.yellow}
            >
              Analysen
            </NavItem>
            <NavItem href="/ueber-uns" underlineColor="black">
              Über uns
            </NavItem>
            <Box>
              <NextChakraLink
                href="https://github.com/open-discourse/open-discourse"
                target="_blank"
                isExternal
              >
                <IconButton
                  justifyContent={{ base: "left", lg: "center" }}
                  fontSize={{ base: "md", md: "xl", xl: "4xl" }}
                  variant="ghost"
                  aria-label="GitHub"
                  icon={<FaGithub />}
                />
              </NextChakraLink>
            </Box>
          </Stack>
        </Flex>
      </DefaultContainer>
    </Box>
  );
};
