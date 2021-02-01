import { Card } from "@bit/limebit.limebit-ui.card";
import { Flex, useBreakpointValue, Text, Box, chakra } from "@chakra-ui/react";
import { DefaultHeadline } from "@bit/limebit.limebit-ui.default-headline";
import React from "react";
import { DefaultText } from "@bit/limebit.limebit-ui.default-text";

interface DescriptionProps {
  description: string;
  descriptionHighlight: string;
}
const Description: React.FC<DescriptionProps> = ({
  description,
  descriptionHighlight,
}) => {
  const paddingY = {
    base: "2",
    sm: "4",
    md: "5",
    lg: "0",
    xl: "0",
  };

  const descriptionSize = {
    base: "sm",
    sm: "xl",
    md: "xl",
    lg: "xl",
    xl: "2xl",
  };

  return (
    <Box>
      <DefaultText paddingY={paddingY} fontSize={descriptionSize}>
        {description}
      </DefaultText>
      <DefaultText
        textTransform="uppercase"
        color="pink.500"
        fontWeight="bold"
        fontSize={descriptionSize}
      >
        {descriptionHighlight}
      </DefaultText>
    </Box>
  );
};

interface HeaderProps {
  headline: string;
  subline: string;
}
const Header: React.FC<HeaderProps> = ({ subline }) => {
  const sublineSize = {
    base: "sm",
    sm: "xl",
    md: "2xl",
    lg: "3xl",
    xl: "4xl",
  };
  return (
    <Box>
      <DefaultHeadline
        size="m"
        fontFamily="Source Code Pro"
        textTransform="none"
        marginBottom="0"
      >
        Statistik
      </DefaultHeadline>

      <Text fontWeight="semibold" fontSize={sublineSize}>
        {subline}
      </Text>
    </Box>
  );
};

interface StatisticImageProps {
  imagePath: string;
  imageAlt: string;
}
const StatisticImage: React.FC<StatisticImageProps> = ({
  imagePath,
  imageAlt,
}) => {
  const multipleSizesWebp = require(`../../../public/images${imagePath}?resize&sizes[]=480&sizes[]=768&sizes[]=1024&sizes[]=1440&sizes[]=1920&sizes[]=2560&format=webp`);
  const multipleSizes = require(`../../../public/images${imagePath}?resize&sizes[]=480&sizes[]=768&sizes[]=1024&sizes[]=1440&sizes[]=1920&sizes[]=2560&format=png`);
  return (
    <picture>
      <source srcSet={multipleSizesWebp.srcSet} type="image/webp" />
      <source srcSet={multipleSizes.srcSet} type="image/png" />
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

interface StatisticProps
  extends DescriptionProps,
    HeaderProps,
    StatisticImageProps {
  imagePosition: "left" | "right";
}

export const Statistic: React.FC<StatisticProps> = ({
  headline,
  subline,
  description,
  descriptionHighlight,
  imagePath,
  imagePosition,
  imageAlt,
}) => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Card>
      {isDesktop ? (
        <Flex
          flexDirection={imagePosition == "right" ? "row-reverse" : "initial"}
        >
          <Flex
            direction="column"
            paddingRight={imagePosition == "left" ? "4" : "0"}
            paddingLeft={imagePosition == "right" ? "4" : "0"}
            width="35%"
            justifyContent="center"
          >
            <Header headline={headline} subline={subline} />
            <Description
              description={description}
              descriptionHighlight={descriptionHighlight}
            />
          </Flex>
          <Box
            width={{ md: "100%" }}
            backgroundImage="linear-gradient(135deg, rgba(229,229,229,1) 0%, rgba(255,255,255,1) 100%)"
          >
            <StatisticImage imagePath={imagePath} imageAlt={imageAlt} />
          </Box>
        </Flex>
      ) : (
        <Flex direction="column">
          <Header headline={headline} subline={subline} />{" "}
          <Box
            width={{ md: "100%" }}
            backgroundImage="linear-gradient(135deg, rgba(229,229,229,1) 0%, rgba(255,255,255,1) 100%)"
            marginX="-8px"
          >
            <StatisticImage imagePath={imagePath} imageAlt={imageAlt} />
          </Box>
          <Description
            description={description}
            descriptionHighlight={descriptionHighlight}
          />
        </Flex>
      )}
    </Card>
  );
};
