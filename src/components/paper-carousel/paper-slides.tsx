import { Box } from "@chakra-ui/react";
import { ColoredSubline } from "@bit/limebit.limebit-ui.colored-subline";
import { DefaultText } from "@bit/limebit.limebit-ui.default-text";
import styles from "./styles.module.css";

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
      <ColoredSubline as="h2" backgroundColor="pink.500">
        Wie wir mittels Data Science die letzten 78 Jahre analysieren.
      </ColoredSubline>
      <DefaultText>
        Mit der Plattform Open Discourse machen wir den politischen Diskurs seit
        1949 sichtbar - und zwar für Mensch und Maschine. Es ist ein internes
        Forschungsprojekt, das uns besonders am Herzen liegt.
      </DefaultText>
      <ColoredSubline as="h2" backgroundColor="pink.500">
        Problemstellung
      </ColoredSubline>
      <DefaultText>
        Die Plenarprotokolle des Deutschen Bundestages liegen teilweise
        digitalisiert, aber nicht maschinenlesbar vor. Sie sind aus historischer
        und politikwissenschaftlicher Sicht eine wertvolle Quelle und bergen
        viele Informationen zur Entwicklung des politischen Diskurses in
        Deutschland. Um die Daten auswerten und veröffentlichen zu können, ist
        eine spezielle Aufbereitung erforderlich.
      </DefaultText>
    </SlideWrapper>
  );
};

export const Slide2: React.FC = () => {
  return (
    <SlideWrapper>
      <ColoredSubline as="h2" backgroundColor="pink.500">
        FOM ist cool
      </ColoredSubline>
      <DefaultText>
        Mit der Plattform Open Discourse machen wir den politischen Diskurs seit
        1949 sichtbar - und zwar für Mensch und Maschine. Es ist ein internes
        Forschungsprojekt, das uns besonders am Herzen liegt.
      </DefaultText>
      <ColoredSubline as="h2" backgroundColor="pink.500">
        Problemstellung
      </ColoredSubline>
      <DefaultText>
        Die Plenarprotokolle des Deutschen Bundestages liegen teilweise
        digitalisiert, aber nicht maschinenlesbar vor. Sie sind aus historischer
        und politikwissenschaftlicher Sicht eine wertvolle Quelle und bergen
        viele Informationen zur Entwicklung des politischen Diskurses in
        Deutschland. Um die Daten auswerten und veröffentlichen zu können, ist
        eine spezielle Aufbereitung erforderlich.
      </DefaultText>
    </SlideWrapper>
  );
};
