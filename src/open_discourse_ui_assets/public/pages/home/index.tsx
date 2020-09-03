
import { BaseTemplate } from "../../templates/base-template";
import { Heading, Image, Flex, Stack, Text } from "@chakra-ui/core";
import React from "react";

export const Home: React.FC = () => {
  return (
    <BaseTemplate>
      <Stack spacing="5">
        <Stack
          direction="row"
          spacing="3"
          marginX="-1.5rem"
          marginTop="-1.5rem"
          backgroundColor="gray.200"
        >
          <Image
            src="/reichstagsgebaeude.png"
            alt="Reichstagsgebäude"
            width="50%"
          />
          <Stack padding="2rem">
            <Heading as="h1" size="xl">
              Um was geht es bei OD?
            </Heading>
            <Text fontSize="l">
              Seit 1949 wird jedes gesprochene Wort im Bundestag protokolliert,
              aber was geschieht eigentlich mit den Protokollen sobald sie
              archiviert wurden? In den letzten 70 Jahren Bundestag wurden diese
              Protokolle tatsächlich kaum analysiert, da der Großteil nicht
              maschinell auswertbar ist. Open Discourse hat nun alle
              Plenarprotokolle maschinenlesbar gemacht und darüber hinaus mit
              Metainformation in eine Datenbank überführt. Da nicht nur die
              Redebeiträge in den Protokollen festgehalten werden sondern auch
              die Reaktionen einzelner PolitikerInnen oder Fraktionen, können
              auch diese ausgewertet werden. Somit ermöglicht Open Discourse
              umfassende Analysen der Sprache und Reaktionen des Bundestags von
              1949 bis heute und holt so den politischen Diskurs ins 21.
              Jahrhundert. Mittels moderner Methoden aus Deep-und Machine
              Learning können die Protokolle nun auf Muster untersucht werden
              und so die Debatten für die Allgemeinheit zugänglich machen.
            </Text>
          </Stack>
        </Stack>
        <Heading as="h2" size="lg">
          Auswertungen
        </Heading>
        <Text>
          Hier sind einige Analysen die wir oder Unterstützer_Innen von uns
          angefertigt haben.
        </Text>
        <Image
          src="/images/wer_kommt_zu_wort.png"
          alt="Wer kommt zu Wort - Männer oder Frauen?"
          width="100%"
        />
        <Image
          src="/images/umfang_verschiedener_plenarprotokoll_korpora.png"
          alt="Umfang verschiedener Plenarprotokoll-Korpora"
          width="100%"
        />
        <Heading as="h2" size="lg">
          Warum ist OD relevant?
        </Heading>
        <Text>
          OpenDiscourse macht die Protokolle des Deutschen Bundestages
          maschinenlesbar, es lassen sich also Analysen durchführen, die vorher
          nicht möglich waren. Das klingt ganz schön theoretisch. Es ist aber
          für jeden interessant, der sich für Politik in Deutschland
          interessiert.
        </Text>
        <Text>
          In seiner über 70 jährigen Geschichte war der Bundestag immer eins:
          Ein Ort der lebhaften Debatte. Egal ob Grundsätzliches oder
          Tagesaktuelles, ziemlich jedes Thema wurde besprochen, kritisiert oder
          beklatscht. Praktisch alle Dinge in der täglichen Lebenswelt haben
          eine politische Dimension, insbesondere eine bundespolitische.
        </Text>
        <Text>
          Mit Open Discourse wird für jede_n Bürger_in das transparent: Welche
          Themen werden vorrangig debattiert, von was hört man weniger? Wer
          redet wie über was? Und welche Parteien oder Personen fallen dabei
          besonders auf - durch Redebeiträge, Applaus oder Zwischenrufe? Die
          interaktive Plattform gibt allen unabhängig von technischem know-how
          Zugang zu der Datenbank und ermöglicht einzigartige Einblicke in die
          Herzkammer der Politik in Deutschland. Darüber hinaus stellen wir den
          gesamten Datensatz offen zur Verfügung. So kann jeder den politischen
          Diskurs nachverfolgen und untersuchen.
        </Text>
        <Heading as="h2" size="lg">
          Wer sind wir? Warum machen wir das?
        </Heading>
        <Text>
          Open Discourse ist ein Projekt der Limebit GmbH. Die Plattform ist
          unser Beitrag zur Demokratisierung des Zugangs politischer Themen.
          Entstanden ist das Projekt aus den Fähigkeiten und Motivationen unser
          MitarbeiterInnen. Außerdem ist die Initiative komplett selbst
          finanziert und unabhängig.
        </Text>
        <Text>
          Der Deutsche Bundestag ist das parlamentarische Herz unserer
          Demokratie. In unserem Grundgesetz ist festgeschrieben, dass der
          Bundestag öffentlich verhandelt soll. So wird seit 1949 für jede
          Plenarsitzung ein stenografischer Bericht angefertigt, der jedes
          gesagte Wort der Sitzung dokumentiert. Diese Protokolle liegen nun
          alle auf den Servern des Bundestages und sind öffentlich abrufbar. Das
          Format der Protokolle ist allerdings nicht für eine sinnvolle
          Datenverarbeitung im 21. Jahrhundert geeignet.
        </Text>
        <Text>
          Hier haben wir uns zur Aufgabe gemacht, die im Grundgesetz definierte
          Öffentlichkeit des Bundestages durch moderne Wege der
          Datenverarbeitung wieder herzustellen, um jeder Bürgerin und jedem
          Bürger die Möglichkeit zu geben, den politischen Diskurs zu verfolgen
          und zu untersuchen.
        </Text>
        <Text>
          Als privatwirtschaftliches Unternehmen können wir Open Discourse
          selbstständig finanzieren und sind daher unabhängig von externen
          Mitteln. Dies ermöglicht uns interessenbasierte Forschung und freies
          Handeln. Auch unsere Überzeugung öffentliches Wissen durch offene
          Daten zu unterstützen spiegelt sich in unserem Projekt wieder. Open
          Discourse ist ein Herzensprojekt der Limebit GmbH - From 030 with ♡
        </Text>
        <Text>
          Falls ihr Feedback habt oder Open Discourse mit spannenden Ideen
          unterstützen wollt, kontaktiert uns immer gerne. Wir freuen uns auf
          euch!
        </Text>
      </Stack>
    </BaseTemplate>
  );
};
