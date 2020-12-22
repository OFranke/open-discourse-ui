import { BaseTemplate } from "../templates/base-template";
import React from "react";
import { DefaultContainer } from "@bit/limebit.limebit-ui.default-container";
import { ColoredSubline } from "@bit/limebit.limebit-ui.colored-subline";
import { Section } from "@bit/limebit.limebit-ui.section";
import { DefaultHeadline } from "@bit/limebit.limebit-ui.default-headline";
import { PaperCarousel } from "../components/paper-carousel";
import SEO from "../components/seo";
import { DefaultText } from "@bit/limebit.limebit-ui.default-text";

const Analyses: React.FC = () => {
  return (
    <BaseTemplate>
      <SEO title="" description="" canonicalRoute="" />
      <Section
        display="flex"
        flexDirection="column"
        paddingTop={{ base: 4, xl: 10 }}
      >
        <DefaultContainer size="l">
          <DefaultHeadline size="s">
            Die Open Discourse Daten für Forschung, Journalismus und Civil
            Science
          </DefaultHeadline>
          <ColoredSubline backgroundColor="pink.500">
            Verwendung und Präsenz von Open Discourse
          </ColoredSubline>
          <DefaultText>
            Der Open Discourse Datensatz wurde bereits von verschiedenen
            Akteur*Innen für Forschungsprojekte und datengetriebene
            Berichterstattungen genutzt.
            <br />
            <br />
            Wählen Sie hier aus, in welches Projekt Sie gern einmal reinschauen
            möchten:
          </DefaultText>
        </DefaultContainer>
      </Section>
      <Section overflow="hidden">
        <PaperCarousel />
      </Section>
    </BaseTemplate>
  );
};

export default Analyses;
