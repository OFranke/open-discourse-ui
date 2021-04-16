import DefaultText from "@bit/limebit.limebit-ui.default-text";
import NextChakraLink from "@bit/limebit.limebit-ui.next-chakra-link";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FaqAccordionItem } from "./faq-accordion-item";
import { OrderedList } from "@chakra-ui/react";
import { DefaultListItem } from "../../default-list-item";

export const Question4 = () => {
  return (
    <FaqAccordionItem headline="Warum gibt es eine/n spezielle/n Politiker*In nicht zur Auswahl?">
      <>
        <DefaultText>
          Um die Visualisierungen zuverlässig auf dieser Website zu ermöglichen,
          mussten wir uns auf eine Teilmenge der über 4000 Politiker*Innen im
          Open Discourse Datensatz beschränken. Dabei haben wir folgende Auswahl
          getroffen:
        </DefaultText>
        <OrderedList marginLeft={{ base: 10, md: 14, lg: 20, xl: 28 }}>
          <DefaultListItem>
            Alle Minister*Innen und Kanzler*Innen seit der 14. Legislaturperiode
            (26.10.1998)
          </DefaultListItem>
          <DefaultListItem>
            Alle Oppositionsführer*Innen seit 1949 basierend auf dieser{" "}
            <NextChakraLink
              color="pink.500"
              href="https://de.wikipedia.org/wiki/Fraktionsvorsitzender"
              isExternal
            >
              Auflistung bei Wikipedia <ExternalLinkIcon mx="2px" />
            </NextChakraLink>
          </DefaultListItem>
          <DefaultListItem>
            Die zweihundert Politiker*Innen mit den meisten Followern bei
            Twitter basierend auf dieser{" "}
            <NextChakraLink
              color="pink.500"
              href="https://twitter.com/i/lists/912241909002833921"
              isExternal
            >
              Twitter-Liste <ExternalLinkIcon mx="2px" />
            </NextChakraLink>
          </DefaultListItem>
        </OrderedList>
        <DefaultText>
          Zusätzlich haben wir alle Politiker*Innen aus dieser Liste entfernt,
          die unter 30 Reden gehalten haben. Als Ergebnis stehen nun 261
          Politiker*Innen zur Auswahl.
        </DefaultText>
      </>
    </FaqAccordionItem>
  );
};
