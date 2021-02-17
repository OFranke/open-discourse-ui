import React from "react";
import { BaseTemplate } from "../templates/base-template";
import SEO from "../components/seo";

import { GetServerSideProps } from "next";

import { InferGetServerSidePropsType } from "next";

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

const Home: React.FC<{ data: Data }> = ({ data }) => {
  console.log("\x1b[33m%s\x1b[0m", "%c >> data.test", data.test);
  return (
    <BaseTemplate>
      <SEO
        title="Plenarprotokolle des deutschen Bundestages seit 1949"
        description="Open Discourse erleichtert den Zugang zu Protokollen des Bundestages mit einer Suchmaschine für Politiker, Redebeiträge und Fraktionen."
        canonicalRoute="/"
        additionalMetaTags={[
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:site", content: "@OpenDiscourseDE" },
          { name: "twitter:title", content: "Some nice Content" },
          { name: "twitter:description", content: "Some nice Description" },
          { name: "twitter:image", content: data.imgUrl || "" },
        ]}
      />
    </BaseTemplate>
  );
};

export default Home;
