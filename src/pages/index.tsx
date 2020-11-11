import Head from "next/head";
import { BaseTemplate } from "../templates/base-template";
import { Heading, Image, Flex, Stack, Text, Box } from "@chakra-ui/core";
import React from "react";
import { BodyText } from "../components/body-text";
import { HeroWithCta } from "../components/hero-with-cta";
import { DefaultContainer } from "../components/default-container";
import { ColoredSubline } from "../components/colored-subline";
import { Section } from "../components/section";
import { DefaultHeadline } from "../components/default-headline";
import { DefaultText } from "../components/default-text";

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
    </BaseTemplate>
  );
};

export default Home;
