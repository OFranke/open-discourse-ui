import { Box, Flex } from "@chakra-ui/react";
import { DefaultContainer } from "@bit/limebit.limebit-ui.default-container";
import { DefaultHeadline } from "@bit/limebit.limebit-ui.default-headline";
import { NextButtonLink } from "@bit/limebit.limebit-ui.next-button-link";
import React from "react";
import { BackgroundImage } from "../background-image";

export const HomeHero = () => {
  return (
    <BackgroundImage
      imagePath={"/images/home_header.jpg"}
      altText="Fotokollage mit Programmiercode, Bundestag, Antiken Statuen und einer Person, die eine Rede hält"
    >
      <Flex
        width="100%"
        height="100%"
        background="rgba(0, 0, 0, 0.6)"
        color="transparent"
        alignItems="center"
        zIndex={1}
      >
        <DefaultContainer
          size="xl"
          color="white"
          display="flex"
          flexDirection="column"
        >
          <DefaultHeadline size="m" as="h2" width={{ sm: "50%" }}>
            Analyse von Plenarprotokollen für Mensch und Maschine
          </DefaultHeadline>
          <Box>
            <NextButtonLink
              colorScheme="pink"
              href="/volltextsuche"
              marginTop={{
                base: "4",
                md: "4",
                lg: "6",
                xl: "8",
              }}
              marginRight={{
                base: "4",
                md: "4",
                lg: "6",
                xl: "8",
              }}
            >
              Zur Volltextsuche
            </NextButtonLink>
            <NextButtonLink
              colorScheme="yellow"
              textColor="white"
              href="/diskursanalyse"
              marginTop={{
                base: "4",
                md: "4",
                lg: "6",
                xl: "8",
              }}
            >
              Zur Diskursanalyse
            </NextButtonLink>
          </Box>
        </DefaultContainer>
      </Flex>
    </BackgroundImage>
  );
};
