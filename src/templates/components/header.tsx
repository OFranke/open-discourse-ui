import React, { useState } from "react";
import {
  Flex,
  Heading,
  Box,
  Text,
  Button,
  Link,
  useColorMode,
} from "@chakra-ui/react";

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
      bg="teal.500"
      color="white"
      width="100%"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          Open Discourse
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        justifyContent="flex-end"
      >
        <NavItem href="/methodik">Methodik</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/tools-und-daten">Tools und Daten</NavItem>
        <NavItem href="/suche">Protokolle durchsuchen</NavItem>
      </Box>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
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
