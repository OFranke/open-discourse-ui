import DefaultText from "@bit/limebit.limebit-ui.default-text";
import { ColoredSubline } from "@bit/limebit.limebit-ui.colored-subline";
import NextChakraLink from "@bit/limebit.limebit-ui.next-chakra-link";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FaqAccordionItem } from "./faq-accordion-item";
import { DefaultListItem } from "../../default-list-item";
import { OrderedList } from "@chakra-ui/react";

export const Question2 = () => {
  return (
    <FaqAccordionItem headline="Wie wurde dabei vorgegangen?">
      <>
        <DefaultText>
          Als Grundlage für die Analyse dient der{" "}
          <NextChakraLink
            color="pink.500"
            href="/tools-und-daten"
            target="_blank"
          >
            Open Discourse Datensatz (v.1.0.0) <ExternalLinkIcon mx="2px" />
          </NextChakraLink>{" "}
          mit über 900.000 Redebeiträgen des deutschen Bundestages. Die Schritte
          bis zum Modell sind dabei wie folgt:
        </DefaultText>
        <OrderedList listStyleType="none" marginLeft={0}>
          <DefaultListItem fontWeight="bold">
            <DefaultText>
              1. Part-of-Speech Tagging, Lemmatisierung & Stemming
            </DefaultText>
            <DefaultText fontWeight="initial">
              Zuerst werden mittels eines Part-of-Speech Taggings nur die
              Substantive von Reden extrahiert. Diese werden dann auf ihre
              lexikalische Grundform zurückgeführt. Zusätzlich werden die Worte
              gestemmt. Somit werden Wörter normalisiert und damit besser
              vergleichbar gemacht.
            </DefaultText>
          </DefaultListItem>

          <DefaultListItem fontWeight="bold">
            <DefaultText>2. Entfernung seltener Worte</DefaultText>
            <DefaultText fontWeight="initial">
              Um die Anzahl der Wörter zu verringern werden Wörter entfernt, die
              weniger als 10-mal gesagt wurden. Dies sind bspw. Wörter wie
              <em> Ellenbogenpolitik</em>. Dieses Verfahren erlaubt es die Größe
              des “Wörterbuches” (die Anzahl der einzelnen Substantive im
              Korpus) zu reduzieren. Insgesamt wurden rund 519.000 dieser
              seltenen Wörter entfernt. Dies verbessert das Modell und die
              Trainingszeit. Die vollständige Liste seltener Begriffe ist <NextChakraLink
                color="pink.500"
                href="https://opendiscourse-diskursanalyse.s3.eu-central-1.amazonaws.com/master_stopwords.xlsx"
                isExternal
              >
                hier <ExternalLinkIcon mx="2px" />
              </NextChakraLink>
              zu finden.
            </DefaultText>
          </DefaultListItem>
          <DefaultListItem fontWeight="bold">
            <DefaultText>3. Iteratives Training des Topic Models</DefaultText>
            <DefaultText fontWeight="initial">
              Anschließend wird das{" "}
              <NextChakraLink
                color="pink.500"
                href="https://de.wikipedia.org/wiki/Latent_Dirichlet_Allocation"
                isExternal
              >
                Latent Dirichlet Allocation (LDA) Topic Model{" "}
                <ExternalLinkIcon mx="2px" />
              </NextChakraLink>{" "}
              auf dem vorbereiteten Korpus trainiert. Dabei werden nur Reden
              berücksichtigt, die mindestens 10 Substantive enthalten. Dadurch
              fallen kurze organisatorische Redebeiträge wie bspw. die
              Moderation durch die Vorsitzenden der Sitzung weg, da diese in der
              Regel kein inhaltlicher Beitrag sind. Das Topic Model wurde auf
              400 Themen trainiert. Wiederholt wurden nach dem Training dabei
              geprüft, welche Wörter in sehr vielen Themen vorkommen. Dies sind
              die spezifischen Stoppwörter des Bundestages, bspw.{" "}
              <em>Gesetzesvorlage, Gegenstimmen</em> oder <em>Ausschuss</em>.
              Dabei wurden etwa 4.500 solcher Wörter identifiziert und aus dem
              Korpus entfernt. Eine vollständige Liste dieser Worte kann <NextChakraLink
                color="pink.500"
                href="https://opendiscourse-diskursanalyse.s3.eu-central-1.amazonaws.com/master_stopwords.xlsx"
                isExternal
              >
                hier <ExternalLinkIcon mx="2px" />
              </NextChakraLink>
              eingesehen werden. Als Ergebnis aus diesem Schritt entsteht eine
              große Tabelle, die jeder Rede zu jedem der 400 Themen einen Wert
              zuweist. Dieser Wert beschreibt, wie stark ein Thema in dieser
              Rede abgedeckt wurde. Ein Thema wird stärker abgedeckt, wenn die
              identifizierten Wörter des Themas genutzt werden. Die Summe der
              400 Themen addiert sich pro Rede auf 1.
            </DefaultText>
          </DefaultListItem>
          <DefaultListItem fontWeight="bold">
            <DefaultText>
              4. Zusammenführen der identifizierten Themen
            </DefaultText>
            <DefaultText fontWeight="initial">
              Nach dem Training gibt es die 400 Themen mit den automatisch
              zugewiesenen Wörtern. Nun kommt der einzige qualitative Teil
              dieses Modells zum Tragen: Für die Benennung der Themen haben wir
              uns an der Deutsch-Englische Version des internationalen CAP
              Codebook (
              <NextChakraLink
                color="pink.500"
                href="https://www.comparativeagendas.net/germany"
                isExternal
              >
                Comparative Agenda Projektes <ExternalLinkIcon mx="2px" />
              </NextChakraLink>
              )* orientiert. Eine Übersicht der relevanten Wörter pro Thema ist
              <NextChakraLink
                color="pink.500"
                href="https://open-discourse.github.io/open-discourse-documentation/1.0.0/topics-documentation.html"
                isExternal
              >
                hier <ExternalLinkIcon mx="2px" />
              </NextChakraLink> zu finden.
            </DefaultText>
            <DefaultText fontWeight="initial">
              *Quelle:{" "}
              <em>
                Christian Breunig and Tinette Schnatterer. 2018. German Policy
                Agendas - Data Set and Descriptive Insights. Working paper -
                University of Konstanz.
              </em>
            </DefaultText>
          </DefaultListItem>
        </OrderedList>
      </>
    </FaqAccordionItem>
  );
};
