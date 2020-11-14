import { Card } from "./card";
import { Text, useBreakpointValue, Stack, Box } from "@chakra-ui/react";
import Image from "next/image";
import { DefaultHeadline } from "./default-headline";
import { DefaultText } from "./default-text";

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
  const sublineSize = useBreakpointValue({
    base: "sm",
    sm: "xl",
    md: "2xl",
    lg: "3xl",
    xl: "4xl",
  });

  const descriptionSize = useBreakpointValue({
    base: "sm",
    sm: "xl",
    md: "xl",
    lg: "xl",
    xl: "2xl",
  });

  return (
    <Card>
      <Stack>
        <Box width="60px" height="60px">
          <Image
            src={imagePath}
            alt={imageAlt}
            layout="responsive"
            width="60px"
            height="60px"
            quality="75"
          />
        </Box>
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

        <DefaultText fontSize={descriptionSize}>{description}</DefaultText>
        <DefaultText
          textTransform="uppercase"
          color="pink.500"
          fontWeight="bold"
          fontSize={descriptionSize}
        >
          {linkText}
        </DefaultText>
      </Stack>
    </Card>
  );
};
