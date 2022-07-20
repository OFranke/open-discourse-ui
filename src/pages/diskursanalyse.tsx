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

const Page: React.FC<{ data: Data }> = ({ data }) => {
  const title = "Diskursanalyse des deutschen Bundestages seit 1949";
  const description =
    "Open Discourse erleichtert den Zugang zum politischen Diskurs des Bundestages mit einem Tool zur Diskursanalyse der Plenardebatten.";
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
            Sprecher:innen nach Geschlecht, Alter, Partei und mehr.
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
              href="/diskursanalyse?filters=%5B%7B%22filterId%22%3A%222i6ly%22%2C%22color%22%3A%22%23FBB6CE%22%2C%22actor%22%3Anull%2C%22age%22%3A%22age_0%22%2C%22state%22%3Anull%2C%22gender%22%3A%22gender_1%22%2C%22job%22%3Anull%2C%22topics%22%3A%22topic_6%22%7D%2C%7B%22filterId%22%3A%22gr6gj%22%2C%22color%22%3A%22%23ED64A6%22%2C%22actor%22%3Anull%2C%22age%22%3A%22age_1%22%2C%22state%22%3Anull%2C%22gender%22%3A%22gender_0%22%2C%22job%22%3Anull%2C%22topics%22%3A%22topic_6%22%7D%5D"
            >
              <Card textAlign="center">
                <DefaultHeadline size="xs">Klimaschutz</DefaultHeadline>
                <DefaultText>
                  Umwelt als Metathema deutlich stärker von jungen Frauen als
                  von älteren Männern besetzt
                </DefaultText>
              </Card>
            </NextChakraLink>
            <NextChakraLink
              _hover={{ textDecoration: "none" }}
              href="/diskursanalyse?filters=%5B%7B%22filterId%22%3A%22f8rfb%22%2C%22color%22%3A%22%23212529%22%2C%22actor%22%3A%22party_0%22%2C%22age%22%3Anull%2C%22state%22%3Anull%2C%22gender%22%3Anull%2C%22job%22%3Anull%2C%22topics%22%3A%22topic_23%22%7D%2C%7B%22filterId%22%3A%22ei89n%22%2C%22color%22%3A%22%23ff0a54%22%2C%22actor%22%3A%22party_1%22%2C%22age%22%3Anull%2C%22state%22%3Anull%2C%22gender%22%3Anull%2C%22job%22%3Anull%2C%22topics%22%3A%22topic_23%22%7D%2C%7B%22filterId%22%3A%22gyekz%22%2C%22color%22%3A%22%23ffed00%22%2C%22actor%22%3A%22party_2%22%2C%22age%22%3Anull%2C%22state%22%3Anull%2C%22gender%22%3Anull%2C%22job%22%3Anull%2C%22topics%22%3A%22topic_23%22%7D%2C%7B%22color%22%3A%22%23dadaeb%22%2C%22filterId%22%3A%22vo55x%22%2C%22actor%22%3A%22party_4%22%2C%22age%22%3Anull%2C%22state%22%3Anull%2C%22gender%22%3Anull%2C%22job%22%3Anull%2C%22topics%22%3A%22topic_23%22%7D%2C%7B%22color%22%3A%22%2346962b%22%2C%22filterId%22%3A%222i6ly%22%2C%22actor%22%3A%22party_3%22%2C%22age%22%3Anull%2C%22state%22%3Anull%2C%22gender%22%3Anull%2C%22job%22%3Anull%2C%22topics%22%3A%22topic_23%22%7D%5D"
            >
              <Card textAlign="center">
                <DefaultHeadline size="xs">Datenschutz</DefaultHeadline>
                <DefaultText>
                  Thematisierung von Datenschutz nimmt während
                  Regierungsverantwortung ab
                </DefaultText>
              </Card>
            </NextChakraLink>
            <NextChakraLink
              _hover={{ textDecoration: "none" }}
              href="/diskursanalyse?filters=%5B%7B%22filterId%22%3A%222i6ly%22%2C%22color%22%3A%22%23FBB6CE%22%2C%22actor%22%3Anull%2C%22age%22%3Anull%2C%22state%22%3Anull%2C%22gender%22%3A%22gender_1%22%2C%22job%22%3Anull%2C%22topics%22%3A%22topic_47%22%7D%2C%7B%22filterId%22%3A%22gr6gj%22%2C%22color%22%3A%22%23ED64A6%22%2C%22actor%22%3Anull%2C%22age%22%3Anull%2C%22state%22%3Anull%2C%22gender%22%3A%22gender_0%22%2C%22job%22%3Anull%2C%22topics%22%3A%22topic_47%22%7D%5D"
            >
              <Card textAlign="center">
                <DefaultHeadline size="xs">Familie</DefaultHeadline>
                <DefaultText>
                  Familienangelegenheiten als politisches Thema vorwiegend durch
                  Frauen getragen
                </DefaultText>
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
