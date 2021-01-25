import { Card } from "@bit/limebit.limebit-ui.card";
import { Text, Stack, Box, Flex, chakra } from "@chakra-ui/react";
import { DefaultHeadline } from "@bit/limebit.limebit-ui.default-headline";
import { DefaultText } from "@bit/limebit.limebit-ui.default-text";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import React from "react";
import { NextChakraLink } from "@bit/limebit.limebit-ui.next-chakra-link";

interface ProjectCardProps {
  headline: string;
  subline: string;
  description: string;
  linkHref: string;
  linkText: string;
  imagePath: string;

  imageAlt: string;
}
export const ProjectCard: React.FC<ProjectCardProps> = ({
  headline,
  subline,
  description,
  linkText,
  linkHref,
  imagePath,
  imageAlt,
}) => {
  const sublineSize = {
    base: "sm",
    sm: "xl",
    md: "2xl",
    lg: "3xl",
    xl: "4xl",
  };

  const descriptionSize = {
    base: "sm",
    sm: "xl",
    md: "xl",
    lg: "xl",
    xl: "2xl",
  };

  const multipleSizesWebp = require(`../../public/images${imagePath}?resize&sizes[]=200&sizes[]=300&sizes[]=500&format=webp`);
  const multipleSizes = require(`../../public/images${imagePath}?resize&sizes[]=200&sizes[]=300&sizes[]=500&format=jpg`);

  return (
    <Card>
      <Flex direction="column" height="100%" justifyContent="space-between">
        <Stack spacing="3">
          <Flex
            direction={{ base: "row", lg: "column" }}
            alignItems={{ base: "center", lg: "unset" }}
          >
            <Box
              boxSize={{ base: "60px", sm: "80px", md: "100px", lg: "140px" }}
              alignSelf="center"
            >
              <picture>
                <source srcSet={multipleSizesWebp.srcSet} type="image/webp" />
                <source srcSet={multipleSizes.srcSet} type="image/jpg" />
                <chakra.img
                  alt={imageAlt}
                  src={multipleSizes.src}
                  width="100%"
                  height="100%"
                  objectFit="contain"
                />
              </picture>
            </Box>
            <Flex
              direction="column"
              paddingTop={{ base: "0", lg: "6" }}
              paddingLeft={{ base: "2", sm: "3", md: "4", lg: "0" }}
            >
              <DefaultHeadline
                size="m"
                fontFamily="Source Code Pro"
                textTransform="none"
                marginBottom="0"
              >
                {headline}
              </DefaultHeadline>
              <Text fontWeight="semibold" fontSize={sublineSize}>
                {subline}
              </Text>
            </Flex>
          </Flex>
          <DefaultText fontSize={descriptionSize}>{description}</DefaultText>
        </Stack>
        <Box>
          <NextChakraLink href={linkHref} _hover={{ textDecoration: "none" }}>
            <DefaultText
              as="span"
              textTransform="uppercase"
              color="pink.500"
              fontWeight="bold"
              fontSize={descriptionSize}
            >
              <ArrowForwardIcon marginRight="2" />
              {linkText}
            </DefaultText>
          </NextChakraLink>
        </Box>
      </Flex>
    </Card>
  );
};
