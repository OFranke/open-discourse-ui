import { BaseTemplate } from "../templates/base-template";
import { DefaultContainer } from "@bit/limebit.limebit-ui.default-container";
import { Section } from "@bit/limebit.limebit-ui.section";
import { DefaultHeadline } from "@bit/limebit.limebit-ui.default-headline";

import React from "react";
import SEO from "../components/seo";
import { TopicModelling } from "../components/topic-modeling/index";
import { TopicLineGraph } from "../components/topic-modeling/topic-line-graph";
import { GetServerSideProps } from "next";
import { SimpleGrid } from "@chakra-ui/react";
import { DefaultText } from "@bit/limebit.limebit-ui.default-text";
import NextChakraLink from "@bit/limebit.limebit-ui.next-chakra-link";
import { Card } from "@bit/limebit.limebit-ui.card";
import { useRouter } from "next/router";
import { TopicModellingFaqs } from "../components/topic-modeling/faqs/index";

type Data = {
  test: string;
  imgUrl: string | null;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const imgUrl = context?.query?.imgUrl;

  const data: Data = {
    test: "hello ssr",
    imgUrl: typeof imgUrl == "string" ? decodeURIComponent(imgUrl) : null,
  };

  return {
    props: {
      data,
    },
  };
};

import { chakra } from "@chakra-ui/react";

interface ImageProps {
  imagePath: string;
  imageAlt: string;
}
const Image: React.FC<ImageProps> = ({ imagePath, imageAlt }) => {
  const multipleSizesWebp = require(`../../public/images${imagePath}?resize&sizes[]=320&sizes[]=640&format=webp`);
  const multipleSizes = require(`../../public/images${imagePath}?resize&sizes[]=320&sizes[]=640&format=jpg`);
  return (
    <picture>
      <source srcSet={multipleSizesWebp.srcSet} type="image/webp" />
      <source srcSet={multipleSizes.srcSet} type="image/jpg" />
      <chakra.img
        alt={imageAlt}
        src={multipleSizes.src}
        width="100%"
        height="100%"
        objectFit="contain"
        loading="lazy"
      />
    </picture>
  );
};

