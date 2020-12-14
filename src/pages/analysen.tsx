import { BaseTemplate } from "../templates/base-template";
import React from "react";
import { DefaultContainer } from "@bit/limebit.limebit-ui.default-container";
import { ColoredSubline } from "@bit/limebit.limebit-ui.colored-subline";
import { Section } from "@bit/limebit.limebit-ui.section";
import { DefaultHeadline } from "@bit/limebit.limebit-ui.default-headline";
import { PaperCarousel } from "../components/paper-carousel";
import SEO from "../components/seo";

export const config = {
  unstable_runtimeJS: false,
};

const Analyses: React.FC = () => {
  return (
    <BaseTemplate>
      <SEO title="" description="" canonicalRoute="" />
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
