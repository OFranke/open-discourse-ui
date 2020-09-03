
import { BaseTemplate } from "../../templates/base-template";
import { Heading, Image, Text } from "@chakra-ui/core";
import React from "react";

export const About: React.FC = () => {
  return (
    <BaseTemplate>
      <Heading as="h1">Wir sind Limebit</Heading>
      <Image
        src="/assets/wir_sind_limebit.png"
        alt="Limebit Team"
        width="100%"
      />
      <Text>
        Open Discourse ist ein Projekt der Limebit GmbH. Die Plattform ist unser
        Beitrag zur Demokratisierung des Zugangs politischer Themen. Entstanden
        ist das Projekt aus den Fähigkeiten und Motivationen unser
        MitarbeiterInnen. Außerdem ist die Initiative komplett selbst finanziert
        und unabhängig.
      </Text>
      <Text>
        Der Deutsche Bundestag ist das parlamentarische Herz unserer Demokratie.
        In unserem Grundgesetz ist festgeschrieben, dass der Bundestag
        öffentlich verhandelt soll. So wird seit 1949 für jede Plenarsitzung ein
        stenografischer Bericht angefertigt, der jedes gesagte Wort der Sitzung
        dokumentiert. Diese Protokolle liegen nun alle auf den Servern des
        Bundestages und sind öffentlich abrufbar. Das Format der Protokolle ist
        allerdings nicht für eine sinnvolle Datenverarbeitung im 21. Jahrhundert
        geeignet.
      </Text>
      <Text>
        Hier haben wir uns zur Aufgabe gemacht, die im Grundgesetz definierte
        Öffentlichkeit des Bundestages durch moderne Wege der Datenverarbeitung
        wieder herzustellen, um jeder Bürgerin und jedem Bürger die Möglichkeit
        zu geben, den politischen Diskurs zu verfolgen und zu untersuchen.
      </Text>
      <Text>
        Als privatwirtschaftliches Unternehmen können wir Open Discourse
        selbstständig finanzieren und sind daher unabhängig von externen
        Mitteln. Dies ermöglicht uns interessenbasierte Forschung und freies
        Handeln. Auch unsere Überzeugung öffentliches Wissen durch offene Daten
        zu unterstützen spiegelt sich in unserem Projekt wieder. Open Discourse
        ist ein Herzensprojekt der Limebit GmbH - From 030 with ♡
      </Text>
      <Text>
        Falls ihr Feedback habt oder Open Discourse mit spannenden Ideen
        unterstützen wollt, kontaktiert uns immer gerne. Wir freuen uns auf
        euch!
      </Text>
      <Heading as="h2">Unsere Motivation</Heading>
      <Text>
        Der deutsche Bundestag - unser hohes Haus - ist das parlamentarische
        Herz unserer Demokratie. Im Grundgesetz ist definiert, dass der
        Bundestag öffentlich verhandelt und dass die Abgeordneten die
        Vertreter_Innen des gesamten Volkes sind. Seit 1949 wird für jede
        Plenarsitzung ein stenografischer Bericht angefertigt, der jedes gesagte
        Wort der Sitzung dokumentiert. Diese Protokolle liegen nun alle auf den
        Servern des Bundestages und sind öffentlich abrufbar, allerdings ist das
        Format der Protokolle nicht für eine sinnvolle Datenverarbeitung im 21.
        Jahrhundert geeignet.
      </Text>
      <Text>
        Hier haben wir uns zur Aufgabe gemacht, die im Grundgesetz definierte
        Öffentlichkeit des Bundestages durch moderne Wege der Datenverarbeitung
        wieder herzustellen, um jeder Bürgerin und jedem Bürger die Möglichkeit
        zu geben, den politischen Diskurs zu verfolgen und zu untersuchen.
      </Text>
      <Text>
        Open Discourse ist die Verlängerung des Versprechens am
        Reichstagsgebäude “Dem deutschen Volke”.
      </Text>
    </BaseTemplate>
  );
};
