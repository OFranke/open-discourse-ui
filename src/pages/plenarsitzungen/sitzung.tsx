import { DefaultContainer } from "@bit/limebit.limebit-ui.default-container";
import { Section } from "@bit/limebit.limebit-ui.section";
import { DefaultHeadline } from "@bit/limebit.limebit-ui.default-headline";

import React from "react";
import { GetServerSideProps } from "next";
import { DefaultText } from "@bit/limebit.limebit-ui.default-text";
import { BaseTemplate } from "../../templates/base-template";
import { SEO } from "../../components/seo";
import invariant from "tiny-invariant";
import { Faction } from "../../components/full-text-search/search-form";
import { convertPosition } from "../../components/full-text-search/result-table";
import { getSessionResponse, getFactionsResponse } from "../../data.server";

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
  session: Speech[];
  factions: Faction[];
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const electoralTerm = context.query.electoralTerm as string;
  const session = context.query.session as string;
  invariant(electoralTerm, "Expected electoralTerm");
  invariant(session, "Expected session");
  // const sessionPromise = fetch(
  //   `https://api.opendiscourse.de:5300/session?electoralTerm=${encodeURIComponent(
  //     electoralTerm
  //   )}&session=${encodeURIComponent(session)}`
  // ).then((res) => res.json());

  // const factionsPromise = fetch(
  //   "https://api.opendiscourse.de:5300/factions"
  // ).then((res) => res.json());
  // // const result = getSessionResponse;

  // const [sessionResult, factionsResult] = await Promise.all([
  //   sessionPromise,
  //   factionsPromise,
  // ]);

  return {
    props: {
      // session: sessionResult.data.speeches,
      // factions: factionsResult.data.factions,

      session: getSessionResponse.data.speeches,
      factions: getFactionsResponse.data.factions,
    },
  };
};

const Page: React.FC<Data> = ({ session, factions }) => {
  console.log("data", session);

  const factionColors = [
    { key: "0", color: "#009ee0" },
    { key: "3", color: "#46962b" },
    { key: "4", color: "#000000" },
    { key: "13", color: "#ffed00" },
    { key: "23", color: "#E3000F" },
  ];

  const convertFactionColor = (faction: string) => {
    return (
      factionColors.find((element) => element.key == faction)?.color ||
      "#E9E9E9"
    );
  };

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
          <DefaultHeadline size="s" as="h1">
            Plenarsitzung im Deutschen Bundestag am{" "}
            {new Date(session[0].date).toLocaleDateString()}
          </DefaultHeadline>
          {session.map((speech) => {
            const translatedPosition = convertPosition(speech.positionShort);
            const translatedFaction = factions.find(
              (faction) => faction.id === speech.factionId
            );
            const factionColor = convertFactionColor(speech.factionId);

            return (
              <div key={speech.id} className="mb-20">
                <div className="mb-6">
                  <DefaultHeadline size="xs" as="h3" marginBottom={1}>
                    {speech.firstName} {speech.lastName} (
                    {translatedPosition ?? speech.positionShort}){" "}
                  </DefaultHeadline>
                  <div className="text-gray-600">
                    Politiker ID: {speech.politicianId}
                    {translatedFaction?.id == "-1"
                      ? null
                      : `, Fraktion: ${translatedFaction?.fullName} (${translatedFaction?.abbreviation})`}
                  </div>
                </div>
                <DefaultText
                  style={{ borderLeftColor: factionColor }}
                  className={`border-l-8 pl-4`}
                >
                  <q>{speech.speechContent.trim()}</q>
                </DefaultText>
              </div>
            );
          })}
        </DefaultContainer>
      </Section>
    </BaseTemplate>
  );
};

export default Page;
