import React, { useState } from "react";
import {
  Flex,
  Box,
  Text,
  Link,
  useColorMode,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";

import { FaGithub, FaMoon, FaSun } from "react-icons/fa";

import { HamburgerIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { DefaultText } from "../../components/default-text";
import { useBreakpointValue } from "@chakra-ui/react";
import { DefaultContainer } from "../../components/default-container";
interface NavItemProps {
  href: string;
}
const NavItem: React.FC<NavItemProps> = ({ href, children }) => {
  const textSize = useBreakpointValue({
    base: "sm",
    sm: "md",
    md: "md",
    lg: "xl",
    xl: "4xl",
  });
  return (
    <Link href={href}>
      <DefaultText
        marginTop={{ base: 4, lg: 0 }}
        marginRight={{ base: 6, lg: 10, xl: 14 }}
        display="block"
        fontSize={textSize}
      >
        {children}
      </DefaultText>
    </Link>
  );
};

export const Header: React.FC = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const { colorMode, toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
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
          <NavItem href="/methodik">Methodik</NavItem>
          <NavItem href="/tools-und-daten">Tools und Daten</NavItem>
          <NavItem href="/suche">Analyse</NavItem>
          <NavItem href="/about">About</NavItem>
          <Box>
            <IconButton
              justifyContent={{ base: "left", lg: "center" }}
              marginRight={{ base: 6, lg: 10, xl: 14 }}
              fontSize={{ base: "md", md: "xl", xl: "4xl" }}
              variant="ghost"
              aria-label="GitHub"
              href="https://github.com/open-discourse/open-discourse"
              target="__blank"
              icon={<FaGithub />}
            />
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
        {/* <Box
        display={{ sm: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Button bg="transparent" border="1px">
          Create account
        </Button>
      </Box> */}
      </Flex>
    </DefaultContainer>
  );
};
