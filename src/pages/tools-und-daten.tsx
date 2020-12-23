import { BaseTemplate } from "../templates/base-template";
import { Flex } from "@chakra-ui/react";
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
import styles from "./styles.module.css";
import SEO from "../components/seo";

const Search: React.FC = () => {
  return (
    <BaseTemplate>
      <SEO
        title="Volltextsuche und Datensatz"
        description="Die Open Discourse Volltextsuche ermöglicht eine strukturierte Suche in allen verfügbaren Plenarprotokollen des Deutschen Bundestags seit 1949."
        canonicalRoute="tools-und-daten"
      />
      <Section>
        <Flex
          className={styles.toolsUndDatenBackgroundImage}
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
        />
      </Section>
      <Section>
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
          <Callout calloutText="Aktuell werden nur die 50 ersten Suchergebnisse ausgegeben, um sicherzustellen, dass unsere Datenbank alle Suchanfragen beantworten kann. Wir beabsichtigen dieses Limit zeitnah zu erhöhen, um die Recherche in den Daten noch weiter zu vereinfachen." />
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
      <Section>
        <Flex
          className={styles.toolsUndDatenBundestagImage}
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
        />
      </Section>
      <Section>
        <DefaultContainer size="l">
          <DefaultHeadline size="s">
            Datenzugriff über das Harvard Dataverse
          </DefaultHeadline>
          <ColoredSubline backgroundColor="pink.500">
            Sie möchten den Datensatz für eine eigene Analyse nutzen oder ihn
            einfach eigenständig durchstöbern?
          </ColoredSubline>
          <DefaultText>
            Wir stellen unsere aufbereitete Datenbank* open source zur
            Verfügung. Wir würden uns freuen, wenn Sie uns bei Nutzung des
            Datensatzes zitieren:
          </DefaultText>
          <DefaultText fontStyle="italic">
            <q>
              Richter, F.; Koch, P.; Franke, O.; Kraus, J.; Kuruc, F.; Thiem,
              A.; Högerl, J.; Heine, S.; Schöps, K., 2020, "Open Discourse",
              https://doi.org/10.7910/DVN/FIKIBO, Harvard Dataverse
            </q>
          </DefaultText>
          <DefaultText>
            Wir arbeiten gerade an einer detaillierten, wissenschaftlichen
            Dokumentation über die Open Discourse Daten. Wir werden dieses Data
            Paper in Q1 2021 veröffentlichen - die entsprechenden Informationen
            finden Sie dann ebenfalls hier.
          </DefaultText>

          <DefaultText>
            <NextChakraLink
              color="pink.500"
              href="https://dataverse.harvard.edu/dataverse/opendiscourse"
              isExternal
            >
              Hier geht’s zu unserem Datensatz <ExternalLinkIcon mx="2px" />
            </NextChakraLink>
          </DefaultText>
          <DefaultText as="i">
            * Die Datenbank befindet sich momentan in Version 1 und soll
            zukünftig weiter verbessert und um neue Plenarprotokolle erweitert
            werden.
          </DefaultText>
        </DefaultContainer>
      </Section>
      <Section>
        <DefaultContainer size="l">
          <DefaultHeadline size="s">GitHub Repository</DefaultHeadline>{" "}
          <ColoredSubline backgroundColor="pink.500">
            Unseren Source Code und Docker Container finden Sie in unserem
            Github Repository
          </ColoredSubline>
          <DefaultText>
            Für vollständige Reproduzierbarkeit und Offenheit, stellen wir den
            Source Code, mit dem die Open-Discourse Daten erstellt wurden, auf
            GitHub zur Verfügung.
            <br />
            <br />
            Auch stellen wir hier ein Docker Image der Datenbank zur Verfügung.{" "}
            <br />
            Diese können Sie benutzen, um die Datenbank ganz einfach lokal
            aufzusetzen.
            <br />
            <br />
            Ebenso können Sie so die Limitierungen, der obigen Volltextsuche
            (max. 50 Suchergebnisse) entfernen und erhalten ein noch
            umfangreicheres Werkzeug für Ihre Recherchen.
            <br />
            <br />
            Wir bieten Ihnen auch die Möglichkeit sich am Projekt durch Pull
            Requests zu beteiligen oder das Repository zu Forken und an Ihre
            Anforderungen anzupassen.
          </DefaultText>
          <DefaultText>
            <NextChakraLink
              color="pink.500"
              href="https://github.com/open-discourse/open-discourse"
              isExternal
            >
              Hier geht’s zum GitHub repository
              <ExternalLinkIcon mx="2px" />
            </NextChakraLink>
          </DefaultText>
        </DefaultContainer>
      </Section>
    </BaseTemplate>
  );
};

export default Search;
