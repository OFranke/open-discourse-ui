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
import NextChakraLink from "@bit/limebit.limebit-ui.next-chakra-link";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Home: React.FC = () => {
  return (
    <BaseTemplate>
      <SEO title="" description="" canonicalRoute="" />
      <Section paddingTop={{ base: 4, xl: 10 }}>
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
            und Mitarbeiter der Limebit GmbH. Entstanden ist das Idee aus den
            Fähigkeiten und Motivationen der Mitarbeiter_Innen, in
            Pausengesprächen und aus den gemeinsamen Vorstellungen von
            Demokratie.
          </DefaultText>
          <DefaultText>
            Wir hoffen, dass durch unsere Vorarbeit datenbasierter Journalismus,
            Wissenschaft und Zivilbevölkerung profitieren und der erleichterte
            Zugang zu den Daten dazu anregt, die politische Geschichte des
            Bundestags auf Basis der verwendeten Sprache der Politiker_Innen zu
            analysieren.
          </DefaultText>
          <DefaultText>
            Wenn Sie von weiteren Updates und Projekten rund um Open Discourse
            erfahren wollen, tragen Sie sich gern in{" "}
            <NextChakraLink
              color="pink.500"
              isExternal
              href="https://opendiscourse.us4.list-manage.com/subscribe/post?u=30a259be75440df1879f0b592&id=c65a7ccd1a"
            >
              unseren Newsletter <ExternalLinkIcon mx="2px" />
            </NextChakraLink>{" "}
            ein.
          </DefaultText>
        </DefaultContainer>
      </Section>
      <Section background="pink.500" color="white">
        <DefaultContainer size="s">
          <Quote>
            Durch moderne Wege der Datenverarbeitung wollen wir den politischen
            Diskurs für die Allgemeinheit öffnen und so die politische
            Diskursanalyse demokratisieren.
          </Quote>
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
