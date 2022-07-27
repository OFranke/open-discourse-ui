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

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // max age 1 week, max stale 1 day
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=86400, stale-if-error=86400"
  );

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
  const title = "Plenarsitzungen im deutschen Bundestag seit 1949";
  const description =
    "Übersicht über alle Protokolle der Plenarsitzungen im deutschen Bundestag seit 1949.";

  const renderedElectoralTerms = new Set<string>();
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
            Plenarsitzungen
          </DefaultHeadline>
          <DefaultText>
            Hier finden Sie eine Übersicht aller Plenarsitzungen des deutschen
            Bundestags seit 1949.
          </DefaultText>
          <div className="grid grid-cols-3 gap-4">
            {sessions.map((session) => {
              const key = `${session.electoralTerm}-${session.session}`;

              const renderNewHeadline = !renderedElectoralTerms.has(
                session.electoralTerm
              );

              renderedElectoralTerms.add(session.electoralTerm);
              return (
                <>
                  {renderNewHeadline ? (
                    <>
                      <DefaultHeadline
                        className="col-span-3"
                        key={key}
                        size="s"
                        as="h2"
                        marginTop={{ base: "4", md: "6", lg: "10" }}
                        marginBottom={{ base: "2", sm: "3", md: "4", lg: "6" }}
                      >
                        Plenarsitzungen in der {session.electoralTerm}.
                        Wahlperiode
                      </DefaultHeadline>
                    </>
                  ) : null}

                  <div key={`link-${key}`}>
                    <NextChakraLink
                      color="pink.500"
                      href={`/plenarsitzungen/${encodeURIComponent(key)}`}
                    >
                      {new Date(session.date).toLocaleDateString()}
                    </NextChakraLink>
                  </div>
                </>
              );
            })}
          </div>
        </DefaultContainer>
      </Section>
    </BaseTemplate>
  );
};

export default Page;
