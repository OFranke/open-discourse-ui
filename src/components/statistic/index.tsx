import { Card } from "../card";
import { Stack, Flex, useBreakpointValue, Text, Box } from "@chakra-ui/core";
import { DefaultHeadline } from "../default-headline";
import React from "react";
import { DefaultText } from "../default-text";
import Image from "next/image";

interface DescriptionProps {
  description: string;
  descriptionHighlight: string;
}
const Description: React.FC<DescriptionProps> = ({
  description,
  descriptionHighlight,
}) => {
  const paddingY = useBreakpointValue({
    base: "2",
    sm: "4",
    md: "5",
    lg: "0",
    xl: "0",
  });

  const descriptionSize = useBreakpointValue({
    base: "sm",
    sm: "xl",
    md: "xl",
    lg: "xl",
    xl: "2xl",
  });

  return (
    <Box>
      <DefaultText paddingY={paddingY} fontSize={descriptionSize}>
        {description}
      </DefaultText>
      <DefaultText
        textTransform="uppercase"
        color="#EB558A"
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
  const sublineSize = useBreakpointValue({
    base: "sm",
    sm: "xl",
    md: "2xl",
    lg: "3xl",
    xl: "4xl",
  });
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
}
const StatisticImage: React.FC<StatisticImageProps> = ({ imagePath }) => {
  return (
    <Box
      width={{ md: "100%" }}
      backgroundImage="linear-gradient(135deg, rgba(229,229,229,1) 0%, rgba(255,255,255,1) 100%)"
      marginX="-8px"
    >
      <Image
        src={imagePath}
        alt="Picture of the author"
        layout="responsive"
        width="1024px"
        height="512px"
        quality="100"
      />
    </Box>
  );
};

interface StatisticProps
  extends DescriptionProps,
    HeaderProps,
    StatisticImageProps {}

export const Statistic: React.FC<StatisticProps> = ({
  headline,
  subline,
  description,
  descriptionHighlight,
  imagePath,
}) => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Card>
      {isDesktop ? (
        <Flex padding="4">
          <Flex
            direction="column"
            paddingRight="4"
            width="35%"
            justifyContent="center"
          >
            <Header headline={headline} subline={subline} />
            <Description
              description={description}
              descriptionHighlight={descriptionHighlight}
            />
          </Flex>
          <StatisticImage imagePath={imagePath} />
        </Flex>
      ) : (
        <Flex direction="column" p="2">
          <Header headline={headline} subline={subline} />
          <StatisticImage imagePath={imagePath} />
          <Description
            description={description}
            descriptionHighlight={descriptionHighlight}
          />
        </Flex>
      )}
    </Card>
  );
};
