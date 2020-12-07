import { Card } from "./card";
import { Text, Stack, Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { DefaultHeadline } from "./default-headline";
import { DefaultText } from "./default-text";
import { ArrowForwardIcon } from "@chakra-ui/icons";

interface ProjectCardProps {
  headline: string;
  subline: string;
  description: string;
  linkText: string;
  imagePath: string;

  imageAlt: string;
}
export const ProjectCard: React.FC<ProjectCardProps> = ({
  headline,
  subline,
  description,
  linkText,
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

  return (
    <Card>
      <Stack spacing="3">
        <Flex
          direction={{ base: "row", lg: "column" }}
          alignItems={{ base: "center", lg: "unset" }}
        >
          <Box width={{ base: "60px", sm: "80px", md: "100px", lg: "140px" }}>
            <Image
              src={imagePath}
              alt={imageAlt}
              layout="responsive"
              width="60px"
              height="60px"
              quality="75"
            />
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
        <DefaultText
          textTransform="uppercase"
          color="pink.500"
          fontWeight="bold"
          fontSize={descriptionSize}
        >
          <ArrowForwardIcon marginRight="2" />
          {linkText}
        </DefaultText>
      </Stack>
    </Card>
  );
};
