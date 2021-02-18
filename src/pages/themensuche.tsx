import { BaseTemplate } from "../templates/base-template";
import { DefaultContainer } from "@bit/limebit.limebit-ui.default-container";
import { Section } from "@bit/limebit.limebit-ui.section";
import { DefaultHeadline } from "@bit/limebit.limebit-ui.default-headline";

import React from "react";
import SEO from "../components/seo";
import { TopicModelling } from "../components/topic-modeling/index";
import { TopicLineGraph } from "../components/topic-modeling/topic-line-graph";
import { GetServerSideProps } from "next";

type Data = {
  test: string;
  imgUrl: string | null;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("\x1b[33m%s\x1b[0m", "%c >> context.", context.query);

  const imgUrl = context?.query?.imgUrl;

  const data: Data = {
    test: "hello ssr",
    imgUrl: typeof imgUrl == "string" ? imgUrl : null,
  };

  return {
    props: {
      data,
    },
  };
};

const Page: React.FC<{ data: Data }> = ({ data }) => {
  const title = "Plenarprotokolle des deutschen Bundestages seit 1949";
  const description =
    "Open Discourse erleichtert den Zugang zu Protokollen des Bundestages mit einer Suchmaschine für Politiker, Redebeiträge und Fraktionen.";
  return (
    <BaseTemplate>
      <SEO
        title={title}
        description={description}
        canonicalRoute="/themensuche"
        additionalMetaTags={[
          { name: "twitter:card", content: "summary_large_image" },
          {
            name: "twitter:image",
            content:
              data.imgUrl ||
              "https://opendiscourse.de/images/statistics/wer_kommt_zu_wort.png",
          },
          {
            property: "og:image",
            content:
              data.imgUrl ||
              "https://opendiscourse.de/images/statistics/wer_kommt_zu_wort.png",
          },
          {
            property: "og:url",
            content: `https://open-discourse-ui-git-implement-topic-modelling.ofranke.vercel.app/themensuche?imgUrl=https%3A%2F%2Fopen-discourse-ui-git-implement-topic-modelling.ofranke.vercel.app%2Fthemensuche%3FimgUrl%3Dhttps%3A%2F%2Ffra1.digitaloceanspaces.com%2Fopendiscourse%2Fad1dd050-6c72-4c43-998e-f193cd9c2712.jpg`,
          },
        ]}
      />
      <Section
        marginTop={{ base: "8", sm: "14", md: "20", lg: "20", xl: "32" }}
      >
        <DefaultContainer size="l">
          <DefaultHeadline size="s" as="h2">
            Topic Modelling
          </DefaultHeadline>
          <TopicModelling />
          <TopicLineGraph marginTop={{ base: 5, md: 10, lg: 20 }} />
        </DefaultContainer>
      </Section>
    </BaseTemplate>
  );
};

export default Page;
