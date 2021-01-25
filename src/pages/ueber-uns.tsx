import { BaseTemplate } from "../templates/base-template";
import React from "react";
import { Section } from "@bit/limebit.limebit-ui.section";
import { DefaultContainer } from "@bit/limebit.limebit-ui.default-container";
import { DefaultHeadline } from "@bit/limebit.limebit-ui.default-headline";
import { ColoredSubline } from "@bit/limebit.limebit-ui.colored-subline";
import { Quote } from "@bit/limebit.limebit-ui.quote";
import { DefaultText } from "@bit/limebit.limebit-ui.default-text";
import { ContactForm } from "../components/contact-form";
import SEO from "../components/seo";
import NextChakraLink from "@bit/limebit.limebit-ui.next-chakra-link";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { SimpleGrid, Box, chakra } from "@chakra-ui/react";

interface TeamMemberProps {
  src: string;
  name: string;
}
const TeamMember: React.FC<TeamMemberProps> = ({ src, name }) => {
  const multipleSizesWebp = require(`../../public${src}?resize&sizes[]=200&sizes[]=300&sizes[]=500&format=webp`);
  const multipleSizes = require(`../../public${src}?resize&sizes[]=200&sizes[]=300&sizes[]=500&format=jpg`);
  return (
    <Box textAlign="center">
      <picture>
        <source srcSet={multipleSizesWebp.srcSet} type="image/webp" />
        <source srcSet={multipleSizes.srcSet} type="image/jpg" />
        <chakra.img
          alt={`Comic Karikatur von ${name}`}
          src={multipleSizes.src}
          width="100%"
          height="100%"
          objectFit="contain"
        />
      </picture>
      <DefaultText as="span">{name}</DefaultText>
    </Box>
  );
};
const Home: React.FC = () => {
  return (
    <BaseTemplate>
      <SEO
        title="Unser Beitrag zur Demokratie"
        description="Das Team hinter dem gemeinnützigen Projekt engagiert sich für den erleichterten Zugang zu politischen Debatten und Themen auf Basis modernster Technologien."
        canonicalRoute="ueber-uns"
      />

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
            und Mitarbeiter der{" "}
            <NextChakraLink
              color="pink.500"
              href="https://limebit.de"
              isExternal
            >
              Limebit GmbH. <ExternalLinkIcon mx="2px" />
            </NextChakraLink>{" "}
            Entstanden ist die Idee aus den Fähigkeiten und Motivationen der
            Mitarbeiter_Innen, in Pausengesprächen und aus den gemeinsamen
            Vorstellungen von Demokratie.
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
      <Section>
        <DefaultContainer size="s">
          <SimpleGrid columns={{ base: 3, md: 3, lg: 3 }} spacing="10">
            <TeamMember src={"/images/karikaturen/anja.png"} name="Anja" />
            <TeamMember
              src={"/images/karikaturen/fabrizio.png"}
              name="Fabrizio"
            />
            <TeamMember
              src={"/images/karikaturen/florian.png"}
              name="Florian"
            />
            <TeamMember src={"/images/karikaturen/jakob.png"} name="Jakob" />
            <TeamMember src={"/images/karikaturen/judith.png"} name="Judith" />
            <TeamMember
              src={"/images/karikaturen/konstantin.png"}
              name="Konstantin"
            />
            <TeamMember src={"/images/karikaturen/oliver.png"} name="Oliver" />
            <TeamMember
              src={"/images/karikaturen/philipp.png"}
              name="Philipp"
            />
            <TeamMember src={"/images/karikaturen/stella.png"} name="Stella" />
          </SimpleGrid>
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
