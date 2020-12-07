import { BaseTemplate } from "../templates/base-template";
import SEO from "../components/seo";
import { Section } from "../components/section";
import { DefaultContainer } from "../components/default-container";
import { DefaultHeadline } from "../components/default-headline";
import { ColoredSubline } from "../components/colored-subline/index";
import { DefaultText } from "../components/default-text";
import { Link, ListItem, UnorderedList, Box } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { Quote } from "../components/quote";
import React from "react";
import { HeroWithCta } from "../components/hero-with-cta/index";
import { Tagline } from "../components/tagline";

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
            Wir bringen des Bundestag ins 21. Jahrhundert!
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
            <Link
              color="pink.500"
              href="https://www.bundestag.de/dokumente/protokolle/plenarprotokolle"
              isExternal
            >
              {" "}
              Servern des Bundestages <ExternalLinkIcon mx="2px" />
            </Link>{" "}
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
            <Link
              color="pink.500"
              href="https://www.bundestag.de/dokumente/protokolle/plenarprotokolle"
              isExternal
            >
              {" "}
              Politikwissenschaftler Nicolas Bechter{" "}
              <ExternalLinkIcon mx="2px" />
            </Link>{" "}
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
            Das Open Discourse-Korpus basiert auf drei verschiedenen unten
            aufgeführten Datenquellen, die unterschiedliche Formate und ...
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
            Im Jahr 2013 hat der Deutsche Bundestag das E-Government-Gesetz
            (EGovG) verabschiedet. Erst mit diesem Gesetz verpflichtete sich die
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

          <Box border="1px solid">
            <UnorderedList>
              <ListItem>
                <DefaultText as="span">
                  Kerndatenquelle: Parlamentsprotokolle vom Deutschen Bundestag
                </DefaultText>
              </ListItem>
              <UnorderedList>
                <ListItem>
                  <DefaultText as="span">
                    Die Protokolle von der ersten bis zur 18. Wahlperiode werden
                    als komprimiertes Archiv mit separaten XML-Dateien für jede
                    Parlamentssitzung bereitgestellt. Die Protokolle der
                    aktuellen 19. Periode werden als separate Dateien
                    bereitgestellt.{" "}
                  </DefaultText>
                </ListItem>
              </UnorderedList>
              <ListItem>
                <DefaultText as="span">
                  Metainformationen über die Mitglieder des Parlaments, die
                  Vorsitzenden und die Mitglieder des Kabinetts{" "}
                </DefaultText>
                <UnorderedList>
                  <ListItem>
                    <DefaultText as="span">
                      Die Metainformationen stammen aus den Stammdaten aller
                      MdBs (Stammdaten aller Abgeordneten seit 1949). Diese
                      Daten werden vom Bundestag zur Verfügung gestellt und
                      gepflegt.{" "}
                    </DefaultText>
                  </ListItem>
                  <ListItem>
                    <DefaultText as="span">
                      Es gibt seltene Fälle, in denen Politiker Mitglied der
                      Regierung (MG) sind und nie ein Mandat als Abgeordneter
                      hatten. Diese Politiker sind in den oben genannten
                      Stammdaten nicht enthalten. Daher werden die Namen aller
                      MG aus der deutschen Wikipedia gestrichen und mit den
                      Stammdaten zusammengeführt.{" "}
                    </DefaultText>
                  </ListItem>
                </UnorderedList>
              </ListItem>
              <br />
            </UnorderedList>
          </Box>
          <DefaultText>
            Neben Open Discourse möchten wir noch zwei weitere Projekte
            hervorstellen, die sich mit den Korpora des Deutschen Bundestags
            beschäftigt haben:
            <Link
              color="pink.500"
              href="https://www.bundestag.de/dokumente/protokolle/plenarprotokolle"
              isExternal
            >
              {" "}
              GermaParl und ParlSpeech. <ExternalLinkIcon mx="2px" />
            </Link>{" "}
          </DefaultText>
          <DefaultText>
            Im direkten Vergleich ist erkennbar, dass das Korpus von Open
            Discourse bereits frühere Legislaturperioden umfasst und somit eine
            umfassende, nahezu vollständige Maschienenlesbarkeit ermöglicht:
          </DefaultText>
          <DefaultText>
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
            Das Open Discourse-Korpus basiert auf drei verschiedenen unten
            aufgeführten Datenquellen, die unterschiedliche Formate und ...
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
            <Link
              color="pink.500"
              href="https://github.com/open-discourse/open-discourse"
              isExternal
            >
              {" "}
              GitHub-Repository <ExternalLinkIcon mx="2px" />
            </Link>{" "}
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
            Das Open Discourse-Korpus basiert auf drei verschiedenen unten
            aufgeführten Datenquellen, die unterschiedliche Formate und ...
          </ColoredSubline>
          <DefaultText>
            Da unsere Stärken in erster Linie bei der Arbeit mit Daten und dem
            Programmieren von Software liegen, können wir über viele
            Analysemöglichkeiten bisher nur fantasieren. Hier braucht es vor
            allem die Fähigkeiten von Politik und Sozialwissenschaftlerinnen,
            Datenjournalistinnen und anderen versierten Köpfen, die die wahren
            Erkenntnisse aus dem Datensatz ausgraben.
          </DefaultText>
          <DefaultText>
            Mögliche Forschungsfragen könnten z.B. sein:
          </DefaultText>
          <UnorderedList>
            <ListItem>
              <DefaultText>
                Wie variiert die politische Sprache abhängig vom jeweiligen
                Themengebiet und abhängig von der Zeit?
              </DefaultText>
            </ListItem>
            <ListItem>
              <DefaultText>
                Die Größe des Datensatzes eignet sich gut zur Evaluation und
                Optimierung verschiedener Algorithmen aus den Gebieten NLP,
                Computational Linguistics, Information Retrieval u.ä.
              </DefaultText>
            </ListItem>
            <ListItem>
              <DefaultText>
                Wie hat sich die ideologische Positionierung von Fraktionen und
                Personen über die Zeit verändert?
              </DefaultText>
            </ListItem>
            <ListItem>
              <DefaultText>
                Überprüfung von Haltungen spezifischer Abgeordneter
              </DefaultText>
            </ListItem>
          </UnorderedList>
          <DefaultText>
            Wir stellen unsere{" "}
            <Link
              color="pink.500"
              href="https://github.com/open-discourse/open-discourse"
              isExternal
            >
              {" "}
              aufbereitete Datenbank <ExternalLinkIcon mx="2px" />
            </Link>{" "}
            an dieser Stelle zur Verfügung und geben die Nutzung, Weiterwendung
            und Weiterverbreitung frei. Bitte verweist auf unser Projekt und
            diese Website in euren Quellenangaben.
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
            Aktuell arbeiten wir noch an dem Dokument und bitten euch um noch
            ein wenig Geduld. Tragt euch gern in unseren Newsletter ein, wenn
            ihr über die Veröffentlichung informiert werden wollt.
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
          <Tagline>
            Könnt ihr das ganze nochmal von vorn bis hinten aufdrösel?
          </Tagline>
          <DefaultHeadline size="s">
            Darstellung des Gesamtprozesses
          </DefaultHeadline>
        </DefaultContainer>
      </Section>
    </BaseTemplate>
  );
};

export default Home;
