import { BaseTemplate } from "../templates/base-template";
import { Stack, Box, SimpleGrid } from "@chakra-ui/react";
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

const Home: React.FC = () => {
  return (
    <BaseTemplate>
      <SEO
        title="Plenarprotokolle des deutschen Bundestages seit 1949"
        description="Open Discourse erleichtert den Zugang zu Protokollen des Bundestages mit einer Suchmaschine für Politiker, Redebeiträge und Fraktionen."
      />
      <Section>
        <HeroWithCta />
      </Section>
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
          <DefaultText>
            Open Discourse hat die Plenarprotokolle des deutschen Bundestags
            seit 1949 analysierbar gemacht - und zwar für Mensch und Maschinen.
            Die Plattform erleichtert den Zugang zu den über 800.000
            Redebeiträgen der letzten 70 Jahre und demokratisiert die Analyse
            von politischen Debatten im Parlament.
            <br />
            <br />
            Open Discourse ist die erste strukturierte und die umfassendste
            Aufbereitung jedes jemals gesprochenen Wortes in den
            Parlamentssitzungen des deutschen Bundestages. Für einen offenen
            Diskurs, für mehr Einsicht, für eine wissenschaftliche
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
            Um was geht es bei Open Discourse?
          </DefaultHeadline>
          <ColoredSubline backgroundColor="#D8D8D8">
            Open Discourse ist ein forschungsbasiertes Datenprojekt an der
            Schnittstelle zwischen Politikwissenschaft und Data Science.
          </ColoredSubline>
          <DefaultText>
            Mit unserer aufbereiteten Datenbank können die Plenarprotokolle des
            Deutschen Bundestags seit 1949 nun frei zugänglich analysiert und
            auf Muster untersucht werden.
            <br />
            <br />
            Nutze unsere Volltextsuche, um den politischen Diskurs im Bundestag
            nachzuverfolgen und zu untersuchen oder downloade den Datensatz, um
            eigene umfassende Analysen der Sprache und Reaktionen des Bundestags
            von 1949 bis heute durchzuführen.
          </DefaultText>
        </DefaultContainer>
      </Section>
      <Section background="pink.500" color="white">
        <DefaultContainer size="s">
          <Quote
            text="Open Discourse ermöglicht einzigartige Einblicke in die Herzkammer der deutschen Politik und holt so den politischen Diskurs ins 21. Jahrhundert."
            author="Florian Richter"
            authorSubtext="Initiator von Open Discourse"
          />
        </DefaultContainer>
      </Section>
      <Section>
        <DefaultContainer size="l">
          <DefaultHeadline size="s">
            Open Discourse steht der Öffentlichkeit frei zur Verfügung.
          </DefaultHeadline>
          <ColoredSubline backgroundColor="#D8D8D8">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
          </ColoredSubline>
          <DefaultText>
            Das Open Discourse Korpus steht Akteuren aus Politik,
            Journalisten_Innen, Wissenschaftler_Innen und Bürger_Innen zur
            freien Verfügung. Wir freuen, uns dass der Datensatz bereits für
            unterschiedlichen Analysen genutzt werden konnte und Open Discourse
            es sogar in die Medien geschafft hat.
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
          <DefaultHeadline size="s">Lorem ipsum dolor sit amet</DefaultHeadline>
          <ColoredSubline backgroundColor="pink.500">
            Künstliche Intelligenz wird unsere Zukunft verändern. Wir begleiten
            Sie auf den Weg der digitalen Transformation.
          </ColoredSubline>
          <SimpleGrid columns={{ base: 1, lg: 3 }} spacing="10">
            <ProjectCard
              headline="FOM"
              subline="Hypothetische Reden"
              description='Der Datensatz wurde von Masterstudentinnen des 3.Semesters in "Big Data Analytics" für ein Lehrforschungsprojekt verwendet und mittel Generative Adversarial Networks (GAN) werden hypothetische Reden generiert.'
              linkText="Link zu FOM"
              imagePath="/images/logos/fom_logo.png"
              imageAlt="Logo der FOM - Hochschule für Ökonomie und Management"
            />
            <ProjectCard
              headline="FOM"
              subline="Hypothetische Reden"
              description='Der Datensatz wurde von Masterstudentinnen des 3.Semesters in "Big Data Analytics" für ein Lehrforschungsprojekt verwendet und mittel Generative Adversarial Networks (GAN) werden hypothetische Reden generiert.'
              linkText="Link zu FOM"
              imagePath="/images/logos/fom_logo.png"
              imageAlt="Logo der FOM - Hochschule für Ökonomie und Management"
            />
            <ProjectCard
              headline="FOM"
              subline="Hypothetische Reden"
              description='Der Datensatz wurde von Masterstudentinnen des 3.Semesters in "Big Data Analytics" für ein Lehrforschungsprojekt verwendet und mittel Generative Adversarial Networks (GAN) werden hypothetische Reden generiert.'
              linkText="Link zu FOM"
              imagePath="/images/logos/fom_logo.png"
              imageAlt="Logo der FOM - Hochschule für Ökonomie und Management"
            />
          </SimpleGrid>
          <DefaultButton
            colorScheme="pink"
            marginTop={{ base: "6", md: "10", lg: "14", xl: "20" }}
          >
            Analysen und Projekte
          </DefaultButton>
        </DefaultContainer>
      </Section>
      <Section>
        <DefaultContainer size="l">
          <Tagline>Warum ist das wichtig?</Tagline>
          <DefaultHeadline size="s">Lorem ipsum dolor sit amet</DefaultHeadline>
          <ColoredSubline backgroundColor="#D8D8D8">
            Open Discourse ist ein forschungsbasiertes Datenprojekt an der
            Schnittstelle zwischen Politikwissenschaft und Data Science.
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
            <br />
            <br />
          </DefaultText>
          <DefaultHeadline size="xs" as="h3">
            Für einen offenen Diskurs mit den technologischen Mitteln des 21.
            Jahrhunderts.
          </DefaultHeadline>
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
            <br />
            <br />
            Bisher lagen die Protokolle zwar auf den Serven des Bundestags, aber
            die Einsicht in die Dokumenten ist umständlich und das Format der
            Dokumente für eine moderne Datenverarbeitung nicht geeignet. Auf
            Open Discourse können Bürger_Innen, Journalist_Innen und
            Wissenschaftler_Innen jetzt zugänglich und kostenfrei über die Tools
            und Daten der Plattform die Plenarprotokolle nach Stichworten,
            Politiker_Innen und Ämtern durchsuchen und die Ergebnisse für Ihre
            Arbeit, Forschung und natürlich für das eigene Interesse nutzen.
          </DefaultText>
        </DefaultContainer>
      </Section>
    </BaseTemplate>
  );
};

export default Home;
