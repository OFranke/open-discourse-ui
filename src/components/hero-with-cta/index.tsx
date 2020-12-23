import { Box, Flex } from "@chakra-ui/react";
import styles from "./styles.module.css";
import { DefaultContainer } from "@bit/limebit.limebit-ui.default-container";
import { DefaultButton } from "@bit/limebit.limebit-ui.default-button";
import { DefaultHeadline } from "@bit/limebit.limebit-ui.default-headline";
import { NextButtonLink } from "@bit/limebit.limebit-ui.next-button-link";
interface HeroWithCtaProps {
  backgroundImageStyles: string;
}
export const HeroWithCta: React.FC<HeroWithCtaProps> = ({
  backgroundImageStyles,
}) => {
  return (
    <Flex
      className={backgroundImageStyles}
      height={"60vh"}
      maxHeight={[
        "350px", // 0-30em
        "600px", // 30em-48em
        "600px", // 48em-62em
        "750px", // 62em+
      ]}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
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
    </Flex>
  );
};
