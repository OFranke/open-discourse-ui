import { BaseTemplate } from "../templates/base-template";
import React from "react";
import { DefaultContainer } from "@bit/limebit.limebit-ui.default-container";
import { ColoredSubline } from "@bit/limebit.limebit-ui.colored-subline";
import { Section } from "@bit/limebit.limebit-ui.section";
import { DefaultHeadline } from "@bit/limebit.limebit-ui.default-headline";
import { PaperCarousel } from "../components/paper-carousel";
import SEO from "../components/seo";
import { DefaultText } from "@bit/limebit.limebit-ui.default-text";
import {
  Slide1,
  Slide2,
  Slide3,
  Slide4,
} from "../components/paper-carousel/paper-slides";
import { useBreakpointValue } from "@chakra-ui/react";

const Analyses: React.FC = () => {
  const showArrows = useBreakpointValue({
    md: false,
    lg: true,
  });
  return (
    <BaseTemplate>
      <SEO
        title="Aktuelle Forschungsprojekte"
        description="Der Open Discourse Datensatz dient als Grundlage für Datenjournalismus, akademische Forschung und Projekte verschiedener Akteure_Innen."
        canonicalRoute="analysen"
      />
      <Section
        display="flex"
        flexDirection="column"
        paddingTop={{ base: 4, xl: 10 }}
      >
        <DefaultContainer size="l">
          <DefaultHeadline size="s" as="h1">
            Die Open Discourse Daten für Forschung, Journalismus und Civil
            Science
          </DefaultHeadline>
          <ColoredSubline backgroundColor="pink.500">
            Verwendung und Präsenz von Open Discourse
          </ColoredSubline>
          <DefaultText>
            Der Open Discourse Datensatz wurde bereits von verschiedenen
            Akteur_Innen für Forschungsprojekte und datengetriebene
            Berichterstattungen genutzt.
            <br />
            <br />
            Wählen Sie hier aus, in welches Projekt Sie gern einmal reinschauen
            möchten:
          </DefaultText>
        </DefaultContainer>
      </Section>
      <Section overflow="hidden">
        <PaperCarousel
          size="50px"
          gap="1vw"
          top={{
            base: "calc(50px + 30vh)",
            md: "calc(75px + 30vh)",
            lg: "calc(100px + 30vh)",
          }}
          showArrows={showArrows}
        >
          <Slide1 />
          <Slide2 />
          <Slide3 />
          <Slide4 />
        </PaperCarousel>
      </Section>
    </BaseTemplate>
  );
};

export default Analyses;
