import { BaseTemplate } from "../templates/base-template";
import React from "react";
import { Section } from "@bit/limebit.limebit-ui.section";
import Image from "next/image";
import { DefaultContainer } from "@bit/limebit.limebit-ui.default-container";
import { DefaultHeadline } from "@bit/limebit.limebit-ui.default-headline";
import { ColoredSubline } from "@bit/limebit.limebit-ui.colored-subline";
import { Quote } from "@bit/limebit.limebit-ui.quote";
import { DefaultText } from "@bit/limebit.limebit-ui.default-text";
import { ContactForm } from "../components/contact-form";
import SEO from "../components/seo";

export const config = {
  unstable_runtimeJS: false,
};

const Home: React.FC = () => {
  return (
    <BaseTemplate>
      <SEO title="" description="" canonicalRoute="" />
      <Section>
        <Image
          src={"/images/sample/team_outside.png"}
          alt={"Team draußen"}
          layout="responsive"
          width="1440px"
          height="700px"
          quality="75"
        />
      </Section>
      <Section>
        <DefaultContainer size="l">
          <DefaultHeadline size="s" as="h1">
            Das Team hinter Open Discourse
          </DefaultHeadline>
          <ColoredSubline backgroundColor="pink.500">
            Die Plattform ist unser Beitrag zur Demokratisierung des Zugangs zu
            politischen Debatten und Themen.
          </ColoredSubline>
          <DefaultText>
            Open Discourse ist ein gemeinnützige Projekt der Mitarbeiterinnen
            und Mitarbeiter der Limebit GmbH. Entstanden ist das Projekt aus den
            Fähigkeiten und Motivationen der Mitarbeiter_Innen, in
            Pausengesprächen und aus den gemeinsamen Vorstellungen von
            Demokratie.
          </DefaultText>
          <DefaultText>
            Die Initiative unabhängig von externen Förderungen und XYZ.
          </DefaultText>
        </DefaultContainer>
      </Section>
      <Section background="pink.500" color="white">
        <DefaultContainer size="s">
          <Quote>
            Unsere Mission ist es, den Mehrwert von Daten für Menschen
            züglichlich und verständliche zu machen. Denn ihn verborgenen
            Informationen liegen oft sichtbare Lösungen.
          </Quote>
        </DefaultContainer>
      </Section>
      <Section>
        <DefaultContainer size="l">
          <DefaultText>
            Die Kundenarbeit ermöglicht dem Unternehmen und uns MitarbeiterInnen
            finanzielle Mittel und zeitliche Freiräume, um zwischen den
            Projekten interessenbasierter Forschung nachzugehen. Unsere
            Überzeugung öffentliches Wissen durch offene Daten zu unterstützen
            spiegelt sich in diesem Projekt wieder.
          </DefaultText>
          <DefaultText>
            Falls ihr Feedback habt oder Open Discourse mit spannenden Ideen
            unterstützen wollt, kontaktiert uns immer gerne. Wir freuen uns auf
            euch!.
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
