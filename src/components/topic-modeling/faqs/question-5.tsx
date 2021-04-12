import DefaultText from "@bit/limebit.limebit-ui.default-text";
import { FaqAccordionItem } from "./faq-accordion-item";
import NextChakraLink from "@bit/limebit.limebit-ui.next-chakra-link";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { UnorderedList } from "@chakra-ui/react";
import { DefaultListItem } from "../../default-list-item";

export const Question5 = () => {
  return (
    <FaqAccordionItem headline="Welche Schwächen hat das Modell?">
    <>
      <DefaultText>
      Automatisierte Textanalysen können gewisse Schwächen bergen. So kann
          aus der Relevanz nicht abgelesen werden, ob eine Person oder Partei
          einem Thema zu- oder abgeneigt. Lediglich die Auseinandersetzung mit
          diesem Thema kann aufgezeigt werden.
      </DefaultText>
      <UnorderedList marginLeft={{ base: 10, md: 14, lg: 20, xl: 28 }}>
        <DefaultListItem>
        Die vorliegenden Daten geben keine Aussage darüber, ob eine Person oder eine Partei einem Thema zu- oder abgeneigt ist. Lediglich die Auseinandersetzung mit einem Thema kann aufgezeigt werden
        </DefaultListItem>
        <DefaultListItem>
        Die tatsächliche Relevanz kann über die Jahre stark schwanken und ist in diesem Modell mit einem mit einem dreijährigen Rolling Mean geglättet.

        </DefaultListItem>
        <DefaultListItem>
        Unreinheiten in der Datengrundlage können die Analyse verzerren.

        </DefaultListItem>
        <DefaultListItem>
        Die Benennung von Themen unterliegt einer händischen Bewertung. Zur Vorgehensweise siehe FAQ unter “Wie wurde dabei vorgegangen?” Punkt 4.


        </DefaultListItem>
        <DefaultListItem>
        Die Anzahl an Topics (400) die das LDA Topic Model identifiziert ist manuell gewählt.

        </DefaultListItem>
        <DefaultListItem>
        Spezifische Stopwords die dem Modell vorenthalten nehmen Einfluss auf die identifizierten Topics. Die vollständige Liste ist{" "}
            <NextChakraLink
              color="pink.500"
              href="https://opendiscourse-diskursanalyse.s3.eu-central-1.amazonaws.com/master_stopwords.xlsx"
              isExternal
            >
              hier <ExternalLinkIcon mx="2px" />
            </NextChakraLink> einsehbar.

        </DefaultListItem>
        <DefaultListItem>
        Das Modell analysiert Worthäufigkeiten und Zusammenhänge. Dabei wird die Satzstruktur jedoch nicht Modelliert, lediglich das{" "}
            <NextChakraLink
              color="pink.500"
              href="https://en.wikipedia.org/wiki/Bag-of-words_model"
              isExternal
            >
              Bag-of-Words <ExternalLinkIcon mx="2px" />
            </NextChakraLink>.

        </DefaultListItem>
      </UnorderedList>
      <DefaultText>
        Zusätzlich haben wir alle Politiker*Innen aus dieser Liste entfernt,
        die unter 30 Reden gehalten haben. Als Ergebnis stehen nun 270
        Politiker*Innen zur Auswahl.
      </DefaultText>
    </>
  </FaqAccordionItem>
  );
};
