import { BaseTemplate } from "../templates/base-template";
import { FullTextSearch } from "../components/full-text-search";
import { DefaultContainer } from "@bit/limebit.limebit-ui.default-container";
import { ColoredSubline } from "@bit/limebit.limebit-ui.colored-subline";
import { Section } from "@bit/limebit.limebit-ui.section";
import { DefaultHeadline } from "@bit/limebit.limebit-ui.default-headline";
import { DefaultText } from "@bit/limebit.limebit-ui.default-text";
import { Callout } from "../components/callout";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { NextChakraLink } from "@bit/limebit.limebit-ui.next-chakra-link";
import React from "react";
import SEO from "../components/seo";
import { BackgroundImage } from "../components/background-image";
import { TopicModelling } from "../components/topic-modeling/index";
import { TopicLineGraph } from "../components/topic-modeling/topic-line-graph";

const Search: React.FC = () => {
  return (
    <BaseTemplate>
      <SEO
        title="Volltextsuche"
        description="Die Open Discourse Volltextsuche ermöglicht eine strukturierte Suche in allen verfügbaren Plenarprotokollen des Deutschen Bundestags seit 1949."
        canonicalRoute="volltextsuche"
      />
      <Section
        marginTop={{ base: "8", sm: "14", md: "20", lg: "20", xl: "32" }}
      >
        <DefaultContainer size="l">
          <DefaultHeadline size="s" as="h1">
            Volltextsuche für Plenarprotokolle des Bundestages
          </DefaultHeadline>
          <ColoredSubline backgroundColor="pink.500">
            Hier können Sie die Datenbank nach Stichworten, Politiker_Innen,
            Fraktionen oder Rollen der Politiker_Innen durchsuchen.
          </ColoredSubline>
          <DefaultText>
            Mit der Volltextsuche können Sie alle verfügbaren Plenarprotokollen
            des Deutschen Bundestags seit 1949 nach Stichworten filtern und
            somit in den Redebeiträgen der Politiker_Innen zielgerichtet
            stöbern.
          </DefaultText>
          <Callout calloutText="Aktuell werden nur die 100 ersten Suchergebnisse ausgegeben, um sicherzustellen, dass unsere Datenbank alle Suchanfragen beantworten kann. Wir beabsichtigen dieses Limit zeitnah zu erhöhen, um die Recherche in den Daten noch weiter zu vereinfachen." />
          <DefaultText>
            In Übereinstimmung mit Ihren Filtereinstellungen werden Ihnen die
            relevantesten Redebeiträge angezeigt. In der Spalte “Rede” können
            sie sich den jeweiligen Redebeitrag direkt anschauen und in der
            Spalte “URL” finden Sie den Verweis zum original Plenarprotokoll.
            Zusätzlich können Sie die Kästchen in der Spalte “Herunterladen”
            anklicken, um eine Auswahl als CSV Datei zu exportieren. Alternativ
            finden Sie unter der Tabelle auch die Schaltfläche “Alles
            Herunterladen”, um alle Einträge zu exportieren.
          </DefaultText>
        </DefaultContainer>
      </Section>
      <Section>
        <DefaultContainer size="l">
          <FullTextSearch />
        </DefaultContainer>
      </Section>
    </BaseTemplate>
  );
};

export default Search;
