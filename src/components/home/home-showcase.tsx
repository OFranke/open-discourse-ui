import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { DefaultContainer } from "@bit/limebit.limebit-ui.default-container";
import { DefaultHeadline } from "@bit/limebit.limebit-ui.default-headline";
import { NextButtonLink } from "@bit/limebit.limebit-ui.next-button-link";
import React from "react";

import Card from "@bit/limebit.limebit-ui.card";
import DefaultText from "@bit/limebit.limebit-ui.default-text";
import Image from "next/image";

export const HomeShowcase = () => {
  return (
    <Flex
      width="100%"
      height="100%"
      alignItems="center"
      paddingY={{ base: 10, md: "unset" }}
      marginY={{
        base: "8",
        sm: "14",
        md: "20",
        lg: "20",
        xl: "32",
      }}
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
              src={"/images/home/volltextsuche.jpg"}
              alt={"Volltextsuche für alle Debatten im Bundesttag seit 1949"}
              layout="intrinsic"
              width={2500}
              height={1240}
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
            <Image
              src={"/images/home/diskursanalyse.jpg"}
              alt={"Diskursanalyse für alle Debatten im Bundesttag seit 1949"}
              layout="intrinsic"
              width={2500}
              height={1240}
            />
            <Box textAlign="right">
              <NextButtonLink
                colorScheme="yellow"
                textColor="white"
                href="/diskursanalyse"
                marginTop={{
                  base: "4",
                  md: "4",
                  lg: "6",
                  xl: "8",
                }}
              >
                Zur Diskursanalyse
              </NextButtonLink>
            </Box>
          </Card>
        </SimpleGrid>
      </DefaultContainer>
    </Flex>
  );
};
