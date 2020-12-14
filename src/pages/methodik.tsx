import { BaseTemplate } from "../templates/base-template";
import SEO from "../components/seo";
import { Section } from "@bit/limebit.limebit-ui.section";
import { DefaultContainer } from "@bit/limebit.limebit-ui.default-container";
import { DefaultHeadline } from "@bit/limebit.limebit-ui.default-headline";
import { ColoredSubline } from "@bit/limebit.limebit-ui.colored-subline";
import { DefaultText } from "@bit/limebit.limebit-ui.default-text";
import { UnorderedList } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { Quote } from "@bit/limebit.limebit-ui.quote";
import React from "react";
import { HeroWithCta } from "../components/hero-with-cta/index";
import { Tagline } from "@bit/limebit.limebit-ui.tagline";
import { NextChakraLink } from "@bit/limebit.limebit-ui.next-chakra-link";
import { DefaultListItem } from "../components/default-list-item";

export const config = {
  unstable_runtimeJS: false,
};

const Home: React.FC = () => {
  return (
    <BaseTemplate>
      <SEO
        title="Plenarprotokolle des deutschen Bundestages seit 1949"
        description="Open Discourse erleichtert den Zugang zu Protokollen des Bundestages mit einer Suchmaschine für Politiker, Redebeiträge und Fraktionen."
        canonicalRoute="methodik"
      />
      <Section>
        <HeroWithCta />
      </Section>
      <Section>
        <DefaultContainer size="l">
          <DefaultHeadline size="s" as="h2">
            Wir bringen den Bundestag ins 21. Jahrhundert!
          </DefaultHeadline>
          <ColoredSubline backgroundColor="pink.500">
            Der Deutsche Bundestag ist das parlamentarische Herz unserer
            Demokratie. In unserem Grundgesetz ist festgeschrieben, dass der
            Bundestag öffentlich verhandelt soll.
          </ColoredSubline>
          <DefaultText>
            Seit 1949 für jede Plenarsitzung ein stenografischer Bericht
            angefertigt, der jedes gesagte Wort der Sitzung dokumentiert. Diese
            Protokolle liegen als txt-, xml-, oder pdf-Dokumente auf den{" "}
            <NextChakraLink
              color="pink.500"
              href="https://www.bundestag.de/dokumente/protokolle/plenarprotokolle"
              isExternal
            >
              {" "}
              Servern des Bundestages <ExternalLinkIcon mx="2px" />
            </NextChakraLink>{" "}
            und sind öffentlich abrufbar.
          </DefaultText>

          <DefaultText>
            Die Protokolle und Transkripte der parlamentarischer Debatten sind
            eine reichhaltige Informationsquelle für Forschungsfragen. Die
            öffentlichen Dateiformate entsprechen jedoch leider noch nicht den
            Anforderungen für die Datenverarbeitung im digitalen Zeitalter.
          </DefaultText>
          <DefaultText>
            Vor Open Discourse waren die Dokumente für die Öffentlichkeit nicht
            maschinenlesbar. Jede Recherche stellte einen langwierigen,
            händischen Prozess dar und für Wissenschaftler_Innen war es nahezu
            unmöglich, alle Texte manuell zu lesen und zu analysieren.
          </DefaultText>
        </DefaultContainer>
      </Section>
      <Section background="pink.500" color="white">
        <DefaultContainer size="s">
          <Quote>
            Eine technologische Lösung mit den technischen Mitteln ist schon
            lange erforderlich.
          </Quote>
        </DefaultContainer>
      </Section>
      <Section>
        <DefaultContainer size="l">
          <Tagline>
            Warum hinkt der Deutsche Bundestag in Fragen der Digitalisierung so
            hinterher?
          </Tagline>
          <DefaultHeadline size="s">
            Die Geschichte und Herausforderungen
          </DefaultHeadline>
          <DefaultText>
            Angesichts der jüngsten Fortschritte auf dem Gebiet der Verarbeitung
            natürlicher Sprache und der Computerlinguistik, fällt rasch auf,
            dass es an Forschung zu parlamentarischen Debatten mangelt - vor
            allem in der deutschen Politikwissenschaft.
          </DefaultText>
          <DefaultText>
            Einer der Hauptgründe ist laut dem
            <NextChakraLink
              color="pink.500"
              href="https://www.tandfonline.com/doi/full/10.1080/02606755.2018.1428399"
              isExternal
            >
              {" "}
              Politikwissenschaftler Nicolas Bechter{" "}
              <ExternalLinkIcon mx="2px" />
            </NextChakraLink>{" "}
            die Tatsache, dass sich die deutsche Forschung traditionell auf die
            politische Ideengeschichte ausgerichtete und die theoretische und
            methodische Rahmenbedingungen lange fehlten, um Dokumente wie die
            Plenarprotokolle in die Forschung einzubeziehen.
          </DefaultText>
          <DefaultText>
            Wir haben es uns zur Aufgabe gemacht, die im Grundgesetz definierte
            Öffentlichkeit des Bundestages durch moderne Wege der
            Datenverarbeitung wieder herzustellen, um jeder Bürgerin und jedem
            Bürger - als auch die Möglichkeit zu geben, den politischen Diskurs
            zu verfolgen und zu untersuchen.
          </DefaultText>
        </DefaultContainer>
      </Section>
      <Section>
        <DefaultContainer size="l">
          <Tagline>Woher kommen die Daten?</Tagline>
          <DefaultHeadline size="s">Die Plenarprotokolle</DefaultHeadline>
          <ColoredSubline backgroundColor="pink.500">
            Das Open Discourse Korpus basiert auf drei verschiedenen unten
            aufgeführten Datenquellen, deren unterschiedliche Formate und
            Inhalte miteinander verknüpft wurden.
          </ColoredSubline>
          <DefaultText>
            Das Open Discourse-Korpus besteht aus den Plenarprotokollen, die für
            jede Parlamentssitzung des Deutschen Bundestages erstellt werden.
            Diese Berichte dokumentieren jede Rede im Parlament sowie jede
            Einmischung und andere Arten von Beiträgen (Lachen, Fröhlichkeit,
            Applaus usw.) der Politker_Innen, die während der Reden stattfanden.
            Insgesamt besteht das Korpus aus 219.695,231 Tokens (202,553,267
            Tokens aus Reden; 17,161,964 Tokens aus Beiträgen) aus 890,796 Reden
            in 4,265 verarbeiteten Protokollen. Das Open Discourse-Korpus deckt
            insgesamt 99,7 Prozent aller Plenarprotokolle des Deutschen
            Bundestages ab.
          </DefaultText>
          <DefaultText>
            Im Jahr 2013 hat der Deutsche Bundestag das{" "}
            <NextChakraLink
              color="pink.500"
              href="https://www.gesetze-im-internet.de/egovg/"
              isExternal
            >
              {" "}
              E-Government-Gesetz (EGovG) <ExternalLinkIcon mx="2px" />
            </NextChakraLink>{" "}
            verabschiedet. Erst mit diesem Gesetz verpflichtete sich die
            Regierung, Regierungsdokumente und Daten von öffentlichem Interesse
            in einem maschinenlesbaren Format bereitzustellen. Darüber hinaus
            unterwirft das Gesetz diesen Dokumenten uneingeschränkte
            Nutzungsrechte und Verwertungsrechte (offene Daten). Infolgedessen
            gibt keine wesentlichen rechtlichen Hindernisse für die Verwendung,
            Verarbeitung und Wiederverwendung dieser Dokumente.
          </DefaultText>
          <DefaultText>
            Das Open Discourse-Korpus basiert auf drei verschiedenen unten
            aufgeführten Datenquellen. Ein XML-Umwandlung der Dokumenten war
            erforderlich, um die Dokumente maschienenlesbar zu nutzen:
          </DefaultText>

          <UnorderedList marginLeft={{ base: 10, md: 14, lg: 20, xl: 28 }}>
            <DefaultListItem>
              Kerndatenquelle:{" "}
              <NextChakraLink
                color="pink.500"
                href="https://www.bundestag.de/services/opendata"
                isExternal
              >
                Parlamentsprotokolle vom Deutschen Bundestag
                <ExternalLinkIcon mx="2px" />
              </NextChakraLink>
            </DefaultListItem>
            <UnorderedList>
              <DefaultListItem>
                Die Protokolle von der ersten bis zur 18. Wahlperiode werden als
                komprimiertes Archiv mit separaten XML-Dateien für jede
                Parlamentssitzung bereitgestellt. Die Protokolle der aktuellen
                19. Periode werden als separate Dateien bereitgestellt.
              </DefaultListItem>
            </UnorderedList>
            <DefaultListItem>
              Metainformationen über die Mitglieder des Parlaments, die
              Vorsitzenden und die Mitglieder des Kabinetts
              <UnorderedList>
                <DefaultListItem>
                  Die Metainformationen stammen aus den Stammdaten aller MdBs (
                  <NextChakraLink
                    color="pink.500"
                    href="https://www.bundestag.de/services/opendata"
                    isExternal
                  >
                    Stammdaten aller Abgeordneten seit 1949
                    <ExternalLinkIcon mx="2px" />
                  </NextChakraLink>
                  ). Diese Daten werden vom Bundestag zur Verfügung gestellt und
                  gepflegt.
                </DefaultListItem>
                <DefaultListItem>
                  Es gibt seltene Fälle, in denen Politiker Mitglied der
                  Regierung (MG) sind und nie ein Mandat als Abgeordneter
                  hatten. Diese Politiker sind in den oben genannten Stammdaten
                  nicht enthalten. Daher werden die{" "}
                  <NextChakraLink
                    color="pink.500"
                    href="https://de.wikipedia.org/wiki/Liste_der_deutschen_Regierungsmitglieder_seit_1949"
                    isExternal
                  >
                    Namen aller MG aus der deutschen Wikipedia
                    <ExternalLinkIcon mx="2px" />
                  </NextChakraLink>{" "}
                  übernommen und mit den Stammdaten zusammengeführt
                </DefaultListItem>
              </UnorderedList>
            </DefaultListItem>
            <br />
          </UnorderedList>
          <DefaultText>
            Neben Open Discourse möchten wir noch zwei weitere Projekte
            hervorstellen, die sich mit den Korpora des Deutschen Bundestags
            beschäftigt haben:
            <NextChakraLink
              color="pink.500"
              href="https://github.com/PolMine/GermaParlTEI"
              isExternal
            >
              {" "}
              GermaParl
              <ExternalLinkIcon mx="2px" />
            </NextChakraLink>{" "}
            und
            <NextChakraLink
              color="pink.500"
              href="https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/E4RSP9"
              isExternal
            >
              {" "}
              ParlSpeech. <ExternalLinkIcon mx="2px" />
            </NextChakraLink>{" "}
          </DefaultText>
          <DefaultText>
            Im direkten Vergleich ist erkennbar, dass das Korpus von Open
            Discourse bereits frühere Legislaturperioden umfasst und somit eine
            umfassende, nahezu vollständige Maschienenlesbarkeit ermöglicht:
          </DefaultText>
          <DefaultText
            marginBottom={{
              base: "4",
              md: "10",
              lg: "12",
              xl: "20",
            }}
          >
            Im direkten Vergleich ist erkennbar, dass das Korpus von Open
            Discourse bereits frühere Legislaturperioden umfasst und somit eine
            umfassende, nahezu vollständige Maschienenlesbarkeit ermöglicht:
          </DefaultText>
          <Image
            src={"/images/statistics/wer_kommt_zu_wort.png"}
            alt={"imageAlt"}
            layout="responsive"
            width="1024px"
            height="512px"
            quality="75"
          />
        </DefaultContainer>
      </Section>
      <Section>
        <DefaultContainer size="l">
          <DefaultHeadline size="s">Das Vorgehen</DefaultHeadline>
          <ColoredSubline backgroundColor="pink.500">
            Eine gründliche Datenaufbereitung ist das Fundament für die Qualität
            späterer Erkenntnisse.
          </ColoredSubline>
          <DefaultText>
            In der Vorbereitung wurden alle Plenarprotokolle und die Stammdaten
            aller Abgeordneten abgerufen. Die Protokolle sind entweder nach
            Regex-Mustern oder nach XML-Tags (nur 19. Wahlperiode) in
            Inhaltsverzeichnis, gesprochenen Inhalt (die eigentliche
            Dokumentation der gehaltenen Reden) und Anhang unterteilt. Der
            gesprochene Inhalt jedes Dokuments wird extrahiert und vorübergehend
            gespeichert. Zusätzlich wird die Stammdaten-XML-Datei transformiert
            und in einen Datenrahmen reduziert und auch vorübergehend
            gespeichert.
          </DefaultText>
          <DefaultText>
            Im nächsten Schritt wurden eine die Fraktionstabelle, eine
            Politikerinnentabelle und eine Tabelle mit den gesprochenen Inhalten
            erstellt und extrahiert. Mit umfangreichen Regex-Muster können die
            Reden, die Person, die die Rede hält, die assoziierte Partei und
            Interjektionen durch das Plenum extrahieren werden. Ab der elften
            Wahlperiode werden Tagesordnungspunkte in den Protokollen verwendet,
            um den Rohtext aufzuteilen. Diese Unterteilung des Textes erhöht die
            Genauigkeit der angewendeten Regex-Muster. Der letzte
            Verarbeitungsschritt ist die Erstellung der Beitragstabelle.
          </DefaultText>
          <DefaultText>
            Aufgrund dieser Datengrundlage können wir nun Algorithmen aus den
            Bereichen NLP (Natural Language Processing), Machine Learning, Deep
            Learning etc. auf die Daten anwenden, um Fragen zu beantworten, die
            bisher nicht (ohne großen Aufwand) beantwortbar waren.
          </DefaultText>
          <Image
            src={"/images/statistics/wer_kommt_zu_wort.png"}
            alt={"imageAlt"}
            layout="responsive"
            width="1024px"
            height="512px"
            quality="75"
          />
        </DefaultContainer>
      </Section>
      <Section>
        <DefaultContainer size="l">
          <ColoredSubline backgroundColor="pink.500">
            Der datenbasierte Ansatz unseres Verfahrens sichert die
            Reproduzierbarkeit und Validierbarkeit/Falsifizierbarkeit aller
            Analysen und erfüllt somit den Anspruch der Wissenschaftlichkeit.
          </ColoredSubline>
          <DefaultText>
            Die Verarbeitung der oben genannten Datenquellen und die Erstellung
            der Datenbank ist ein vollautomatischer und reproduzierbarer
            Vorgang. Auf diese Weise können wir sicherstellen, dass die
            Erstellung des Open Discourse-Korpus und der Datenbank unabhängig
            von jeglichen Zugehörigkeiten ist, die während der Entwicklung
            dieses Korpus beteiligt waren. Die Codebasis kann aus dem
            zugehörigen
            <NextChakraLink
              color="pink.500"
              href="https://github.com/open-discourse/open-discourse"
              isExternal
            >
              {" "}
              GitHub-Repository <ExternalLinkIcon mx="2px" />
            </NextChakraLink>{" "}
            abgerufen werden.
          </DefaultText>
        </DefaultContainer>
      </Section>
      <Section>
        <DefaultContainer size="l">
          <Tagline>Welches Potenzial steckt in den Daten?</Tagline>
          <DefaultHeadline size="s">
            Mögliche Analysen und Tools
          </DefaultHeadline>
          <ColoredSubline backgroundColor="pink.500">
            Die aufwendige Datenaufbereitung erlaubt komplexe Analysen und
            vielschichtige, mehrdimensionale Untersuchungen.
          </ColoredSubline>
          <DefaultText>
            Bisher haben wir in erste Linie Arbeit in die Daten und das
            Programmieren der Plattform gesteckt. Die vielfältigen
            Analysemöglichkeiten liegen noch offen vor uns. Hier braucht es vor
            allem die Fähigkeiten von Politik und Sozialwissenschaftlerinnen,
            Datenjournalistinnen und anderen versierten Köpfen, die die wahren
            Erkenntnisse aus dem Datensatz ausgraben.
          </DefaultText>
          <DefaultText>
            Mögliche Forschungsfragen könnten z.B. sein:
          </DefaultText>
          <UnorderedList marginLeft={{ base: 10, md: 14, lg: 20, xl: 28 }}>
            <DefaultListItem>
              Wie variiert die politische Sprache abhängig vom jeweiligen
              Themengebiet und abhängig von der Zeit?
            </DefaultListItem>
            <DefaultListItem>
              Die Größe des Datensatzes eignet sich gut zur Evaluation und
              Optimierung verschiedener Algorithmen aus den Gebieten NLP,
              Computational Linguistics, Information Retrieval u.ä.
            </DefaultListItem>
            <DefaultListItem>
              Wie hat sich die ideologische Positionierung von Fraktionen und
              Personen über die Zeit verändert?
            </DefaultListItem>
            <DefaultListItem>
              Überprüfung von Haltungen spezifischer Abgeordneter
            </DefaultListItem>
          </UnorderedList>
          <DefaultText>
            Wir stellen unsere{" "}
            <NextChakraLink
              color="pink.500"
              href="https://github.com/open-discourse/open-discourse"
              isExternal
            >
              {" "}
              aufbereitete Datenbank <ExternalLinkIcon mx="2px" />
            </NextChakraLink>{" "}
            an dieser Stelle zur Verfügung und geben die Nutzung, Weiterwendung
            und Weiterverbreitung frei. Bitte verweisen Sie auf unser Projekt
            und diese Website in Ihren Quellenangaben.
          </DefaultText>
        </DefaultContainer>
      </Section>
      <Section>
        <DefaultContainer size="l">
          <DefaultHeadline size="s">Das Data Paper</DefaultHeadline>
          <ColoredSubline backgroundColor="pink.500">
            Ein Data Paper ist ein Dokument, dass durch einen
            Peer-Review-Prozess gegangen ist und den behandelten Datensatz
            beschreibt.
          </ColoredSubline>
          <DefaultText>
            Es erfordert Mühe, Daten vorzubereiten, zu kuratieren und zu
            beschreiben. Genauso braucht es Zeit, das Data Paper zu schreiben.
            Aktuell arbeiten wir noch an dem Dokument und bitten Sie um noch ein
            wenig Geduld. Tragen Sie sich gern in unseren Newsletter ein, wenn
            Sie über die Veröffentlichung informiert werden wollen.
          </DefaultText>
        </DefaultContainer>
      </Section>
      <Section>
        <Image
          src={"/images/statistics/wer_kommt_zu_wort.png"}
          alt={"imageAlt"}
          layout="responsive"
          width="1024px"
          height="512px"
          quality="75"
        />
      </Section>
      <Section>
        <DefaultContainer size="l">
          <DefaultHeadline size="s">
            Darstellung des Gesamtprozesses
          </DefaultHeadline>
        </DefaultContainer>
      </Section>
    </BaseTemplate>
  );
};

export default Home;
