import Head from "next/head";
import { BaseTemplate } from "../templates/base-template";
import {
  Heading,
  Image,
  Flex,
  Stack,
  Text,
  Box,
  Progress,
} from "@chakra-ui/core";
import React from "react";
import { BodyText } from "../components/body-text";
import { HeroWithCta } from "../components/hero-with-cta";
import { DefaultContainer } from "../components/default-container";
import { ColoredSubline } from "../components/colored-subline";
import { Section } from "../components/section";
import { DefaultHeadline } from "../components/default-headline";
import { DefaultText } from "../components/default-text";
import { AnimatedCountUp } from "../components/animated-count-up";
import { AnimatedProgress } from "../components/animated-progress";
import { Card } from "../components/card";
import { Statistic } from "../components/statistic/index";

const Home: React.FC = () => {
  return (
    <BaseTemplate>
      <Section>
        <HeroWithCta />
      </Section>
      <Section display="flex" flexDirection="column">
        <DefaultContainer size="l">
          <DefaultHeadline size="s">
            Open Discourse — Analyse von Plenarprotokollen für Mensch und
            Maschine
          </DefaultHeadline>
          <ColoredSubline>
            Künstliche Intelligenz wird unsere Zukunft verändern. Wir begleiten
            Sie auf den Weg der digitalen Transformation.
          </ColoredSubline>
          <DefaultText>
            Open Discourse hat die Plenarprotokolle des deutschen Bundestags
            seit 1949 analysierbar gemacht - und zwar für Mensch und Maschinen.
            Die Plattform erleichtert den Zugang zu den über 800.000
            Redebeiträgen der letzten 70 Jahre und demokratisiert die Analyse
            von politischen Debatten im Parlament.
            <br />
            <br />
            Open Discourse ist die erste strukturierte und die umfassendste
            Aufbereitung jedes jemals gesprochenen Wortes in den
            Parlamentssitzungen des deutschen Bundestages. Für einen offenen
            Diskurs, für mehr Einsicht, für eine wissenschaftliche
            Auseinandersetzung mit politischer Sprache.
          </DefaultText>
        </DefaultContainer>
      </Section>
      <Section>
        <DefaultContainer size="l">
          <Stack
            direction={{ base: "column", md: "row" }}
            justifyContent="space-between"
            spacing="5"
          >
            <Box>
              <AnimatedCountUp
                from={100000}
                to={331197}
                subline="Seiten Text"
              ></AnimatedCountUp>
            </Box>

            <Box>
              <AnimatedCountUp
                from={100000}
                to={846628}
                subline="Redebeiträge"
              ></AnimatedCountUp>
            </Box>
            <Box>
              <AnimatedCountUp
                from={1000000}
                to={2255102}
                subline="Reaktionen & Zwischenrufe"
              ></AnimatedCountUp>
            </Box>
          </Stack>
        </DefaultContainer>
      </Section>
      <Section>
        <DefaultContainer size="l">
          <Stack spacing={{ base: "10", md: "20", lg: "32" }}>
            <Statistic
              headline="Statistik"
              subline="Wer kommt zu Wort – Männer oder Frauen?"
              description="Die Welt von Big Data, Machine Learning und Künstlicher Intelligenz ist komplex. Wir helfen Ihnen, sich darin zurechtzufinden. Mit professioneller Beratung und individuellen Schulungen."
              descriptionHighlight="Für mehr Wachstum und Effektivität."
              imagePath="/images/statistics/wer_kommt_zu_wort.png"
              imagePosition="right"
              imageAlt="Statistik"
            />
            <Statistic
              headline="Statistik"
              subline="Wer kommt zu Wort – Männer oder Frauen?"
              description="Die Welt von Big Data, Machine Learning und Künstlicher Intelligenz ist komplex. Wir helfen Ihnen, sich darin zurechtzufinden. Mit professioneller Beratung und individuellen Schulungen."
              descriptionHighlight="Für mehr Wachstum und Effektivität."
              imagePath="/images/statistics/wer_kommt_zu_wort.png"
              imagePosition="left"
              imageAlt="Statistik"
            />
          </Stack>
        </DefaultContainer>
      </Section>
    </BaseTemplate>
  );
};

export default Home;
