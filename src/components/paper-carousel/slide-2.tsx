import { BoxProps, Box } from "@chakra-ui/react";
import { ColoredSubline } from "../colored-subline";
import { DefaultText } from "../default-text";
export const Slide2: React.FC<BoxProps> = ({ ...props }) => {
  return (
    <Box {...props}>
      <ColoredSubline as="h2" backgroundColor="pink.500">
        Bayer ist cool
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
    </Box>
  );
};
