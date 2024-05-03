import { BaseTemplate } from "../templates/base-template";
import React from "react";
import { Section } from "@bit/limebit.limebit-ui.section";
import { DefaultContainer } from "@bit/limebit.limebit-ui.default-container";
import { DefaultHeadline } from "@bit/limebit.limebit-ui.default-headline";
import { ColoredSubline } from "@bit/limebit.limebit-ui.colored-subline";
import { Quote } from "@bit/limebit.limebit-ui.quote";
import { DefaultText } from "@bit/limebit.limebit-ui.default-text";
import { ContactForm } from "../components/contact-form";
import { SEO } from "../components/seo";
import NextChakraLink from "@bit/limebit.limebit-ui.next-chakra-link";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, UnorderedList } from "@chakra-ui/react";
import Image from "next/image";
import { DefaultListItem } from "../components/default-list-item";

const Finance: React.FC = () => {
  return (
    <BaseTemplate>
      <SEO
        title="Open Discourse Finanzieren"
        description="Helfen Sie, Open Discourse zur finanzieren, um die Plattform zu betreiben und weiter zu entwickeln."
        canonicalRoute="finanzieren"
      />

      <Section paddingTop={{ base: 4, xl: 10 }}>
        <DefaultContainer size="l">
          <DefaultHeadline size="s" as="h1">
            Open Discourse Finanzieren
          </DefaultHeadline>
          <ColoredSubline backgroundColor="pink.500">
            Die Plattform ist unser Beitrag zur Demokratisierung des Zugangs zu
            politischen Debatten und Themen.
          </ColoredSubline>
          <DefaultText>
            Open Discourse ist ein gemeinnütziges Projekt der Mitarbeiterinnen
            und Mitarbeiter der{" "}
            <NextChakraLink
              color="pink.500"
              href="https://limebit.de"
              isExternal
            >
              Limebit GmbH. <ExternalLinkIcon mx="2px" />
            </NextChakraLink>{" "}
            Entstanden ist die Idee aus den Fähigkeiten und Motivationen der
            Mitarbeiter:innen, in Pausengesprächen und aus den gemeinsamen
            Vorstellungen von Demokratie.
          </DefaultText>
          <DefaultText>
            Wir hoffen, dass durch unsere Vorarbeit datenbasierter Journalismus,
            Wissenschaft und Zivilbevölkerung profitieren und der erleichterte
            Zugang zu den Daten dazu anregt, die politische Geschichte des
            Bundestags auf Basis der verwendeten Sprache der Politiker:innen zu
            analysieren.
          </DefaultText>
          <DefaultText>
            Um Open Discourse weiterzuentwickeln und zu betreiben, sind wir auf
            finanzielle Mittel angewiesen. Wir freuen uns über Ihre finanzielle
            Unterstützung:
          </DefaultText>
          <UnorderedList>
            <DefaultListItem>
              Monatlich über:{" "}
              <NextChakraLink
                color="pink.500"
                href="https://www.patreon.com/opendiscourse"
                isExternal
              >
                Patreon <ExternalLinkIcon mx="2px" />
              </NextChakraLink>
            </DefaultListItem>
            <DefaultListItem>
              Monatlich oder einmalig:{" "}
              <NextChakraLink
                color="pink.500"
                href="https://github.com/sponsors/open-discourse"
                isExternal
              >
                GitHub Sponsorships <ExternalLinkIcon mx="2px" />
              </NextChakraLink>
            </DefaultListItem>
            <DefaultListItem>
              <DefaultText>
                <strong>Limebit GmbH</strong>
                <br />
                IBAN: DE34 4306 0967 1019 1891 00
                <br />
                BIC: GENODEM1GLS
                <br />
                Verwendungszweck: Open Discourse Finanzierung
              </DefaultText>
            </DefaultListItem>
          </UnorderedList>

          <DefaultText>
            Hinweis: Da wir trotz allem gesellschaftlichen Engagement ein
            privatwirtschaftliches Unternehmen sind, sind die Gelder, die Sie
            uns zukommen lassen keine steuerrechtlich absetzbaren Spenden. Bei
            Bedarf stellen wir Ihnen aber gerne ein Dokument mit einer
            Bestätigung ihrer Überweisung aus. Wenden Sie sich dazu bitte per
            E-Mail an: <b>zwischenruf@opendiscourse.de</b>.
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
          <DefaultText>
            Wenn Sie wissen möchten, wer am Projekt mitgewirkt hat, erfahren Sie{" "}
            <NextChakraLink color="pink.500" href="/ueber-uns">
              hier mehr über unser Team
            </NextChakraLink>
            .
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

export default Finance;
