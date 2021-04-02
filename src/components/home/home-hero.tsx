import { Box, Flex, Spacer } from "@chakra-ui/react";
import { DefaultContainer } from "@bit/limebit.limebit-ui.default-container";
import { DefaultHeadline } from "@bit/limebit.limebit-ui.default-headline";
import { NextButtonLink } from "@bit/limebit.limebit-ui.next-button-link";
import React from "react";

import { chakra } from "@chakra-ui/react";

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
        height="100%"
        objectFit="contain"
        loading="lazy"
      />
    </picture>
  );
};

export const HomeHero = () => {
  return (
    <>
      <DefaultContainer size="l">
        <Flex width="100%" height="100%" alignItems="center">
          <Box width="45%">
            <DefaultHeadline size="xs" as="h2">
              Bundestagsdebatten
            </DefaultHeadline>
            {/* <DefaultText>
              Durchsuchen Sie jedes jemals gesprochene Wort im Bundestag
            </DefaultText> */}
            <Image
              imagePath="/home/volltextsuche.jpg"
              imageAlt="Volltextsuche für alle Debatten im Bundesttag seit 1949"
            />
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
          <Spacer />
          <Box width="45%">
            <DefaultHeadline size="xs" as="h2">
              Themensuche
            </DefaultHeadline>
            {/* <DefaultText>
              Analysieren Sie, wie relevant Themen waren
            </DefaultText> */}
            <Image
              imagePath="/home/themensuche.jpg"
              imageAlt="Volltextsuche für alle Debatten im Bundesttag seit 1949"
            />
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
        </Flex>
      </DefaultContainer>
    </>
  );
};
