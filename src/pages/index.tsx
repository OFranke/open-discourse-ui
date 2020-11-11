import Head from "next/head";
import { BaseTemplate } from "../templates/base-template";
import { Heading, Image, Flex, Stack, Text, Box } from "@chakra-ui/core";
import React from "react";
import { BodyText } from "../components/body-text";
import { HeroWithCta } from "../components/hero-with-cta";
import { DefaultContainer } from "../components/default-container";

const Home: React.FC = () => {
  return (
    <BaseTemplate>
      <BodyText>{"Hello World"}</BodyText>
      <HeroWithCta />
      <Box display="flex" flexDirection="column">
        <DefaultContainer size="xl">
          <Heading>
            Open Discourse Open Discourse Open Discourse Open Discourse Open
            Discourse Open Discourse Open Discourse
          </Heading>
          <Text>
            Analyse von politischer Sprache in Deutschland Analyse von
            politischer Sprache in Deutschland Analyse von politischer Sprache
            in Deutschland Analyse von politischer Sprache in Deutschland
            Analyse von politischer Sprache in Deutschland Analyse von
            politischer Sprache in Deutschland Analyse von politischer Sprache
            in Deutschland Analyse von politischer Sprache in Deutschland
            Analyse von politischer Sprache in Deutschland
          </Text>
        </DefaultContainer>
        <DefaultContainer size="l">
          <Heading>
            Open Discourse Open Discourse Open Discourse Open Discourse Open
            Discourse Open Discourse Open Discourse
          </Heading>
          <Text>
            Analyse von politischer Sprache in Deutschland Analyse von
            politischer Sprache in Deutschland Analyse von politischer Sprache
            in Deutschland Analyse von politischer Sprache in Deutschland
            Analyse von politischer Sprache in Deutschland Analyse von
            politischer Sprache in Deutschland Analyse von politischer Sprache
            in Deutschland Analyse von politischer Sprache in Deutschland
            Analyse von politischer Sprache in Deutschland
          </Text>
        </DefaultContainer>
        <DefaultContainer size="m">
          <Heading>
            Open Discourse Open Discourse Open Discourse Open Discourse Open
            Discourse Open Discourse Open Discourse
          </Heading>
          <Text>
            Analyse von politischer Sprache in Deutschland Analyse von
            politischer Sprache in Deutschland Analyse von politischer Sprache
            in Deutschland Analyse von politischer Sprache in Deutschland
            Analyse von politischer Sprache in Deutschland Analyse von
            politischer Sprache in Deutschland Analyse von politischer Sprache
            in Deutschland Analyse von politischer Sprache in Deutschland
            Analyse von politischer Sprache in Deutschland
          </Text>
        </DefaultContainer>
        <DefaultContainer size="s">
          <Heading>
            Open Discourse Open Discourse Open Discourse Open Discourse Open
            Discourse Open Discourse Open Discourse
          </Heading>
          <Text>
            Analyse von politischer Sprache in Deutschland Analyse von
            politischer Sprache in Deutschland Analyse von politischer Sprache
            in Deutschland Analyse von politischer Sprache in Deutschland
            Analyse von politischer Sprache in Deutschland Analyse von
            politischer Sprache in Deutschland Analyse von politischer Sprache
            in Deutschland Analyse von politischer Sprache in Deutschland
            Analyse von politischer Sprache in Deutschland
          </Text>
        </DefaultContainer>
      </Box>
    </BaseTemplate>
  );
};

export default Home;
