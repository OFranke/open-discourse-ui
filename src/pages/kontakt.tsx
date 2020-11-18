import { BaseTemplate } from "../templates/base-template";
import React from "react";
import { DefaultContainer } from "../components/default-container";
import { ColoredSubline } from "../components/colored-subline";
import { Section } from "../components/section";
import { DefaultHeadline } from "../components/default-headline";
import { DefaultText } from "../components/default-text";
import Image from "next/image";
import { Quote } from "../components/quote";
import { ContactForm } from "../components/contact-form";

const Home: React.FC = () => {
  return (
    <BaseTemplate>
      <Section id="wir-sind-open-discourse">
        <DefaultContainer size="l">
          <DefaultHeadline size="s">Wir sind Open Discourse</DefaultHeadline>
          <ColoredSubline backgroundColor="pink.500">
            Lorem ipsum dolor sit amet consetetur. Lorem ipsum dolor sit amet.
          </ColoredSubline>
          <DefaultText>
            Open Discourse ist ein Projekt der Limebit GmbH. Die Plattform ist
            unser Beitrag zur Demokratisierung des Zugangs zu politischen
            Debatten und Themen. Entstanden ist das Projekt aus den Fähigkeiten
            und Motivationen unser Mitarbeiter_Innen. Außerdem ist die
            Initiative komplett selbstfinanziert und unabhängig.
          </DefaultText>
        </DefaultContainer>
      </Section>
      <Section as="div" backgroundColor="pink.500">
        <Image
          src={"/images/sample/team_outside.png"}
          alt={"Team draußen"}
          layout="responsive"
          width="1440px"
          height="700px"
          quality="75"
        />
        <DefaultContainer size="l">
          <Quote
            text="Unsere Mission ist es, Daten, und Menschen verbinden. Denn die Welt ist voller Daten, überall verborgene Erkenntnisse. Wir analysieren, interpretieren, optimieren, beraten, entwickeln und machen aus verborgenen Informationen sichtbare Lösungen."
            author="Florian Richter"
            authorSubtext="Initiator von Open Discourse"
          />
        </DefaultContainer>
      </Section>
      <Section id="unabhaengigkeitserklaerung">
        <DefaultContainer size="l">
          <ColoredSubline backgroundColor="#D8D8D8">
            Lorem ipsum dolor sit amet consetetur. Lorem ipsum dolor sit amet.
          </ColoredSubline>
          <DefaultText>
            Als privatwirtschaftliches Unternehmen können wir Open Discourse
            selbstständig finanzieren und sind daher unabhängig von externen
            Mitteln. Dies ermöglicht uns interessenbasierte Forschung und freies
            Handeln. Auch unsere Überzeugung öffentliches Wissen durch offene
            Daten zu unterstützen spiegelt sich in unserem Projekt wieder.
            <br />
            <br />
            Falls ihr Feedback habt oder Open Discourse mit spannenden Ideen
            unterstützen wollt, kontaktiert uns immer gerne. Wir freuen uns auf
            euch!
          </DefaultText>
        </DefaultContainer>
      </Section>
      <Section>
        <DefaultContainer size="l">
          <ContactForm />
        </DefaultContainer>
      </Section>
    </BaseTemplate>
  );
};

export default Home;
