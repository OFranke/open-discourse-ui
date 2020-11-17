import { BaseTemplate } from "../templates/base-template";
import SEO from "../components/seo";
import { Section } from "../components/section";
import { DefaultContainer } from "../components/default-container";
import { DefaultHeadline } from "../components/default-headline";
import { ColoredSubline } from "../components/colored-subline/index";
import { DefaultText } from "../components/default-text";
import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { Quote } from "../components/quote";
import React from "react";

const Home: React.FC = () => {
  return (
    <BaseTemplate>
      <SEO
        title="Plenarprotokolle des deutschen Bundestages seit 1949"
        description="Open Discourse erleichtert den Zugang zu Protokollen des Bundestages mit einer Suchmaschine für Politiker, Redebeiträge und Fraktionen."
      />
      <Section display="flex" flexDirection="column">
        <DefaultContainer size="l">
          <DefaultHeadline size="s" as="h2">
            Wir bringen des Bundestag ins 21. Jahrhundert!
          </DefaultHeadline>
          <ColoredSubline backgroundColor="pink.500">
            Künstliche Intelligenz wird unsere Zukunft verändern. Wir begleiten
            Sie auf den Weg der digitalen Transformation.
          </ColoredSubline>
          <DefaultText>
            Der Deutsche Bundestag ist das parlamentarische Herz unserer
            Demokratie. In unserem Grundgesetz ist festgeschrieben, dass der
            Bundestag öffentlich verhandelt soll. So wird seit 1949 für jede
            Plenarsitzung ein stenografischer Bericht angefertigt, der jedes
            gesagte Wort der Sitzung dokumentiert. Diese Protokolle liegen als
            txt-, xml-, oder pdf-Dokumente auf den{" "}
            <Link
              color="pink.500"
              href="https://www.bundestag.de/dokumente/protokolle/plenarprotokolle"
              isExternal
            >
              {" "}
              Servern des Bundestages <ExternalLinkIcon mx="2px" />
            </Link>{" "}
            und sind öffentlich abrufbar. <br />
            <DefaultContainer size="s">
              <Quote
                text="Die Protokolle und Transkripte der parlamentarischer Debatten sind eine reichhaltige Informationsquelle für Forschungsfragen. Die öffentlichen Dateiformate entsprechen jedoch leider noch nicht den Anforderungen für die Datenverarbeitung im digitalen Zeitalter."
                author="Jakob Kraus"
                authorSubtext="Entwickler von Open Discourse"
              />
            </DefaultContainer>
            Die Protokolle und Transkripte der parlamentarischer Debatten sind
            eine reichhaltige Informationsquelle für Forschungsfragen. Die
            öffentlichen Dateiformate entsprechen jedoch leider noch nicht den
            Anforderungen für die Datenverarbeitung im digitalen Zeitalter.
            <br />
            <br />
            Vor Open Discourse waren die Dokumente für die Öffentlichkeit nicht
            maschinenlesbar. Jede Recherche stellte einen langwierigen,
            händischen Prozess dar und für Wissenschaftler_Innen war es nahezu
            unmöglich, alle Texte manuell zu lesen und zu analysieren. Eine
            technologische Lösung war schon lange erforderlich. <br />
            <br />
            Warum aber hinkt der Deutsche Bundestag in Fragen der
            Digitalisierung so hinterher? Angesichts der jüngsten Fortschritte
            auf dem Gebiet der Verarbeitung natürlicher Sprache und der
            Computerlinguistik, fällt rasch auf, dass es an Forschung zu
            parlamentarischen Debatten mangelt - vor allem in der deutschen
            Politikwissenschaft. <br />
            <br />
            Einer der Hauptgründe ist laut dem Politikwissenschaftler Nicolas
            Bechter die Tatsache, dass sich die deutsche Forschung traditionell
            auf die politische Ideengeschichte ausrichtete und die theoretische
            und methodische Rahmenbedingungen lange fehlten, um Dokumente wie
            die Plenarprotokolle in die Forschung einzubeziehen. <br />
            <br />
            Wir haben es uns zur Aufgabe gemacht, die im Grundgesetz definierte
            Öffentlichkeit des Bundestages durch moderne Wege der
            Datenverarbeitung wieder herzustellen, um jeder Bürgerin und jedem
            Bürger - als auch die Möglichkeit zu geben, den politischen Diskurs
            zu verfolgen und zu untersuchen.
            <br />
            <br />
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
          <DefaultHeadline as="h2" size="s">
            Daten
          </DefaultHeadline>
          <DefaultText>
            Im Jahr 2013 hat der Deutsche Bundestag das E-Government-Gesetz
            (EGovG) verabschiedet. Dieses Gesetz verpflichtet die Regierung,
            Regierungsdokumente und Daten von öffentlichem Interesse in einem
            maschinenlesbaren Format bereitzustellen. Darüber hinaus unterwirft
            das Gesetz diesen Dokumenten uneingeschränkte Nutzungsrechte und
            Verwertungsrechte (offene Daten). Infolgedessen gibt keine
            wesentlichen rechtlichen Hindernisse für die Verwendung,
            Verarbeitung und Wiederverwendung dieser Dokumente.
            <br />
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
            <br />
            <br />
            Das Open Discourse-Korpus basiert auf drei verschiedenen unten
            aufgeführten Datenquellen. Ein XML-Umwandlung der Dokumenten war
            erforderlich, um die Dokumente maschienenlesbar zu nutzen:
          </DefaultText>
        </DefaultContainer>
      </Section>
    </BaseTemplate>
  );
};

export default Home;
