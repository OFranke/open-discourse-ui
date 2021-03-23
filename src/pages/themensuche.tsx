import { BaseTemplate } from "../templates/base-template";
import { DefaultContainer } from "@bit/limebit.limebit-ui.default-container";
import { Section } from "@bit/limebit.limebit-ui.section";
import { DefaultHeadline } from "@bit/limebit.limebit-ui.default-headline";

import React from "react";
import SEO from "../components/seo";
import { TopicModelling } from "../components/topic-modeling/index";
import { TopicLineGraph } from "../components/topic-modeling/topic-line-graph";
import { GetServerSideProps } from "next";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { DefaultText } from "@bit/limebit.limebit-ui.default-text";
import { ColoredSubline } from "@bit/limebit.limebit-ui.colored-subline";

type Data = {
  test: string;
  imgUrl: string | null;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const imgUrl = context?.query?.imgUrl;

  const data: Data = {
    test: "hello ssr",
    imgUrl: typeof imgUrl == "string" ? decodeURIComponent(imgUrl) : null,
  };

  return {
    props: {
      data,
    },
  };
};

const Page: React.FC<{ data: Data }> = ({ data }) => {
  const title = "Plenarprotokolle des deutschen Bundestages seit 1949";
  const description =
    "Open Discourse erleichtert den Zugang zu Protokollen des Bundestages mit einer Suchmaschine für Politiker, Redebeiträge und Fraktionen.";
  return (
    <BaseTemplate>
      <SEO
        title={title}
        description={description}
        canonicalRoute="/themensuche"
        additionalMetaTags={[
          { name: "twitter:card", content: "summary_large_image" },
          {
            name: "twitter:image",
            content: data.imgUrl || "",
          },
          {
            property: "og:image",
            content:
              data.imgUrl ||
              "https://opendiscourse.de/images/statistics/wer_kommt_zu_wort.png",
          },
          // we need this to trick facebook into showing the preview image provided by imgUrl parameter
          {
            property: "og:url",
            content: data.imgUrl || "",
          },
        ]}
      />
      <Section
        marginTop={{ base: "8", sm: "14", md: "20", lg: "20", xl: "32" }}
      >
        <DefaultContainer size="l">
          <DefaultHeadline size="s" as="h2">
            Worüber spricht der Bundestag?
          </DefaultHeadline>
          <DefaultText>
            Analysieren Sie selbst, über welche Themen der deutsche Bundestag
            seit 1949 spricht. Wählen Sie aus 73 Themen und filtern Sie die
            Sprecher_Innen nach Geschlecht, Alter, Partei und mehr.
          </DefaultText>
          <TopicLineGraph marginTop={{ base: 5, md: 10, lg: 10 }} />
          <TopicModelling />
        </DefaultContainer>
      </Section>
      <Section
        marginTop={{ base: "8", sm: "14", md: "20", lg: "20", xl: "32" }}
      >
        <DefaultContainer size="l">
          <DefaultHeadline size="s">FAQ</DefaultHeadline>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <DefaultHeadline size="s" as="span">
                      Was sehe ich hier?
                    </DefaultHeadline>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <DefaultText>
                  Abgebildet ist die Intensität, mit der sich der Deutsche
                  Bundestag verschiedenen Themen seit seiner Gründung gewidmet
                  hat. Auf der X-Achse sind die Jahre 1949-2020 abgebildet, die
                  Y-Achse entspricht [].
                </DefaultText>
                <DefaultText>
                  Zur Ermittlung der Intensität könnte beispielsweise die
                  Häufigkeit des Begriffes “Klimaschutz” über die Jahre
                  ausgezählt und dargestellt werden. Allerdings kann über das
                  Thema “Klimaschutz” gesprochen werden, ohne dieses Wort direkt
                  zu verwenden: So können Politiker_Innen zum Beispiel von
                  Naturschutz, Energiewende, CO2-Reduktion oder dem Pariser
                  Abkommen sprechen, und sich damit auch im Themenkomplex
                  “Klimaschutz” bewegen. Um also die Intensität eines Themas und
                  nicht nur eines Wortes zu ermitteln kann ein Topic Model
                  verwendet werden. Ein Topic Model ist ein statistisches Modell
                  zur Identifikation latenter Themen. Der Algorithmus sucht nach
                  Begriffen, die häufig zusammen genutzt werden und clustert
                  diese Begriffe zu einem Thema. Somit liegen hinter jedem Thema
                  hunderte Worte, die eine Indikation geben, dass über dieses
                  Thema geredet wird. Diese Intensität ist im Graphen
                  abgebildet.
                </DefaultText>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <DefaultHeadline size="s" as="span">
                      Wie wurde dabei vorgegangen?
                    </DefaultHeadline>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <DefaultText>
                  Als Grundlage für die Analyse dient der Open Discourse
                  Datensatz mit knapp 900.000 Redebeiträgen. Die Schritte bis
                  zum Modell sind dabei wie folgt:
                </DefaultText>
                <ColoredSubline as="h3" backgroundColor="pink.500">
                  Part-of-Speech Tagging, Lemmatisierung & Stemming
                </ColoredSubline>
                <DefaultText>
                  Zuerst werden mittels eines Part-of-Speech Tagging nur die
                  Substantive von Reden extrahiert. Diese werden dann auf ihre
                  lexikalische Grundform zurückgeführt. Zusätzlich werden die
                  Worte gestemmt um sicherzugehen, dass
                </DefaultText>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </DefaultContainer>
      </Section>
    </BaseTemplate>
  );
};

export default Page;
