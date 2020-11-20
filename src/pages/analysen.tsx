import { BaseTemplate } from "../templates/base-template";
import { Stack, Box, SimpleGrid, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { HeroWithCta } from "../components/hero-with-cta";
import { DefaultContainer } from "../components/default-container";
import { ColoredSubline } from "../components/colored-subline";
import { Section } from "../components/section";
import { DefaultHeadline } from "../components/default-headline";
import { DefaultText } from "../components/default-text";
import { AnimatedCountUp } from "../components/animated-count-up";
import { Statistic } from "../components/statistic/index";
import Image from "next/image";
import { ProjectCard } from "../components/project-card";
import { Quote } from "../components/quote";
import { Tagline } from "../components/tagline";
import { DefaultButton } from "../components/default-button";
import { PaperCarousel } from "../components/paper-carousel";
import Head from "next/head";

const Analyses: React.FC = () => {
  return (
    <BaseTemplate>
      <Section display="flex" flexDirection="column">
        <DefaultContainer size="l">
          <DefaultHeadline size="s">
            Open Discourse — Analyse von Plenarprotokollen für Mensch und
            Maschine
          </DefaultHeadline>
          <ColoredSubline backgroundColor="pink.500">
            Künstliche Intelligenz wird unsere Zukunft verändern. Wir begleiten
            Sie auf den Weg der digitalen Transformation.
          </ColoredSubline>
        </DefaultContainer>
      </Section>
      <Section overflow="hidden">
        <PaperCarousel />
      </Section>
    </BaseTemplate>
  );
};

export default Analyses;
