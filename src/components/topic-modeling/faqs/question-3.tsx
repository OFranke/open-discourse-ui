import DefaultText from "@bit/limebit.limebit-ui.default-text";
import { FaqAccordionItem } from "./faq-accordion-item";
import { ReactTable } from "@bit/limebit.chakra-ui-recipes.react-table";
import NextChakraLink from "@bit/limebit.limebit-ui.next-chakra-link";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export const Question3 = () => {
  return (
    <FaqAccordionItem headline="Wie funktionieren die Filter?">
      <>
        <DefaultText>
          Durch die Zusatzinformationen des Open Discourse Datensatzes können
          detaillierte Filter genutzt werden, um Teilgruppen des Bundestages zu
          vergleichen. Folgende Filter sind verfügbar:
        </DefaultText>
        <ReactTable
          columns={[
            { Header: "Filter", accessor: "filter" },
            { Header: "Beschreibung", accessor: "description" },
          ]}
          data={[
            {
              filter: "Geschlecht",
              description:
                "Geschlecht der Sprecher*In auf Grundlage der Stammdaten des Deutschen Bundestages",
            },
            {
              filter: "Alter",
              description:
                "Alter der Sprecher*In zum Zeitpunkt der Rede. Geteilt in über 50 und unter 50 Jahre (Durchschnittsalter des Bundestages)",
            },
            {
              filter: "Partei",
              description: "Parteimitgliedschaft zum Zeitpunkt der Rede",
            },
            {
              filter: "Beruflicher Hintergrund",
              description:
                "Berufsgruppe der Politiker*In auf Grundlage der Stammdaten. Für mehr Informationen siehe den Link unten.",
            },
            {
              filter: "Wahlbundesland",
              description:
                "Bundesland über welches die Politiker*In eingezogen ist, geteilt in Neue und Alte Bundesländer. Für mehr Informationen siehe den Link unten.",
            },
          ]}
          pageSize={10}
          colors={{ evenColor: "gray.200", tableHeadColor: "gray.200" }}
        />
        <DefaultText>
          Diese Filter können beliebig kombiniert werden. Ein Beispiel für
          komplexe Filter ist{" "}<NextChakraLink
                color="pink.500"
                href="/diskursanalyse?filters=%5B%7B%22filterId%22%3A%22799st%22%2C%22color%22%3A%22%23212529%22%2C%22actor%22%3A%22party_0%22%2C%22age%22%3Anull%2C%22state%22%3Anull%2C%22gender%22%3Anull%2C%22job%22%3Anull%2C%22topics%22%3A%22topic_37%22%7D%2C%7B%22filterId%22%3A%22a8f14%22%2C%22color%22%3A%22%23ff0a54%22%2C%22actor%22%3A%22party_1%22%2C%22age%22%3Anull%2C%22state%22%3Anull%2C%22gender%22%3Anull%2C%22job%22%3Anull%2C%22topics%22%3A%22topic_37%22%7D%2C%7B%22filterId%22%3A%22cl2m3%22%2C%22color%22%3A%22%23ffed00%22%2C%22actor%22%3A%22party_2%22%2C%22age%22%3Anull%2C%22state%22%3Anull%2C%22gender%22%3Anull%2C%22job%22%3Anull%2C%22topics%22%3A%22topic_37%22%7D%2C%7B%22filterId%22%3A%22mmyfd%22%2C%22color%22%3A%22%2346962b%22%2C%22actor%22%3A%22party_3%22%2C%22age%22%3Anull%2C%22state%22%3Anull%2C%22gender%22%3Anull%2C%22job%22%3Anull%2C%22topics%22%3A%22topic_37%22%7D%2C%7B%22filterId%22%3A%222w9x0%22%2C%22color%22%3A%22%23dadaeb%22%2C%22actor%22%3A%22party_4%22%2C%22age%22%3Anull%2C%22state%22%3Anull%2C%22gender%22%3Anull%2C%22job%22%3Anull%2C%22topics%22%3A%22topic_37%22%7D%5D"
                isExternal
              >
                hier <ExternalLinkIcon mx="2px" />
              </NextChakraLink> zu finden. Weitere Informationen zum beruflichen Hintergrund von Politiker:innen sind DefaultText>
          Diese Filter können beliebig kombiniert werden. Ein Beispiel für
          komplexe Filter ist{" "}<NextChakraLink
                color="pink.500"
                href="https://open-discourse.github.io/open-discourse-documentation/1.0.0/jobs.html"
                isExternal
              >
                hier <ExternalLinkIcon mx="2px" />
              </NextChakraLink> zu finden, Informationen zum Wahlbundesland sind DefaultText>
          Diese Filter können beliebig kombiniert werden. Ein Beispiel für
          komplexe Filter ist{" "}<NextChakraLink
                color="pink.500"
                href="https://open-discourse.github.io/open-discourse-documentation/1.0.0/state-affiliation-wahlbundesland.html"
                isExternal
              >
                hier <ExternalLinkIcon mx="2px" />
              </NextChakraLink> zu finden.
        </DefaultText>
      </>
    </FaqAccordionItem>
  );
};


