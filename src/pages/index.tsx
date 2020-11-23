import { BaseTemplate } from "../templates/base-template";
import {
  Stack,
  Box,
  SimpleGrid,
  Link,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
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
import SEO from "../components/seo";
import { Tagline } from "../components/tagline";
import { DefaultButton } from "../components/default-button";
import { ButtonLink } from "../components/button-link";

const Home: React.FC = () => {
  return (
    <BaseTemplate>
      <SEO
        title="Plenarprotokolle des deutschen Bundestages seit 1949"
        description="Open Discourse erleichtert den Zugang zu Protokollen des Bundestages mit einer Suchmaschine für Politiker, Redebeiträge und Fraktionen."
        canonicalRoute="/"
      />
      <Section>
        <HeroWithCta />
      </Section>
      <Section display="flex" flexDirection="column">
        <DefaultContainer size="l">
          {/* <DefaultHeadline as="h1" size="s">
            Analyse von Plenarprotokollen für Mensch und Machine
          </DefaultHeadline> */}
          <ColoredSubline as="h2" backgroundColor="pink.500">
            Wie Data Science den Weg zu politischen Diskurs demokratisiert
          </ColoredSubline>
          <DefaultText>
            Open Discourse hat die Plenarprotokolle des deutschen Bundestags
            seit 1949 aufgebrochen und analysierbar gemacht - und zwar für
            Mensch und Maschinen. Die Plattform erleichtert den Zugang und die
            Recherche in den über 800.000 Redebeiträgen der letzten 70 Jahre.
          </DefaultText>
          <DefaultText>
            Die Datenbank hinter Open Discourse ist die erste granulare,
            umfassende und maschinenlesbare Aufbereitung jedes jemals
            gesprochenen Wortes in den Parlamentssitzungen des deutschen
            Bundestages und ermöglicht gefilterte Recherchen in in den Reden,
            Zwischenrufe und Anfragen der PolitkerInnen und Fraktionen.
          </DefaultText>
          <DefaultText>
            Für einen offenen Diskurs und eine wissenschaftliche
            Auseinandersetzung mit politischer Sprache.
          </DefaultText>
        </DefaultContainer>
      </Section>
      <Section>
        <DefaultContainer size="l">
          <Stack
            direction={{ base: "column", md: "row" }}
            justifyContent="space-between"
            spacing="5"
          >
            <Box>
              <AnimatedCountUp
                from={100000}
                to={331197}
                subline="Seiten Text"
              ></AnimatedCountUp>
            </Box>

            <Box>
              <AnimatedCountUp
                from={100000}
                to={846628}
                subline="Redebeiträge"
              ></AnimatedCountUp>
            </Box>
            <Box>
              <AnimatedCountUp
                from={1000000}
                to={2255102}
                subline="Reaktionen & Zwischenrufe"
              ></AnimatedCountUp>
            </Box>
          </Stack>
        </DefaultContainer>
      </Section>
      <Section>
        <DefaultContainer size="l">
          <DefaultHeadline size="s">
            An der Schnittstelle zwischen Politikwissenschaft und Data Science
          </DefaultHeadline>
          <ColoredSubline backgroundColor="pink.500">
            Open Discourse erleichtet den Zugang zu über 800.000 Reden seit 1949
            und ermöglicht eine strukturierte Stichwortrecherche auf der
            Grundlage von Politikern, Koalitionen und Positionen.
          </ColoredSubline>
          <DefaultText>
            Mit Methoden der Informatik und Computerlinguistik haben wir alle
            Reden, Zwischenrufe, Anfragen usw. der jeweiligen Politiker und
            Fraktionen zugeordnet und durchsuchbar gemacht sowie zahlreiche
            Metainformationen hinzugefügt.
          </DefaultText>
          <UnorderedList>
            <ListItem>
              <DefaultText as="span">
                Wie hat sich der politische Diskurs in den letzten 70 Jahren
                verändert?
              </DefaultText>
            </ListItem>
            <ListItem>
              <DefaultText as="span">
                Wie ist die thematische Nähe von Politikern zueinander?
              </DefaultText>
            </ListItem>
            <ListItem>
              <DefaultText as="span">
                Wie hoch ist der relative Anteil von Frauen und Männern, die von
                den verschiedenen Parteien sprechen?
              </DefaultText>
            </ListItem>
            <ListItem>
              <DefaultText as="span">
                Bürger, Journalisten und Wissenschaftler können jetzt den
                gesamten Datensatz für ihre eigene Forschung herunterladen und
                auf Muster untersuchen.
              </DefaultText>
            </ListItem>
            <ListItem>
              <DefaultText as="span">
                Nutze unsere Volltextsuche, um den politischen Diskurs im
                Bundestag nachzuverfolgen und zu untersuchen oder downloade den
                Datensatz, um eigene umfassende Analysen der Sprache und
                Reaktionen des Bundestags von 1949 bis heute durchzuführen.
              </DefaultText>
            </ListItem>
          </UnorderedList>

          <ButtonLink
            colorScheme="pink"
            href="/tools-und-daten"
            marginTop={{
              base: "4",
              md: "4",
              lg: "6",
              xl: "8",
            }}
          >
            Zu Tools und Daten
          </ButtonLink>
        </DefaultContainer>
      </Section>
      <Section background="pink.500" color="white">
        <DefaultContainer size="s">
          <Quote>
            Open Discourse ermöglicht einzigartige Einblicke in die Herzkammer
            der deutschen Politik und holt so den politischen Diskurs ins 21.
            Jahrhundert.
          </Quote>
        </DefaultContainer>
      </Section>
      <Section>
        <DefaultContainer size="l">
          <DefaultHeadline size="s">Auswertungen und Potenzial</DefaultHeadline>
          <ColoredSubline backgroundColor="#D8D8D8">
            Das Open Discourse Korpus steht Akteuren aus Politik,
            Journalisten_Innen, Wissenschaftler_Innen und Bürger_Innen zur
            freien Verfügung.
          </ColoredSubline>
          <DefaultText>
            Die Datenbank ermöglicht komplexen Analyse der politischen Sprache
            und erlaubt die Reden auf Muster zu untersuchen.
          </DefaultText>
        </DefaultContainer>
      </Section>
      <Section>
        <DefaultContainer size="l">
          <Stack spacing={{ base: "10", md: "20", lg: "32" }}>
            <Statistic
              headline="Statistik"
              subline="Wer kommt zu Wort – Männer oder Frauen?"
              description="Die Welt von Big Data, Machine Learning und Künstlicher Intelligenz ist komplex. Wir helfen Ihnen, sich darin zurechtzufinden. Mit professioneller Beratung und individuellen Schulungen."
              descriptionHighlight="Für mehr Wachstum und Effektivität."
              imagePath="/images/statistics/wer_kommt_zu_wort.png"
              imagePosition="right"
              imageAlt="Statistik"
            />
            <Statistic
              headline="Statistik"
              subline="Wer kommt zu Wort – Männer oder Frauen?"
              description="Die Welt von Big Data, Machine Learning und Künstlicher Intelligenz ist komplex. Wir helfen Ihnen, sich darin zurechtzufinden. Mit professioneller Beratung und individuellen Schulungen."
              descriptionHighlight="Für mehr Wachstum und Effektivität."
              imagePath="/images/statistics/wer_kommt_zu_wort.png"
              imagePosition="left"
              imageAlt="Statistik"
            />
          </Stack>
        </DefaultContainer>
      </Section>
      <Section background="pink.500" color="white">
        <DefaultContainer size="s">
          <Quote>
            Die Zusammenarbeit mit anderen Partnern kann dazu beitragen,
            deutsche Parlamente dauerhaft zu öffnen und politischen Diskurs zu
            demokratisieren.
          </Quote>
        </DefaultContainer>
      </Section>
      <Section>
        <DefaultContainer size="l">
          <DefaultHeadline size="s">Auswertungen und Analysen</DefaultHeadline>
          <ColoredSubline backgroundColor="pink.500">
            Das Open Discourse Korpus steht Akteuren aus Politik,
            Journalisten_Innen, Wissenschaftler_Innen und Bürger_Innen zur
            freien Verfügung.
          </ColoredSubline>
          <SimpleGrid columns={{ base: 1, lg: 3 }} spacing="10">
            <ProjectCard
              headline="Akademische Forschung"
              subline="Hypothetische Reden"
              description='Der Datensatz wurde von Masterstudentinnen des 3.Semesters in "Big Data Analytics" für ein Lehrforschungsprojekt verwendet und mittel Generative Adversarial Networks (GAN) werden hypothetische Reden generiert.'
              linkText="Mehr zum Projekt"
              imagePath="/images/logos/fom_logo.png"
              imageAlt="Logo der FOM - Hochschule für Ökonomie und Management"
            />
            <ProjectCard
              headline="CorrelAid"
              subline="Placeholder"
              description="CorrelAid ist ein überparteiliches gemeinnütziges Netzwerk von Data Scientists, die die Welt durch Data Science verändern wollen. Ziel der Zusammenarbeit mit unserem Projekt ist es, NLP-Techniken auf den Datensatz anzuwenden und Einblicke zu gewinnen, worüber die deutschen Abgeordneten seit der Gründung des Bundestages gesprochen haben."
              linkText="Mehr zum Projekt"
              imagePath="/images/logos/fom_logo.png"
              imageAlt="Logo der FOM - Hochschule für Ökonomie und Management"
            />
            <ProjectCard
              headline="ZDF Heute"
              subline="Placeholder"
              description="ZDFheute untersuchte die Plenarprotokolle des Deutschen Bundestages auf Basis unseres Datensatzes und ermittelte inwiefern sich unsere Politikerinnen seit dem Jahr 1949  mit dem Stichwort “Pandemie” auseinandergesetzt hat."
              linkText="Mehr zum Projekt"
              imagePath="/images/logos/fom_logo.png"
              imageAlt="Logo der FOM - Hochschule für Ökonomie und Management"
            />
          </SimpleGrid>

          <ButtonLink
            colorScheme="pink"
            href="/analysen"
            marginTop={{
              base: "4",
              md: "4",
              lg: "6",
              xl: "8",
            }}
          >
            Analysen
          </ButtonLink>
        </DefaultContainer>
      </Section>
      <Section background="pink.500" color="white">
        <DefaultContainer size="s">
          <Quote>
            Für einen offenen Diskurs mit den technologischen Mitteln des 21.
            Jahrhunderts.
          </Quote>
        </DefaultContainer>
      </Section>
      <Section>
        <DefaultContainer size="l">
          <Tagline>Warum ist das wichtig?</Tagline>
          <DefaultHeadline size="s">Warum ist das wichtig?</DefaultHeadline>
          <ColoredSubline backgroundColor="pink.500">
            Das Open Discourse Korpus steht Akteuren aus Politik,
            Journalisten_Innen, Wissenschaftler_Innen und Bürger_Innen zur
            freien Verfügung.
          </ColoredSubline>
          <DefaultText>
            In seiner über 70 jährigen Geschichte war der Bundestag immer eins:
            Ein Ort der lebhaften Debatte und parlamentarischer Marktplatz
            unserer Demokratie. Egal ob Grundsätzliches oder Tagesaktuelles,
            ziemlich jedes Thema wurde besprochen, kritisiert oder beklatscht.
            Praktisch alle Dinge in der täglichen Lebenswelt haben eine
            politische Dimension, insbesondere eine bundespolitische. Im
            Grundgesetz ist definiert, dass die Abgeordneten die Vertreter_Innen
            des gesamten Volkes sind und dass der Bundestag öffentlich
            verhandelt. Wir alle haben somit das Recht, die Inhalte und Vorgänge
            im Parlament transparent mitverfolgen zu dürfen.
          </DefaultText>

          <DefaultText>
            Bisher lagen die Protokolle zwar auf den Serven des Bundestags, aber
            die Einsicht in die Dokumenten ist umständlich und das Format der
            Dokumente für eine moderne Datenverarbeitung nicht geeignet. Auf
            Open Discourse können Bürger_Innen, Journalist_Innen und
            Wissenschaftler_Innen jetzt zugänglich und kostenfrei über die
            <Link color="pink.500" href="/tools-und-daten">
              Tools und Daten
            </Link>
            der Plattform die Plenarprotokolle nach Stichworten, Politiker_Innen
            und Ämtern durchsuchen und die Ergebnisse für Ihre Arbeit, Forschung
            und natürlich für das eigene Interesse nutzen.
          </DefaultText>
        </DefaultContainer>
      </Section>
      <Section>
        <Image
          src={"/images/sample/team_outside.png"}
          alt={"Team draußen"}
          layout="responsive"
          width="1440px"
          height="700px"
          quality="75"
        />
      </Section>
      <Section>
        <DefaultContainer size="l">
          <Tagline>Wie funktioniert das?</Tagline>
          <DefaultHeadline size="s">Die Herangehensweise</DefaultHeadline>
          <ColoredSubline backgroundColor="pink.500">
            Das Open Discourse Korpus steht Akteuren aus Politik,
            Journalisten_Innen, Wissenschaftler_Innen und Bürger_Innen zur
            freien Verfügung.
          </ColoredSubline>
          <DefaultText>
            Wir haben mit verschiedenen Methoden der Informatik und
            Computerlinguistik die Plenarprotokolle aufgebrochen und haben alle
            Redebeiträge, Zwischenrufe, Rückfragen etc. der jeweiligen
            Politiker_Innen und Fraktionen zugeordnet und durchsuchbar gemacht.
          </DefaultText>
          <DefaultText>
            Open Discourse verfügt damit über eine Datenbank, die jedes bisher
            in Plenarsitzungen gesprochene Wort strukturiert abbildet und sowohl
            für Menschen als auch Maschinen lesbar zur Verfügung stellt. Diese
            aufbereiteten Daten bilden die Grundlage, um Algorithmen aus den
            Bereichen NLP (Natural Language Processing), Machine Learning, Deep
            Learning etc. auf die Daten anzuwenden und umfangreiche Analysen
            durchzuführen.
          </DefaultText>
          <DefaultText>
            Der programmatische Ansatz unseres Verfahrens sichert die
            Reproduzierbarkeit und Validierbarkeit/Falsifizierbarkeit aller
            Analysen und erfüllt somit den Anspruch der Wissenschaftlichkeit.
          </DefaultText>
          <ButtonLink colorScheme="pink" href="/methodik">
            Methodik
          </ButtonLink>
        </DefaultContainer>
      </Section>
      <Section>
        <Image
          src={"/images/sample/team_outside.png"}
          alt={"Team draußen"}
          layout="responsive"
          width="1440px"
          height="700px"
          quality="75"
        />
      </Section>
      <Section>
        <DefaultContainer size="l">
          <Tagline>Wer steckt dahinter?</Tagline>
          <DefaultHeadline size="s">Wir machen das und deshalb</DefaultHeadline>
          <ColoredSubline backgroundColor="pink.500">
            Das Open Discourse Korpus steht Akteuren aus Politik,
            Journalisten_Innen, Wissenschaftler_Innen und Bürger_Innen zur
            freien Verfügung.
          </ColoredSubline>
          <DefaultText>
            Open Discourse ist ein gemeinnütziges Projekt der Limebit GmbH. Die
            Initiative ist selbstfinanziert, unabhängig und aus den Fähigkeiten
            und Motivationen unser Mitarbeiter_Innen gewachsen. Die Plattform
            ist unser Beitrag zur Demokratisierung des Zugangs politischer
            Themen und Akteure_Innen und eine Herzensangelegenheit.
          </DefaultText>
          <DefaultText>
            Möchten Sie uns Feedback geben oder haben Sie Interesse Ihre
            Fähigkeiten, Ideen oder Ihr Netzwerk in irgendeiner Form zur
            Verfügung zu stellen? Kontaktieren Sie uns gern!
          </DefaultText>
          <ButtonLink colorScheme="pink" href="/about">
            Über uns
          </ButtonLink>
        </DefaultContainer>
      </Section>
    </BaseTemplate>
  );
};

export default Home;
