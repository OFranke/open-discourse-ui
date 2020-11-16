import React, { useState } from "react";
import {
  Flex,
  Heading,
  Box,
  Text,
  Button,
  Link,
  useColorMode,
  IconButton,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";
import Image from "next/image";
interface NavItemProps {
  href: string;
}
const NavItem: React.FC<NavItemProps> = ({ href, children }) => (
  <Link href={href}>
    <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
      {children}
    </Text>
  </Link>
);

export const Header: React.FC = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      // bg="teal.500"
      // color="white"
      width="100%"
    >
      <Flex align="center" mr={5}>
        <Box width="120px">
          <Image
            src={"/images/logos/open_discourse.png"}
            alt={"Open Discourse Logo"}
            layout="responsive"
            width="1250px"
            height="400px"
            quality="75"
          />
        </Box>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <IconButton
          variant="ghost"
          // colorScheme="white"
          aria-label="Open Menu"
          size="lg"
          icon={<HamburgerIcon w="8" h="8" />}
        />
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        justifyContent="flex-end"
      >
        <NavItem href="/methodik">Methodik</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/tools-und-daten">Tools und Daten</NavItem>
        <NavItem href="/suche">Protokolle durchsuchen</NavItem>
      </Box>
      {/* <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button> */}
      {/* <Box
        display={{ sm: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Button bg="transparent" border="1px">
          Create account
        </Button>
      </Box> */}
    </Flex>
  );
};
