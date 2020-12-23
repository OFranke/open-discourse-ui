import { Box, OrderedList, UnorderedList, Flex } from "@chakra-ui/react";
import { ColoredSubline } from "@bit/limebit.limebit-ui.colored-subline";
import { DefaultText } from "@bit/limebit.limebit-ui.default-text";
import styles from "./styles.module.css";
import React from "react";
import { DefaultHeadline } from "@bit/limebit.limebit-ui.default-headline";
import { DefaultListItem } from "../default-list-item";
import { NextChakraLink } from "@bit/limebit.limebit-ui.next-chakra-link";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { NextButtonLink } from "@bit/limebit.limebit-ui.next-button-link";
import ReactPlayer from "react-player/lazy";
import { YoutubeVideo } from "../youtube-video";
const SlideWrapper: React.FC = ({ children }) => {
  return (
    <Box
      className={styles.shadowed}
      marginTop={{ base: 10, md: 14, lg: 0 }}
      paddingX={{ base: 4, md: 10, xl: 24 }}
      paddingY={{ base: 6, md: 14, xl: 40 }}
      backgroundImage="linear-gradient(rgba(255, 255, 255, 1), rgba(247, 250, 252, 1))"
    >
      {children}
    </Box>
  );
};

export const Slide1: React.FC = () => {
  return (
    <SlideWrapper>
      <DefaultHeadline size="s">ZDFHeute</DefaultHeadline>
      <ColoredSubline as="h3" backgroundColor="pink.500">
        Datenjournalismus zum Stichwort “Pandemie”
      </ColoredSubline>
      <DefaultText>
        Im Juni 2020 wurde bereits ein Datenjournalist von ZDFheute auf Open
        Discourse aufmerksam und bekam eine vorläufige Version des Datensatzes
        zur Verfügung gestellt.
      </DefaultText>
      <DefaultText>
        Das Team hinter ZDFheute untersuchte die Plenarprotokolle des Deutschen
        Bundestages auf Basis unseres Datensatzes und ermittelte inwiefern sich
        Politiker_Innen des Bundestages seit dem Jahr 1949 mit dem Stichwort
        “Pandemie” auseinandergesetzt haben.
      </DefaultText>
      <ColoredSubline as="h3" backgroundColor="pink.500">
        Open Discourse in den nationalen Medien
      </ColoredSubline>
      <DefaultText>
        Lesen Sie hier den gesamten Artikel und erfahren Sie, wie im Plenum des
        Bundestages laut der Datenanalyse zu wenig über Pandemien debattiert
        wurde.
      </DefaultText>
      <NextButtonLink
        colorScheme="pink"
        isExternal
        href="https://zdfheute-stories-scroll.zdf.de/bundestag-corona-pandemie/#CS5-62"
        marginTop={{
          base: "4",
          md: "4",
          lg: "6",
          xl: "8",
        }}
      >
        Zum Artikel
      </NextButtonLink>
    </SlideWrapper>
  );
};

