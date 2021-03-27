import DefaultText from "@bit/limebit.limebit-ui.default-text";
import { FaqAccordionItem } from "./faq-accordion-item";
import { ReactTable } from "@bit/limebit.chakra-ui-recipes.react-table";

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
                "Berufsgruppe der Politiker*In auf Grundlage der Stammdaten. Mehr Informationen zur Zuordnung sind hier zu finden.",
            },
            {
              filter: "Wahlbundesland",
              description:
                "Bundesland über welches die Politiker*In eingezogen ist, geteilt in Neue und Alte Bundesländer. Mehr Informationen sind hier zu finden.",
            },
          ]}
          pageSize={10}
          colors={{ evenColor: "gray.200", tableHeadColor: "gray.200" }}
        />
        <DefaultText>
          Diese Filter können beliebig kombiniert werden. Ein Beispiel für
          komplexe Filter ist hier zu finden.
        </DefaultText>
      </>
    </FaqAccordionItem>
  );
};
