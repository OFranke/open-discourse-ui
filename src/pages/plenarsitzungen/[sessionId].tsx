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

  const sessionResult = await fetch(
    `https://api.opendiscourse.de:5300/session?electoralTerm=${encodeURIComponent(
      electoralTerm
    )}&session=${encodeURIComponent(session)}`
  ).then((res) => res.json());

  if (!sessionResult?.data?.speeches?.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      session: sessionResult.data.speeches,
    },
  };
};

const Page: React.FC<Data> = ({ session }) => {
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
  return (
    <BaseTemplate>
      <SEO
        title={title}
        description={description}
        canonicalRoute={`/plenarsitzungen/${session[0].electoralTerm}-${session[0].session}`}
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
          <Callout calloutText="Der Redeinhalt enthält nur die tatsächlich gesprochenen Worte des jeweiligen Politikers. Jede Art von Zwischenruf oder Reaktion aus dem Plenum wird aus dem Redeinhalt gelöscht und durch eine Positions-ID im Format ({ID}) ersetzt." />
          {session.map((speech) => {
            const translatedPosition = convertPosition(speech.positionShort);
            const factionColor = convertFactionColor(speech.factionId);

            return (
              <div key={speech.id} className="mb-20">
                <div className="mb-6">
                  <DefaultHeadline size="xs" as="h3" marginBottom={1}>
                    {speech.academicTitle} {speech.firstName} {speech.lastName}{" "}
                    ({translatedPosition ?? speech.positionShort}){" "}
                  </DefaultHeadline>
                  <div className="text-gray-600">
                    {speech.politicianId === "-1"
                      ? null
                      : `Politiker ID: ${speech.politicianId}`}
                    {speech.factionId == "-1"
                      ? null
                      : `, Fraktion: ${speech.factionFullName} (${speech.factionAbbreviation})`}
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
