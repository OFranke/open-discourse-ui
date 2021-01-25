import { Box, Flex } from "@chakra-ui/react";
import { DefaultContainer } from "@bit/limebit.limebit-ui.default-container";
import { DefaultHeadline } from "@bit/limebit.limebit-ui.default-headline";
import { NextButtonLink } from "@bit/limebit.limebit-ui.next-button-link";
import React from "react";
import { BackgroundImage } from "../background-image";
interface HeroWithCtaProps {
  relativePathFromImageDir: string;
}
export const HeroWithCta: React.FC<HeroWithCtaProps> = ({
  relativePathFromImageDir,
}) => {
  return (
    <BackgroundImage relativePathFromImageDir={relativePathFromImageDir}>
      <Flex
        width="100%"
        height="100%"
        background="rgba(0, 0, 0, 0.6)"
        color="transparent"
        alignItems="center"
      >
        <DefaultContainer
          size="xl"
          color="white"
          display="flex"
          flexDirection="column"
        >
          <DefaultHeadline size="m" as="h1" width={{ sm: "50%" }}>
            Analyse von Plenarprotokollen für Mensch und Maschine
          </DefaultHeadline>
          <Box>
            <NextButtonLink
              colorScheme="pink"
              href="/tools-und-daten"
              marginTop={{
                base: "4",
                md: "4",
                lg: "6",
                xl: "8",
              }}
            >
              Zur Volltextsuche
            </NextButtonLink>
          </Box>
        </DefaultContainer>
      </Flex>
    </BackgroundImage>
  );
};
