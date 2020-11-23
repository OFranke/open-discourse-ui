import { Box, Flex } from "@chakra-ui/react";
import styles from "./styles.module.css";
import { DefaultContainer } from "../default-container";
import { DefaultButton } from "../default-button";
import { DefaultHeadline } from "../default-headline";

export const HeroWithCta = () => {
  return (
    <Flex
      className={styles.backgroundImage}
      // backgroundImage={require("../../../public/images/sample/teamwork.jpg")}
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
            <DefaultButton colorScheme="pink">Zur Volltextsuche</DefaultButton>
          </Box>
        </DefaultContainer>
      </Flex>
    </Flex>
  );
};
