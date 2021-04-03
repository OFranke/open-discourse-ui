import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { DefaultContainer } from "@bit/limebit.limebit-ui.default-container";
import { DefaultHeadline } from "@bit/limebit.limebit-ui.default-headline";
import { NextButtonLink } from "@bit/limebit.limebit-ui.next-button-link";
import React from "react";

import { chakra } from "@chakra-ui/react";
import { BackgroundImage, backgroundImageHeight } from "../background-image";
import Card from "@bit/limebit.limebit-ui.card";
import DefaultText from "@bit/limebit.limebit-ui.default-text";

interface ImageProps {
  imagePath: string;
  imageAlt: string;
}
const Image: React.FC<ImageProps> = ({ imagePath, imageAlt }) => {
  const multipleSizesWebp = require(`../../../public/images${imagePath}?resize&sizes[]=320&sizes[]=640&format=webp`);
  const multipleSizes = require(`../../../public/images${imagePath}?resize&sizes[]=320&sizes[]=640&format=jpg`);
  return (
    <picture>
      <source srcSet={multipleSizesWebp.srcSet} type="image/webp" />
      <source srcSet={multipleSizes.srcSet} type="image/jpg" />
      <chakra.img
        alt={imageAlt}
        src={multipleSizes.src}
        width="100%"
        // height="100%"
        objectFit="contain"
        loading="lazy"
      />
    </picture>
  );
};

export const HomeHero = () => {
  const backgroundHeight = { ...backgroundImageHeight };
  backgroundHeight.base = "100%";
  backgroundHeight.sm = "100%";
  return (
    <BackgroundImage
      relativePathFromImageDir="/home_header.jpg"
      height={backgroundHeight}
    >
      <Flex
        width="100%"
        height="100%"
        background="rgba(0, 0, 0, 0.6)"
        alignItems="center"
        paddingY={{ base: 10, md: "unset" }}
      >
        <DefaultContainer size="l">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Card
              width={{ base: "100%" }}
              background="white"
              display="flex"
              justifyContent="space-around"
              flexDirection="column"
            >
              <DefaultHeadline size="xs" as="h2">
                Wer hat was gesagt?
              </DefaultHeadline>
              <DefaultText>
                Nutzen Sie unsere Volltextsuche, um gezielt in den
                Plenarprotkollen zu Recherchieren
              </DefaultText>
              <Image
                imagePath="/home/volltextsuche.jpg"
                imageAlt="Volltextsuche für alle Debatten im Bundesttag seit 1949"
              />
              <Box textAlign="right">
                <NextButtonLink
                  colorScheme="pink"
                  href="/volltextsuche"
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
            </Card>
            {/* <Spacer marginTop={{ base: "5", md: "unset" }} /> */}
            <Card
              width={{ base: "100%" }}
              background="white"
              display="flex"
              justifyContent="space-around"
              flexDirection="column"
            >
              <DefaultHeadline size="xs" as="h2">
                Worüber wurde gesprochen?
              </DefaultHeadline>
              <DefaultText>
                Nutzen Sie unsere Themenanalyse, um zu untersuchen, über welche
                Themen gesprochen wurde
              </DefaultText>
              {/* <DefaultText>
              Analysieren Sie, wie relevant Themen waren
            </DefaultText> */}
              <Image
                imagePath="/home/themensuche.jpg"
                imageAlt="Volltextsuche für alle Debatten im Bundesttag seit 1949"
              />
              <Box textAlign="right">
                <NextButtonLink
                  colorScheme="pink"
                  href="/themensuche"
                  marginTop={{
                    base: "4",
                    md: "4",
                    lg: "6",
                    xl: "8",
                  }}
                >
                  Zur Themensuche
                </NextButtonLink>
              </Box>
            </Card>
          </SimpleGrid>
        </DefaultContainer>
      </Flex>
    </BackgroundImage>
  );
};
