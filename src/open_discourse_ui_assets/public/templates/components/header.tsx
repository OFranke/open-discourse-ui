import React, { useState } from "react";
import { Flex, Box, Text, Image } from "@chakra-ui/core";
import { theming } from "../theming";
import { Link } from "react-router-dom";

interface NavItemProps {
  href: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, children }) => (
  <Link to={href}>
    <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
      {children}
    </Text>
  </Link>
);

export const Header: React.FC = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg={theming.backgroundYellow}
      color="white"
      width="100%"
    >
      <Flex align="center" mr={5}>
        <Image
          src="https://www.opendiscourse.de/logo/full_od_white.png"
          alt="White Open Discourse Logo"
          height="50px"
        />
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
    </Flex>
  );
};