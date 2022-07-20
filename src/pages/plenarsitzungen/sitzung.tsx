import { DefaultContainer } from "@bit/limebit.limebit-ui.default-container";
import { Section } from "@bit/limebit.limebit-ui.section";
import { DefaultHeadline } from "@bit/limebit.limebit-ui.default-headline";

import React from "react";
import { GetServerSideProps } from "next";
import { DefaultText } from "@bit/limebit.limebit-ui.default-text";
import { BaseTemplate } from "../../templates/base-template";
import { SEO } from "../../components/seo";
import invariant from "tiny-invariant";
import Quote from "@bit/limebit.limebit-ui.quote";

type Speech = {
  id: string;
  session: string;
  electoralTerm: string;
  firstName: string;
  lastName: string;
  politicianId: string;
  speechContent: string;
  factionId: string;
  documentUrl: string;
  positionShort: string;
  positionLong: string;
  date: string;
};

type Data = {
  data: Speech[];
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const electoralTerm = context.query.electoralTerm as string;
  const session = context.query.session as string;
  invariant(electoralTerm, "Expected electoralTerm");
  invariant(session, "Expected session");
  const result = await fetch(
    `https://api.opendiscourse.de:5300/session?electoralTerm=${encodeURIComponent(
      electoralTerm
    )}&session=${encodeURIComponent(session)}`
  ).then((res) => res.json());

  console.log(result.data.speeches[0]);

  return {
    props: {
      data: result.data.speeches,
    },
  };
};

const Page: React.FC<Data> = ({ data }) => {
  console.log("data", data);
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
            Plenarsitzung
          </DefaultHeadline>
          {data.map((speech) => {
            return (
              <>
                <DefaultHeadline size="xs" as="h3">
                  {speech.firstName} {speech.lastName} ({speech.positionShort}){" "}
                  {speech.politicianId}
                </DefaultHeadline>
                <DefaultText>{speech.speechContent}</DefaultText>
              </>
            );
          })}
        </DefaultContainer>
      </Section>
    </BaseTemplate>
  );
};

export default Page;
