import { BaseTemplate } from "../templates/base-template";
import { DefaultContainer } from "@bit/limebit.limebit-ui.default-container";
import { Section } from "@bit/limebit.limebit-ui.section";
import { DefaultHeadline } from "@bit/limebit.limebit-ui.default-headline";

import React from "react";
import { SEO } from "../components/seo";
import { GetServerSideProps } from "next";
import { DefaultText } from "@bit/limebit.limebit-ui.default-text";

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
        canonicalRoute="/plenarsitzungen"
      />
      <Section
        marginTop={{ base: "8", sm: "14", md: "20", lg: "20", xl: "32" }}
      >
        <DefaultContainer size="l">
          <DefaultHeadline size="s" as="h2">
            Plenarsitzungen
          </DefaultHeadline>
          <DefaultText>
            Analysieren Sie selbst, über welche Themen der deutsche Bundestag
            seit 1949 spricht. Wählen Sie aus 73 Themen und filtern Sie die
            Sprecher:innen nach Geschlecht, Alter, Partei und mehr.
          </DefaultText>
        </DefaultContainer>
      </Section>
    </BaseTemplate>
  );
};

export default Page;
