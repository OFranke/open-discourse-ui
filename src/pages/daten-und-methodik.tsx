import { BaseTemplate } from "../templates/base-template";
import { SEO } from "../components/seo";
import { Section } from "@bit/limebit.limebit-ui.section";
import { DefaultContainer } from "@bit/limebit.limebit-ui.default-container";
import { DefaultHeadline } from "@bit/limebit.limebit-ui.default-headline";
import { ColoredSubline } from "@bit/limebit.limebit-ui.colored-subline";
import { DefaultText } from "@bit/limebit.limebit-ui.default-text";
import { UnorderedList } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Quote } from "@bit/limebit.limebit-ui.quote";
import React from "react";
import { Tagline } from "@bit/limebit.limebit-ui.tagline";
import { NextChakraLink } from "@bit/limebit.limebit-ui.next-chakra-link";
import { DefaultListItem } from "../components/default-list-item";
import styles from "./styles.module.css";
import { BackgroundImage } from "../components/background-image";
import Image from "next/image";

import headerImage from "/public/images/methodik/header_methodik.jpg";
import sectionImage from "/public/images/methodik/reichstagsgebäude_wiese.jpg";

const Home: React.FC = () => {
  return (
    <BaseTemplate>
      <SEO
        title="Data Science öffnet den politischen Diskurs"
        description="Open Discourse bringt den Bundestag mittels moderner Technologie und Analysemöglichkeiten in das 21.Jahrhundert. Lesen Sie hier über das methodische Vorgehen."
        canonicalRoute="methodik"
      />
      <Section>
        <BackgroundImage
          imagePath={headerImage}
          altText="Fotokollage mit Abgeordneten am Redner:innenpult und Redeinhalten."
          height="60vh"
        />
      </Section>

      <Section>
        <DefaultContainer size="l">
          <DefaultHeadline size="s" as="h1">
            Wir bringen den Bundestag ins 21. Jahrhundert!
          </DefaultHeadline>
          <ColoredSubline backgroundColor="pink.500">
            Der Deutsche Bundestag ist das parlamentarische Herz unserer
            Demokratie. In unserem Grundgesetz ist festgeschrieben, dass der
            Bundestag öffentlich verhandeln soll.
          </ColoredSubline>
          <DefaultText>
            Seit 1949 wird für jede{" "}
            <NextChakraLink color="pink.500" href="/plenarsitzungen">
              Plenarsitzung
            </NextChakraLink>{" "}
            ein stenografischer Bericht angefertigt, der jedes gesagte Wort der
            Sitzung dokumentiert. Diese Protokolle liegen als txt-, xml-, oder
            pdf-Dokumente auf den{" "}
            <NextChakraLink
              color="pink.500"
              href="https://www.bundestag.de/dokumente/protokolle/plenarprotokolle"
              isExternal
            >
              Servern des Bundestages <ExternalLinkIcon mx="2px" />
            </NextChakraLink>{" "}
            und sind öffentlich abrufbar.
          </DefaultText>

          <DefaultText>
            Die Protokolle und Transkripte der parlamentarischen Debatten sind
            eine reichhaltige Informationsquelle für Forschungsfragen. Die
            öffentlichen Dateiformate entsprechen jedoch leider noch nicht den
            Anforderungen für die Datenverarbeitung im digitalen Zeitalter.
          </DefaultText>
          <DefaultText>
            Vor Open Discourse waren die Dokumente für die Öffentlichkeit nicht
            maschinenlesbar. Jede Recherche stellte einen langwierigen,
            händischen Prozess dar, der es nahezu unmöglich machte, alle Texte
            manuell zu lesen und zu analysieren.
          </DefaultText>
        </DefaultContainer>
      </Section>
      <Section background="pink.500" color="white">
        <DefaultContainer size="s">
          <Quote>
            Eine Lösung mit den technischen Mitteln des 21. Jahrhunderts ist
            schon lange erforderlich.
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
            politische Ideengeschichte ausrichtete und die theoretischen und
            methodischen Rahmenbedingungen lange fehlten, um Dokumente wie die
            Plenarprotokolle in die Forschung einzubeziehen.
          </DefaultText>
          <DefaultText>
            Wir haben es uns zur Aufgabe gemacht, die im Grundgesetz definierte
            Öffentlichkeit des Bundestages durch moderne Wege der
            Datenverarbeitung wieder herzustellen, um jeder Bürgerin und jedem
            Bürger die Möglichkeit zu geben, den politischen Diskurs zu
            verfolgen und zu untersuchen.
          </DefaultText>
        </DefaultContainer>
      </Section>
      <Section>
        <DefaultContainer size="l">
          <Tagline>Woher kommen die Daten?</Tagline>
          <DefaultHeadline size="s">Die Plenarprotokolle</DefaultHeadline>
          <ColoredSubline backgroundColor="pink.500">
            Das Open Discourse Korpus basiert auf drei verschiedenen, unten
            aufgeführten Datenquellen, deren unterschiedliche Formate und
            Inhalte miteinander verknüpft wurden.
          </ColoredSubline>
          <DefaultText>
            Das Open Discourse Korpus besteht aus den{" "}
            <NextChakraLink color="pink.500" href="/plenarsitzungen">
              Plenarprotokollen
            </NextChakraLink>
            , die für jede Parlamentssitzung des Deutschen Bundestages erstellt
            werden. Diese Berichte dokumentieren jede Rede im Parlament sowie
            jede Einmischung und andere Arten von Beiträgen (Lachen, Heiterkeit,
            Applaus usw.) der Politker:innen, die während der Reden stattfanden.
            Insgesamt besteht das Korpus aus über 200 Millionen Tokens aus fast
            900.000 Reden in mehr als 4.000 verarbeiteten Protokollen. Das Open
            Discourse Korpus deckt insgesamt 99,7 Prozent aller Plenarprotokolle
            des Deutschen Bundestages ab.
          </DefaultText>
          <DefaultText>
            Im Jahr 2013 hat der Deutsche Bundestag das{" "}
            <NextChakraLink
              color="pink.500"
              href="https://www.gesetze-im-internet.de/egovg/"
              isExternal
            >
              E-Government-Gesetz (EGovG) <ExternalLinkIcon mx="2px" />
            </NextChakraLink>{" "}
            verabschiedet. Erst mit diesem Gesetz verpflichtete sich die
            Regierung, Regierungsdokumente und Daten von öffentlichem Interesse
            in einem maschinenlesbaren Format bereitzustellen. Darüber hinaus
            definiert dieses Gesetz uneingeschränkte Nutzungs- und
            Verwertungsrechte für diese Daten (open Data).
          </DefaultText>
          <DefaultText>
            Das Open Discourse-Korpus basiert auf drei verschiedenen, unten
            aufgeführten Datenquellen.
          </DefaultText>

          <UnorderedList
            listStyleType="disc"
            marginLeft={{ base: 10, md: 14, lg: 20, xl: 28 }}
          >
            <DefaultListItem>
              Kerndatenquelle:{" "}
              <NextChakraLink
                color="pink.500"
                href="https://www.bundestag.de/services/opendata"
                isExternal
              >
                Parlamentsprotokolle des Deutschen Bundestages
                <ExternalLinkIcon mx="2px" />
              </NextChakraLink>
            </DefaultListItem>
            <UnorderedList listStyleType="circle" className={styles.listStyle}>
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
              <UnorderedList listStyleType="circle">
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
                  Es gibt seltene Fälle, in denen Politiker:innen Mitglied der
                  Regierung (MG) sind und nie ein Mandat als Abgeordnete hatten.
                  Diese Politiker:innen sind in den oben genannten Stammdaten
                  nicht enthalten. Daher werden die{" "}
                  <NextChakraLink
                    color="pink.500"
                    href="https://de.wikipedia.org/wiki/Liste_der_deutschen_Regierungsmitglieder_seit_1949"
                    isExternal
                  >
                    Namen aller MG aus der deutschen Wikipedia
                    <ExternalLinkIcon mx="2px" />
                  </NextChakraLink>{" "}
                  übernommen und mit den Stammdaten zusammengeführt.
                </DefaultListItem>
              </UnorderedList>
            </DefaultListItem>
          </UnorderedList>
          {/* <Box display={{ base: "none", lg: "initial" }}>
            <DefaultText>Unser längstes Regex-Pattern</DefaultText>
            <Code display="block" border="1px solid" padding="4">
              <DefaultText>
                {String.raw`(?:(?<=\()|(?<=[-––]\s)|(?<=[––])|(?<=[-––]\.\s)|(?<=\s[-––])|(?<=[Hh]eiterkeit\s)|(?<=[Ll]achen\s)|(?<=[Ww]eiterer\s)|(?<=[Ww]eitere\s)|(?<=[Ee]rneuter\s)|(?<=[Ee]rneute\s)|(?<=[Ff]ortgesetzte\s)|(?<=[Ll]ebhafte\s)|(?<=[Ww]eitere\s[Ll]ebhafte\s|(?<=Andauernde\s)|(?<=Fortdauernde\s)))(?P<delete>(und\s?|[Ee]rneute\s|[Aa]nhaltende\s|[Ee]rregte\s|[Vv]ielfache)?(Zurufe?|Gegenrufe?|Rufe?)(?:(?::|\b(?:\s*bei\s+der|\s*im|\s*bei\s+Abgeordneten|\s*bei\s+Abgeordneten\s+der|\s*beim|\s*des|)\b\s*Abg\s?\.\s?(?P<name>(?:(?!\sund\s)(?!sowie\sdes)[^––:(){}[\]\n])+)(\s*[({\[](?P<location_information>[^––:(){}[\]\n]+)[)}\]])*\s*[({\[](?P<party>[^––:(){}[\]\n]*)[)}\]](\s*[({\[](?P<location_information>[^––:(){}[\]\n]+)[)}\]])*:)\s*(?P<content>[^––:(){{}}[\]\n]*)|\b(?:\s*bei\s+der|\s*im|\s*bei\s+Abgeordneten|\s*bei\s+Abgeordneten\s+der|\s*beim|\s*des|)\b\s*?(?!der)(?![-––])(?P<initiator>(?:(?!\s[-––]\s)[^:])*)\s*))(?=\)|–[^\)\(]+\)|{|—[^\)\(]+\)|\)|-[^\)\(]+\))`}
              </DefaultText>
            </Code>
          </Box> */}
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
            Politiker:innentabelle und eine Tabelle mit den gesprochenen
            Inhalten erstellt und extrahiert. Mit umfangreichen Regex-Muster
            können die Reden, die Person, die die Rede hält, die assoziierte
            Partei und Zwischenrufe durch das Plenum extrahieren werden. Ab der
            elften Wahlperiode werden Tagesordnungspunkte in den Protokollen
            verwendet, um den Rohtext aufzuteilen. Diese Unterteilung des Textes
            erhöht die Genauigkeit der angewendeten Regex-Muster. Der letzte
            Verarbeitungsschritt ist die Erstellung der Beitragstabelle.
          </DefaultText>
          <DefaultText>
            Aufgrund dieser Datengrundlage können wir nun Algorithmen aus den
            Bereichen NLP (Natural Language Processing), Machine Learning, Deep
            Learning etc. auf die Daten anwenden, um Fragen zu beantworten, die
            bisher nicht (ohne großen Aufwand) beantwortbar waren.
          </DefaultText>
          <Image
            src={"/images/regex_erkennung.png"}
            alt={"Mustererkennung"}
            layout="intrinsic"
            width={1100}
            height={550}
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
            Erstellung des Open Discourse Korpus maximal transparent und
            unabhängig ist. Die Codebasis kann aus dem zugehörigen
            <NextChakraLink
              color="pink.500"
              href="https://github.com/open-discourse/open-discourse"
              rel="noopener"
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
            Unsere bisherige Arbeit hat sich vorrangig auf die Aufarbeitung und
            Bereitstellung der Daten konzentriert. Die vielfältigen
            Analysemöglichkeiten liegen noch offen vor uns und vor Ihnen. Jetzt
            sind Sie gefragt, Ihre eigenen Fragestellungen mit den Daten zu
            beantworten und eigene Recherchen durchzuführen!
          </DefaultText>
          {/* <DefaultText>
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
          </UnorderedList> */}
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
            an dieser Stelle zur Verfügung und geben die Nutzung,
            Weiterverwendung und Weiterentwicklung frei. Bitte verweisen Sie auf
            unser Projekt und diese Website in Ihren Quellenangaben.
          </DefaultText>
        </DefaultContainer>
      </Section>
      <Section>
        <DefaultContainer size="l">
          <DefaultHeadline size="s">Das Data Paper</DefaultHeadline>
          {/* <ColoredSubline backgroundColor="pink.500">
            Ein Data Paper ist ein Dokument, dass durch einen
            Peer-Review-Prozess gegangen ist und den behandelten Datensatz
            beschreibt.
          </ColoredSubline> */}
          <DefaultText>
            Es erfordert Mühe, Daten vorzubereiten, zu kuratieren und zu
            beschreiben. Genauso braucht es Zeit, das Data Paper zu schreiben.
            Aktuell arbeiten wir noch an dem Dokument und bitten Sie um noch ein
            wenig Geduld. Tragen Sie sich gern in{" "}
            <NextChakraLink
              color="pink.500"
              isExternal
              href="https://opendiscourse.us4.list-manage.com/subscribe/post?u=30a259be75440df1879f0b592&id=c65a7ccd1a"
            >
              unseren Newsletter <ExternalLinkIcon mx="2px" />
            </NextChakraLink>{" "}
            ein, wenn Sie über die Veröffentlichung informiert werden wollen.
          </DefaultText>
        </DefaultContainer>
      </Section>
      <Section>
        <BackgroundImage
          imagePath={sectionImage}
          altText={"Wiese vor dem Reichstagsgebäude in Berlin"}
          height="60vh"
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

export default Home;
