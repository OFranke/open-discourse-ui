import { BaseTemplate } from "../templates/base-template";
import { Image } from "@chakra-ui/react";
import { FullTextSearch } from "../components/full-text-search";
import { DefaultContainer } from "@bit/limebit.limebit-ui.default-container";
import { ColoredSubline } from "@bit/limebit.limebit-ui.colored-subline";
import { Section } from "@bit/limebit.limebit-ui.section";
import { DefaultHeadline } from "@bit/limebit.limebit-ui.default-headline";
import { DefaultText } from "@bit/limebit.limebit-ui.default-text";
import { Callout } from "../components/callout";
import { DefaultButton } from "@bit/limebit.limebit-ui.default-button";

const Search: React.FC = () => {
  return (
    <BaseTemplate>
      <Section>
        <Image
          src={"/images/reichstagsgebaeude.png"}
          alt={"Bundestag"}
          css={{ objectFit: "cover" }}
          width="100%"
          height="500px"
          quality="75"
        />
      </Section>
      <Section display="flex" flexDirection="column">
        <DefaultContainer size="l">
          <DefaultHeadline size="s">Volltextsuche</DefaultHeadline>
          <ColoredSubline backgroundColor="pink.500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            sit.
          </ColoredSubline>
          <DefaultText>
            Mit der Volltextsuche können Sie alle verfügbaren Plenarprotokollen
            durchsuchen und die Redebeiträgen unserer PolitikerInnen nach
            Stichwörtern durchstöbern.
          </DefaultText>
          <Callout
            calloutText="Im Positionsfeld kann entweder eine Partei oder ein Amt ausgewählt
        werden. Es müssen nicht alle Felder ausgefüllt sein, um ein Suchergebnis
        zu erhalten."
          />
          <DefaultText>
            In Übereinstimmung Ihren Filtereinstellungen werden Ihnen die
            gefilterten Redebeiträge der Politiker_Innen angezeigt, das
            dazugehörige Datum, die URL zum Originalprotokoll und der
            spezifische Redebeitrag.
          </DefaultText>
        </DefaultContainer>
      </Section>
      <Section display="flex" flexDirection="column">
        <DefaultContainer size="l">
          <FullTextSearch />
        </DefaultContainer>
      </Section>
      <Section>
        <Image
          src={"/images/reichstagsgebaeude.png"}
          alt={"Bundestag"}
          css={{ objectFit: "cover" }}
          width="100%"
          height="500px"
          quality="75"
        />
      </Section>
      <Section display="flex" flexDirection="column">
        <DefaultContainer size="l">
          <DefaultHeadline size="s">Datenzugriff</DefaultHeadline>
          <ColoredSubline backgroundColor="pink.500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            sit.
          </ColoredSubline>
          <DefaultText>
            Du möchtest den Datensatz für eine eigene Analyse nutzen oder willst
            ihn einfach eigenständig durchstöbern?
            <br />
            <br />
            Wir stellen unsere aufbereitete Datenbank* an dieser Stelle open
            source zur Verfügung und geben die Nutzung, Weiterverwendung und
            Weiterverbreitung frei. Wir würden uns freuen, wenn ihr bei Nutzung
            des Datensatzes unser Data Paper zitiert:
            <br />
            <br />
            Zitierweise, 2019, blablabla, hier und da SozArxiv und so shit
            dummy-zitierweise hihi Wir arbeiten gerade an einer detaillierte
            Dokumentation über die Daten befindet sich (Preprint) Publikation
            “Open Discourse - The first fully Comprehensive Corpus of the
            parliamentary Protocols of the German Bundestag” mit der DOI:
            93z65.03792.2.3. Unser Ziel soll sein, dass dieser Datensatz für
            wissenschaftliche Zwecke gebraucht werden kann.
            <br />
            <br />
            Ihr findet die Rohdaten bzw. die Datenbank und ein Codebook zu den
            einzelnen Datenbanktabellen und Variablen außerdem im Harvard
            Dataverse. (Link).
            <br />
            <br />
            Die Datenbank befindet sich momentan in Version 1 und soll zukünftig
            weiter verbessert und um neue Plenarprotokolle erweitert werden.
          </DefaultText>
          <DefaultButton colorScheme="pink" marginTop="20px">
            Download
          </DefaultButton>
        </DefaultContainer>
      </Section>
    </BaseTemplate>
  );
};

export default Search;
