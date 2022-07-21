import { BaseTemplate } from "../../templates/base-template";
import { DefaultContainer } from "@bit/limebit.limebit-ui.default-container";
import { Section } from "@bit/limebit.limebit-ui.section";
import { DefaultHeadline } from "@bit/limebit.limebit-ui.default-headline";

import React from "react";
import { SEO } from "../../components/seo";
import { GetServerSideProps } from "next";
import { DefaultText } from "@bit/limebit.limebit-ui.default-text";
import NextChakraLink from "@bit/limebit.limebit-ui.next-chakra-link";
import { Session } from "../../types/types";

type Data = {
  sessions: Session[];
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const sessionResponse = await fetch(
    `https://api.opendiscourse.de:5300/sessions`
  ).then((res) => res.json());

  if (!sessionResponse?.data?.sessionIds?.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      sessions: sessionResponse.data.sessionIds,
    },
  };
};

const Page: React.FC<Data> = ({ sessions }) => {
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
            Hier finden Sie eine Übersicht aller Plenarsitzungen des deutschen
            Bundestags seit 1949.
          </DefaultText>
          {sessions.map((session) => {
            const key = `${session.electoralTerm}-${session.session}`;
            return (
              <div key={key}>
                <NextChakraLink
                  color="pink.500"
                  href={`/plenarsitzungen/${encodeURIComponent(key)}`}
                >
                  {new Date(session.date).toLocaleDateString()}
                </NextChakraLink>
              </div>
            );
          })}
        </DefaultContainer>
      </Section>
    </BaseTemplate>
  );
};

export default Page;