const Page: React.FC<{ data: Data }> = ({ data }) => {
  const router = useRouter();
  const title = "Plenarprotokolle des deutschen Bundestages seit 1949";
  const description =
    "Open Discourse erleichtert den Zugang zu Protokollen des Bundestages mit einer Suchmaschine für Politiker, Redebeiträge und Fraktionen.";
  return (
    <BaseTemplate>
      <SEO
        title={title}
        description={description}
        canonicalRoute="/diskursanalyse"
        additionalMetaTags={[
          { name: "twitter:card", content: "summary_large_image" },
          {
            name: "twitter:image",
            content: data.imgUrl || "",
          },
          {
            property: "og:image",
            content:
              data.imgUrl ||
              "https://opendiscourse.de/images/statistics/wer_kommt_zu_wort.png",
          },
          // we need this to trick facebook into showing the preview image provided by imgUrl parameter
          {
            property: "og:url",
            content: data.imgUrl || "",
          },
        ]}
      />
      <Section
        marginTop={{ base: "8", sm: "14", md: "20", lg: "20", xl: "32" }}
      >
        <DefaultContainer size="l">
          <DefaultHeadline size="s" as="h2">
            Worüber spricht der Bundestag?
          </DefaultHeadline>
          <DefaultText>
            Analysieren Sie selbst, über welche Themen der deutsche Bundestag
            seit 1949 spricht. Wählen Sie aus 73 Themen und filtern Sie die
            Sprecher_Innen nach Geschlecht, Alter, Partei und mehr.
          </DefaultText>

          <TopicLineGraph marginTop={{ base: 5, md: 10, lg: 10 }} />
          <TopicModelling />
        </DefaultContainer>
      </Section>
      <Section>
        <DefaultContainer size="l">
          <DefaultHeadline size="s" as="h2">
            Beispielanalysen
          </DefaultHeadline>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <NextChakraLink
              _hover={{ textDecoration: "none" }}
              href="/diskursanalyse?filters=%5B%7B%22filterId%22%3A%22799st%22%2C%22color%22%3A%22%23212529%22%2C%22actor%22%3A%22party_0%22%2C%22age%22%3Anull%2C%22state%22%3Anull%2C%22gender%22%3Anull%2C%22job%22%3Anull%2C%22topics%22%3A%22topic_37%22%7D%2C%7B%22filterId%22%3A%22a8f14%22%2C%22color%22%3A%22%23ff0a54%22%2C%22actor%22%3A%22party_1%22%2C%22age%22%3Anull%2C%22state%22%3Anull%2C%22gender%22%3Anull%2C%22job%22%3Anull%2C%22topics%22%3A%22topic_37%22%7D%2C%7B%22filterId%22%3A%22cl2m3%22%2C%22color%22%3A%22%23ffed00%22%2C%22actor%22%3A%22party_2%22%2C%22age%22%3Anull%2C%22state%22%3Anull%2C%22gender%22%3Anull%2C%22job%22%3Anull%2C%22topics%22%3A%22topic_37%22%7D%2C%7B%22filterId%22%3A%22mmyfd%22%2C%22color%22%3A%22%2346962b%22%2C%22actor%22%3A%22party_3%22%2C%22age%22%3Anull%2C%22state%22%3Anull%2C%22gender%22%3Anull%2C%22job%22%3Anull%2C%22topics%22%3A%22topic_37%22%7D%2C%7B%22filterId%22%3A%222w9x0%22%2C%22color%22%3A%22%23dadaeb%22%2C%22actor%22%3A%22party_4%22%2C%22age%22%3Anull%2C%22state%22%3Anull%2C%22gender%22%3Anull%2C%22job%22%3Anull%2C%22topics%22%3A%22topic_37%22%7D%5D"
            >
              <Card textAlign="center">
                <DefaultText>Klimaschutz</DefaultText>
                <Image
                  imagePath={"/diskursanalyse/plot-umwelt-und-klimaschutz.jpg"}
                  imageAlt={"imageAlt"}
                />
              </Card>
            </NextChakraLink>
            <NextChakraLink
              _hover={{ textDecoration: "none" }}
              href="/diskursanalyse?filters=%5B%7B%22filterId%22%3A%22a1za6%22%2C%22color%22%3A%22%23212529%22%2C%22topics%22%3A%22topic_72%22%2C%22age%22%3Anull%2C%22gender%22%3Anull%2C%22job%22%3Anull%2C%22actor%22%3A%22politician_11001478%22%2C%22state%22%3Anull%7D%2C%7B%22color%22%3A%22%23ff0a54%22%2C%22filterId%22%3A%22hv48v%22%2C%22actor%22%3A%22politician_11002078%22%2C%22age%22%3Anull%2C%22state%22%3Anull%2C%22gender%22%3Anull%2C%22job%22%3Anull%2C%22topics%22%3A%22topic_72%22%7D%2C%7B%22color%22%3A%22%23d9d9d9%22%2C%22filterId%22%3A%22fum5p%22%2C%22actor%22%3A%22politician_11001165%22%2C%22age%22%3Anull%2C%22state%22%3Anull%2C%22gender%22%3Anull%2C%22job%22%3Anull%2C%22topics%22%3A%22topic_72%22%7D%2C%7B%22color%22%3A%22%23fee0d2%22%2C%22filterId%22%3A%22mh3yi%22%2C%22actor%22%3A%22politician_11002007%22%2C%22age%22%3Anull%2C%22state%22%3Anull%2C%22gender%22%3Anull%2C%22job%22%3Anull%2C%22topics%22%3A%22topic_72%22%7D%2C%7B%22color%22%3A%22%23fcbba1%22%2C%22filterId%22%3A%22f8rfb%22%2C%22actor%22%3A%22politician_11000246%22%2C%22age%22%3Anull%2C%22state%22%3Anull%2C%22gender%22%3Anull%2C%22job%22%3Anull%2C%22topics%22%3A%22topic_72%22%7D%5D"
            >
              <Card textAlign="center">
                <DefaultText>Korruption & Lobbyismus</DefaultText>
                <Image
                  imagePath={
                    "/diskursanalyse/plot-korruption-und-lobbyismus.jpg"
                  }
                  imageAlt={"imageAlt"}
                />
              </Card>
            </NextChakraLink>
            <NextChakraLink
              _hover={{ textDecoration: "none" }}
              href="/diskursanalyse?filters=%5B%7B%22filterId%22%3A%22h759c%22%2C%22color%22%3A%22%23212529%22%2C%22actor%22%3A%22party_0%22%2C%22age%22%3Anull%2C%22state%22%3Anull%2C%22gender%22%3Anull%2C%22job%22%3Anull%2C%22topics%22%3A%22topic_13%22%7D%2C%7B%22filterId%22%3A%22ow6er%22%2C%22color%22%3A%22%23ff0a54%22%2C%22actor%22%3A%22party_1%22%2C%22age%22%3Anull%2C%22state%22%3Anull%2C%22gender%22%3Anull%2C%22job%22%3Anull%2C%22topics%22%3A%22topic_13%22%7D%2C%7B%22filterId%22%3A%22mohuw%22%2C%22color%22%3A%22%23ffed00%22%2C%22actor%22%3A%22party_2%22%2C%22age%22%3Anull%2C%22state%22%3Anull%2C%22gender%22%3Anull%2C%22job%22%3Anull%2C%22topics%22%3A%22topic_13%22%7D%2C%7B%22filterId%22%3A%227m2nv%22%2C%22color%22%3A%22%2346962b%22%2C%22actor%22%3A%22party_3%22%2C%22age%22%3Anull%2C%22state%22%3Anull%2C%22gender%22%3Anull%2C%22job%22%3Anull%2C%22topics%22%3A%22topic_13%22%7D%2C%7B%22filterId%22%3A%22m40o4%22%2C%22color%22%3A%22%23dadaeb%22%2C%22actor%22%3A%22party_4%22%2C%22age%22%3Anull%2C%22state%22%3Anull%2C%22gender%22%3Anull%2C%22job%22%3Anull%2C%22topics%22%3A%22topic_13%22%7D%5D"
            >
              <Card textAlign="center">
                <DefaultText>Verteidigungspolitik</DefaultText>
                <Image
                  imagePath={"/diskursanalyse/plot-verteidigungspolitik.jpg"}
                  imageAlt={"imageAlt"}
                />
              </Card>
            </NextChakraLink>
          </SimpleGrid>
        </DefaultContainer>
      </Section>
      <Section
        marginTop={{ base: "8", sm: "14", md: "20", lg: "20", xl: "32" }}
      >
        <DefaultContainer size="l">
          <DefaultHeadline size="s">FAQ</DefaultHeadline>
          <TopicModellingFaqs />
        </DefaultContainer>
      </Section>
    </BaseTemplate>
  );
};

export default Page;
