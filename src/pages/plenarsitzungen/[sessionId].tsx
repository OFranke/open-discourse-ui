import { DefaultContainer } from "@bit/limebit.limebit-ui.default-container";
import { Section } from "@bit/limebit.limebit-ui.section";
import { DefaultHeadline } from "@bit/limebit.limebit-ui.default-headline";

import React from "react";
import { GetServerSideProps } from "next";
import { DefaultText } from "@bit/limebit.limebit-ui.default-text";
import { BaseTemplate } from "../../templates/base-template";
import { SEO } from "../../components/seo";
import invariant from "tiny-invariant";
import { convertPosition } from "../../components/full-text-search/result-table";
import { Faction, Speech } from "../../types/types";
import NextChakraLink from "@bit/limebit.limebit-ui.next-chakra-link";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Callout } from "../../components/callout";

type Data = {
  session: Speech[];
  factions: Faction[];
};

export const getServerSideProps: GetServerSideProps = async ({
  res,
  ...context
}) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=604800, stale-while-revalidate=86400, stale-if-error=86400"
  );
  const sessionId = context.query.sessionId as string;
  invariant(sessionId, "Expected sessionId");
  const [electoralTerm, session] = sessionId.split("-");
  if (!electoralTerm || !session) {
    return {
      notFound: true,
    };
  }

  const sessionPromise = fetch(
    `https://api.opendiscourse.de:5300/session?electoralTerm=${encodeURIComponent(
      electoralTerm
    )}&session=${encodeURIComponent(session)}`
  ).then((res) => res.json());

  const factionsPromise = fetch(
    "https://api.opendiscourse.de:5300/factions"
  ).then((res) => res.json());
  // const result = getSessionResponse;

  const [sessionResult, factionsResult] = await Promise.all([
    sessionPromise,
    factionsPromise,
  ]);

  if (
    !sessionResult?.data?.speeches?.length ||
    !factionsResult?.data?.factions
  ) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      session: sessionResult.data.speeches,
      factions: factionsResult.data.factions,
    },
  };
};

const Page: React.FC<Data> = ({ session, factions }) => {
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

  const title = `Plenarsitzung im Deutschen Bundestag am ${new Date(
    session[0].date
  ).toLocaleDateString()}`;
  const description = `Protokoll der ${session[0].session}. Plenarsitzung der ${
    session[0].electoralTerm
  }. Wahlperiode im Deutschen Bundestag am ${new Date(
    session[0].date
  ).toLocaleDateString()}.`;
  ("Open Discourse erleichtert den Zugang zum politischen Diskurs des Bundestages mit einem Tool zur Diskursanalyse der Plenardebatten.");
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
          <div className="mb-10">
            <DefaultHeadline size="s" as="h1" marginBottom={1}>
              Plenarsitzung im Deutschen Bundestag am{" "}
              {new Date(session[0].date).toLocaleDateString()}
            </DefaultHeadline>
            <NextChakraLink
              color="pink.500"
              href={session[0].documentUrl}
              isExternal
            >
              <ArrowForwardIcon mr="1" />
              Zum Plenarprotokoll
            </NextChakraLink>
          </div>
          <Callout calloutText="NOTICE! The speech content variable only contains the actual spoken words of the respective politician. Any kind of interjection or reaction from the plenum is deleted from the speech content variable and replaced by a positional ID in the format of ({ID}). This positional ID can be used to link each speech with every contribution during the speech. The contributions can be found in the two Contributions Tables. Furthermore the positional ID represents the exact order and position a contribution occurred and hence can be used to reassemble the original structure of the speeches and interjections/contributions." />
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
                    {speech.politicianId === "-1"
                      ? null
                      : `Politiker ID: ${speech.politicianId}`}
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