export const Slide2: React.FC = () => {
  return (
    <SlideWrapper>
      <DefaultHeadline size="s">Chaos Computer Club</DefaultHeadline>
      <ColoredSubline as="h3" backgroundColor="pink.500">
        Open Discourse beim rC3 – der Remote Chaos Experience
      </ColoredSubline>
      <DefaultText>
        Im Rahmen des diesjährigen Chaos Computer Club Events werden wir das
        Projekt Open Discourse vorstellen.
      </DefaultText>
      <DefaultText>
        In Kürze finden Sie hier die Aufzeichnung unseres Vortrages :)
      </DefaultText>

      <Box height={{ base: "200px", md: "500px" }} />

      {/* <Flex justifyContent="center">
        <YoutubeVideo url="https://www.youtube.com/watch?v=bJBkZQ1xeA0" />
      </Flex> */}
    </SlideWrapper>
  );
};
export const Slide3: React.FC = () => {
  return (
    <SlideWrapper>
      <DefaultHeadline size="s">Akademische Forschungsarbeiten</DefaultHeadline>
      <ColoredSubline as="h3" backgroundColor="pink.500">
        Eignung für die Verwendung in Universitätsprojekten
      </ColoredSubline>
      <DefaultText>
        Die Rohdaten des Open Discourse Korpus bilden bereits die Grundlage für
        Analyse des Diskurs über SARS-CoV-2 und Seniorenpflege bzw. -schutz im
        Deutschen Bundestag, der Untersuchung von Repräsentationshandeln
        Abgeordneter im parlamentarischen Alltag oder zur Generierung
        hypothetischer Reden einzelner Politikerinnen.
      </DefaultText>
      <ColoredSubline as="h3" backgroundColor="pink.500">
        FOM - Big data Analytics
      </ColoredSubline>
      <DefaultText>
        Die Masterstudierenden des 3.Semesters in "Big Data Analytics" nutzten
        die Daten für ein Lehrforschungsprojekt der FOM und generierten mittels
        Generative Adversarial Networks (GAN) hypothetische Reden.
        <br />
        Aus dem Abstract der Seminararbeit “Automatisierte Generierung
        politischer Reden auf Basis eines deutschsprachigen Korpus “ von Michael
        Schwabe, Louis Matheoschat, Florian Lorisch und Paul Abisch:
      </DefaultText>
      <DefaultText>
        Die automatisierte Generierung von Texten mithilfe von Natural Language
        (NLG) Technologien, wird bereits in Bereichen wie Marketing und im
        Kundenservice eingesetzt, wie beispielsweise bei der Umsetzung
        interaktiver Dialogsysteme. Die Fähigkeit Text zu synthetisieren bietet
        darüber hinaus Potential für die Erschließung weiterer Anwendungsfelder.
        Ausgehend von vergleichbaren Arbeiten im englischsprachigen Raum werden
        mit dieser Arbeit unterschiedliche Sprachmodelle zur automatisierten
        Generierung politischer Reden in deutscher Sprache erprobt und
        verglichen. Der Fokus liegt auf einem Markov-Modell, unterschiedlichen
        LSTM-Architekturen sowie den Transformerarichtekturen BERT und GPT-2.
        Als Datensatz (Korpus) für das Training und Finetuning der Modelle
        werden, die durch das Open Discourse Projekt aufbereiteten
        Plenarprotokolle des deutschen Bundestags verwendet. Im Ergebnis wird
        deutlich, dass sich die Performanz, die durch englische Sprachmodelle
        erreicht werden, nicht ohne weiteres auf Basis eines deutschen Korpus
        replizieren lassen. Die Arbeit dient als Ausgangspunkt für weitere
        Forschungsprojekte zur Generierung politischer Reden in deutscher
        Sprache. Dabei sollte insbesondere die Verwendung von
        Transformerarchitekturen näher betrachtet werden.
      </DefaultText>
      <DefaultText marginBottom="0">Autoren:</DefaultText>
      <UnorderedList listStyleType="none" margin="0">
        <DefaultListItem marginBottom="0">
          <NextChakraLink
            isExternal
            color="pink.500"
            href="https://www.linkedin.com/in/florianlorisch/"
          >
            Florian M. Lorisch <ExternalLinkIcon mx="2px" />
          </NextChakraLink>
        </DefaultListItem>
        <DefaultListItem marginBottom="0">
          <NextChakraLink
            isExternal
            color="pink.500"
            href="https://www.linkedin.com/in/michael-s-a911a1164/"
          >
            Michael Schwabe <ExternalLinkIcon mx="2px" />
          </NextChakraLink>
        </DefaultListItem>
        <DefaultListItem marginBottom="0">
          <NextChakraLink
            isExternal
            color="pink.500"
            href="https://www.linkedin.com/in/louis-m-47227516a/"
          >
            Michael Schwabe <ExternalLinkIcon mx="2px" />
          </NextChakraLink>
        </DefaultListItem>
        <DefaultListItem marginBottom="0">
          <NextChakraLink
            isExternal
            color="pink.500"
            href="https://www.linkedin.com/in/paul-abisch-840503191/"
          >
            Paul Abisch <ExternalLinkIcon mx="2px" />
          </NextChakraLink>
        </DefaultListItem>
      </UnorderedList>

      <NextButtonLink
        colorScheme="pink"
        isExternal
        href="/papers/Automatisierte_Generierung_politischer_Reden_auf_Basis_eines_deutschsprachigen_Korpus.pdf"
        marginTop={{
          base: "4",
          md: "4",
          lg: "6",
          xl: "8",
        }}
      >
        Zum Paper
      </NextButtonLink>
    </SlideWrapper>
  );
};

export const Slide4: React.FC = () => {
  return (
    <SlideWrapper>
      <DefaultHeadline size="s">CorrelAid</DefaultHeadline>
      <ColoredSubline as="h3" backgroundColor="pink.500">
        Datenbasiertes Storytelling
      </ColoredSubline>
      <DefaultText>
        <NextChakraLink
          isExternal
          color="pink.500"
          href="https://correlaid.org/"
        >
          CorrelAid <ExternalLinkIcon mx="2px" />
        </NextChakraLink>{" "}
        ist ein gemeinnütziges Netzwerk von Data Scientists, die die Welt durch
        Data Science zum Positiven verändern wollen. Ziel der Zusammenarbeit mit
        unserem Projekt ist es, NLP-Techniken auf den Datensatz anzuwenden und
        Einblicke zu gewinnen, worüber die deutschen Abgeordneten seit der
        Gründung des Bundestages gesprochen haben.
      </DefaultText>
      <ColoredSubline as="h2" backgroundColor="pink.500">
        Über Natural language Processing zu geschichtlichen Erkenntnissen
      </ColoredSubline>
      <DefaultText>
        Im Sommer 2020 haben sich 8 ehrenamtliche Data Scientists mit dem
        Datensatz auseinandergesetzt. Untersucht wurde inwiefern sich Debatten
        im Bundestag verändert haben und ob Diskursverschiebungungen in
        geschichtlichen Zusammenhängen stehen.
      </DefaultText>
      <DefaultText>
        In der Arbeit mit dem Datensatz hat sich das Team folgende Ziele
        gesetzt:
      </DefaultText>
      <OrderedList marginLeft={{ base: 10, md: 14, lg: 20, xl: 28 }}>
        <DefaultListItem>mehr über angewandtes NLP erfahren</DefaultListItem>
        <DefaultListItem>
          kreative Wege finden, um die Daten zu analysieren und zu visualisieren
        </DefaultListItem>
      </OrderedList>

      <DefaultText>
        Das genaue Ziel, d. H. der Fokus der Analyse, wurde innerhalb der beiden
        Untergruppen entwickelt. Das Ergebnis sollte sich primär nicht auf ein
        politikwissenschaftlichen Ansatz konzentrieren, sondern interessante
        oder unterhaltsame Muster in der Historie finden, die eine Geschichte
        erzählen wie sich Politik und Gesellschaft im Laufe der Jahre verändert
        haben.
        <br />
        <b>
          Auf der CorrelCon-Tagung im November wurde bereits ein Ergebnis
          vorgestellt:
        </b>
      </DefaultText>
      <Flex justifyContent="center" paddingTop={{ base: 0, md: 4, lg: 10 }}>
        <YoutubeVideo url="https://www.youtube.com/watch?v=bJBkZQ1xeA0" />
      </Flex>
    </SlideWrapper>
  );
};
