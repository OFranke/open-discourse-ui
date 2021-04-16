import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/accordion";
import { Box } from "@chakra-ui/react";
import { DefaultHeadline } from "@bit/limebit.limebit-ui.default-headline";
import DefaultText from "@bit/limebit.limebit-ui.default-text";
import { ColoredSubline } from "@bit/limebit.limebit-ui.colored-subline";
import NextChakraLink from "@bit/limebit.limebit-ui.next-chakra-link";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { ReactTable } from "@bit/limebit.chakra-ui-recipes.react-table";
import { FaqAccordionItem } from "./faq-accordion-item";

export const Question1 = () => {
  return (
    <Accordion allowToggle>
      <FaqAccordionItem headline="Was sehe ich hier?">
        <>
          <DefaultText>
            Abgebildet ist, wie stark sich der Bundestag seit 1949 mit
            verschiedenen Themen auseinandersetzt. Auf der X-Achse sind die
            Jahre 1949 - 2020 abgebildet, die Y-Achse zeigt die Relevanz, mit
            der ein Thema besprochen wurde.
          </DefaultText>
          <DefaultText>
            Vereinfacht gesagt bedeutet eine Relevanz von 0.5 beim Thema
            Volkswirtschaft, dass das Thema die Hälfte aller Reden eingenommen
            hat. Zu beachten ist, dass eine Rede sich aus mehreren Themen
            zusammensetzen kann.
          </DefaultText>
          <DefaultText>
            Betrachten wir ein Beispiel: In{" "}
            <NextChakraLink
              color="pink.500"
              href="/volltextsuche?fromDate=1990-10-03&politicianIdQuery=11000246&toDate=1990-10-05"
              target="_blank"
            >
              Willy Brandts Rede vom 04. Oktober 1990{" "}
              <ExternalLinkIcon mx="2px" />
            </NextChakraLink>{" "}
            behandelte er das Thema Wiedervereinigung, aber auch Themen wie
            Verteidigungspolitik, Ost-West Konflikt, öffentliche Verwaltung,
            Arbeit und andere werden in der Rede angeschnitten.{" "}
          </DefaultText>
          <DefaultText>
            Bei dieser Rede ergeben sich folgende Relevanzwerte für die
            einzelnen Themen (Auszug):
          </DefaultText>
          <ReactTable
            columns={[
              { Header: "Thema", accessor: "topic" },
              { Header: "Relevanz", accessor: "relevance" },
            ]}
            data={[
              { topic: "Wiedervereinigung", relevance: 0.081 },
              { topic: "Verteidigungspolitik", relevance: 0.152 },
              { topic: "Außenpolitik: Ost-West Konflikt", relevance: 0.058 },
              { topic: "Öffentliche Verwaltung", relevance: 0.058 },
            ]}
            pageSize={10}
            colors={{ evenColor: "gray.200", tableHeadColor: "gray.200" }}
          />
          <DefaultText>
            In dieser Rede nutzt Willy Brandt allerdings gar nicht das Wort
            Wiedervereinigung. Stattdessen spricht er von der Mauer, Einigung,
            Zusammenwachsen und Ost-West-Entspannung.
          </DefaultText>
          <DefaultText>
            Themen sind also Ansammlungen von Wörtern, die auf dieses Thema
            hinweisen. So kann Willy Brandt über die Wiedervereinigung sprechen,
            ohne dieses Wort selbst zu verwenden.
          </DefaultText>
          <DefaultText>
            Mittels eines{" "}
            <NextChakraLink
              color="pink.500"
              href="https://de.wikipedia.org/wiki/Latent_Dirichlet_Allocation"
              isExternal
            >
              LDA Topic Models <ExternalLinkIcon mx="2px" />
            </NextChakraLink>{" "}
            haben wir die Reden des Bundestages analysiert und automatisch die
            Wörter zu Themen zusammengefasst. Die durchschnittliche Relevanz von
            73 Themen haben wir auf dieser Seite interaktiv zur Verfügung
            gestellt.
          </DefaultText>
        </>
      </FaqAccordionItem>
    </Accordion>
  );
};
