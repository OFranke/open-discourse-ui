import { BaseTemplate } from "../templates/base-template";
import { Image } from "@chakra-ui/react";
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

const Search: React.FC = () => {
  return (
    <BaseTemplate>
      <Section>
        <Image
          src={"/images/reichstagsgebaeude.png"}
          alt={"Bundestag"}
          css={{ objectFit: "cover" }}
          width="100%"
          height="500px"
          quality="75"
        />
      </Section>
      <Section>
        <DefaultContainer size="l">
          <DefaultHeadline size="s">Volltextsuche</DefaultHeadline>
          <ColoredSubline backgroundColor="pink.500">
            Hier können Sie Datenbank nach Stichworten, Politiker_Innen,
            Fraktionen oder Positionen durchsuchen.
          </ColoredSubline>
          <DefaultText>
            Mit der Volltextsuche können Sie alle verfügbaren Plenarprotokollen
            des Deutschen Bundestags seit 1949 nach Stichworten filtern und
            somit in den Redebeiträgen unserer Politiker_Innen zielgerichtet
            stöbern.
          </DefaultText>
          <Callout
            calloutText="Im Positionsfeld kann entweder eine Partei oder ein Amt ausgewählt
        werden. Es müssen nicht alle Felder ausgefüllt sein, um ein Suchergebnis
        zu erhalten."
          />
          <DefaultText>
            In Übereinstimmung Ihren Filtereinstellungen werden Ihnen die
            gefilterten Redebeiträge der Politiker_Innen angezeigt, das
            dazugehörige Datum, die URL zum Originalprotokoll und der
            spezifische Redebeitrag.
          </DefaultText>
        </DefaultContainer>
      </Section>
      <Section>
        <DefaultContainer size="l">
          <FullTextSearch />
        </DefaultContainer>
      </Section>
      <Section>
        <Image
          src={"/images/reichstagsgebaeude.png"}
          alt={"Bundestag"}
          css={{ objectFit: "cover" }}
          width="100%"
          height="500px"
          quality="75"
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
            Wir stellen unsere aufbereitete Datenbank*{" "}
            <NextChakraLink
              color="pink.500"
              href="https://dataverse.harvard.edu/dataverse/opendiscourse "
              isExternal
            >
              an dieser Stelle <ExternalLinkIcon mx="2px" />
            </NextChakraLink>{" "}
            open source zur Verfügung und geben die Nutzung, Weiterverwendung
            und Weiterverbreitung frei. Wir würden uns freuen, wenn ihr bei
            Nutzung des Datensatzes unser Data Paper zitiert:
          </DefaultText>
          <DefaultText>
            <q>
              Zitierweise, 2019, blablabla, hier und da SozArxiv und so shit
              dummy-zitierweise hihi
            </q>
          </DefaultText>
          <DefaultText>
            Wir arbeiten gerade an einer detaillierte Dokumentation über die
            Daten befindet sich (Preprint) Publikation “Open Discourse - The
            first fully Comprehensive Corpus of the parliamentary Protocols of
            the German Bundestag” mit der DOI: XXXXXXXXXXX. Unser Ziel soll
            sein, dass dieser Datensatz für wissenschaftliche Zwecke gebraucht
            werden kann.
          </DefaultText>
          <DefaultText>
            Sie finden die Rohdaten bzw. die Datenbank und ein Codebook zu den
            einzelnen Datenbanktabellen und Variablen im Harvard Dataverse.
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
            GitHub zur Verfügung. So können wir garantieren, dass keine
            Datenverfälschung oder Manipulation stattgefunden hat.
            <br />
            <br />
            Auch stellen wir hier einige Docker Images zur Verfügung. <br />
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
