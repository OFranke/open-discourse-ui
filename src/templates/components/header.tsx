import React, { useState } from "react";
import {
  Flex,
  Box,
  Link,
  useColorMode,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";

import { FaGithub, FaMoon, FaSun } from "react-icons/fa";

import { HamburgerIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { DefaultText } from "../../components/default-text";
import { DefaultContainer } from "../../components/default-container";
import { useTheme } from "@emotion/react";
import { useRouter } from "next/router";
import { NextChakraLink } from "../../components/next-chakra-link";
interface NavItemProps {
  href: string;
  underlineColor: string;
}
const NavItem: React.FC<NavItemProps> = ({
  href,
  underlineColor,
  children,
}) => {
  const textSize = {
    base: "sm",
    sm: "md",
    md: "md",
    lg: "xl",
    xl: "4xl",
  };
  const router = useRouter();
  console.log("\x1b[33m%s\x1b[0m", "%c >> router.pathname", router.pathname);
  const isActiveLink = router.pathname == href;
  return (
    <Link href={href} _hover={{ textDecoration: "none" }}>
      <Box>
        <DefaultText
          as="span"
          marginTop={{ base: 4, lg: 0 }}
          marginRight={{ base: 6, lg: 10, xl: 14 }}
          marginBottom={0}
          display="inline-block"
          fontSize={textSize}
          _hover={{
            textDecoration: "none",
            borderBottom: `${underlineColor} 4px solid`,
          }}
          {...(isActiveLink && { borderBottom: `${underlineColor} 4px solid` })}
        >
          {children}
        </DefaultText>
      </Box>
    </Link>
  );
};

export const Header: React.FC = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const { colorMode, toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const theme: any = useTheme();
  return (
    <Box position="fixed" width="100%" bg="white" zIndex="100">
      <DefaultContainer size="l">
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          paddingY={{ base: "2", lg: "4" }}
          // bg="teal.500"
          // color="white"
          width="100%"
        >
          <Flex align="center" mr={5}>
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

          <Box display={{ base: "block", lg: "none" }} onClick={handleToggle}>
            <IconButton
              variant="ghost"
              // colorScheme="white"
              aria-label="Open Menu"
              size="lg"
              icon={<HamburgerIcon w="8" h="8" />}
            />
          </Box>

          <Box
            display={{ base: show ? "block" : "none", lg: "flex" }}
            width={{ base: "full", lg: "auto" }}
            alignItems="center"
            flexGrow={1}
            justifyContent="flex-end"
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
            <NavItem href="/about" underlineColor="black">
              About
            </NavItem>
            <Box>
              <NextChakraLink
                href="https://github.com/open-discourse/open-discourse"
                target="_blank"
              >
                <IconButton
                  justifyContent={{ base: "left", lg: "center" }}
                  marginRight={{ base: 6, lg: 10, xl: 14 }}
                  fontSize={{ base: "md", md: "xl", xl: "4xl" }}
                  variant="ghost"
                  aria-label="GitHub"
                  icon={<FaGithub />}
                />
              </NextChakraLink>
            </Box>
            <Box>
              <IconButton
                marginRight={{ base: 6, lg: 10, xl: 14 }}
                justifyContent={{ base: "left", lg: "center" }}
                fontSize={{ base: "md", md: "xl", xl: "4xl" }}
                aria-label={`Switch to ${text} mode`}
                variant="ghost"
                color="current"
                onClick={toggleColorMode}
                icon={<SwitchIcon />}
              />
            </Box>
          </Box>
        </Flex>
      </DefaultContainer>
    </Box>
  );
};
