import { BaseTemplate } from "../../templates/base-template";

import React from "react";
import SEO from "../../components/seo";
import { useBreakpointValue } from "@chakra-ui/react";
import { GetServerSideProps } from "next";

type Data = {
  version: string | null;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const version = context?.query?.version;

  const data: Data = {
    version: typeof version == "string" ? version : null,
  };

  return {
    props: {
      data,
    },
  };
};

const Page: React.FC<{ data: Data }> = ({ data }) => {
  const headerHeight = useBreakpointValue({ base: 64, lg: 80, xl: 109 });
  const footerHeight = useBreakpointValue({ base: 61, sm: 56, lg: 62, xl: 86 });
  return (
    <BaseTemplate>
      <SEO
        title="Dokumentation"
        description=""
        canonicalRoute="dokumentation"
      />
      {data.version && (
        <iframe
          style={{
            height: `calc(100vh - ${headerHeight}px - ${footerHeight}px`,
          }}
          width="100%"
          src={`/docs/${data.version}/index.html`}
        ></iframe>
      )}
    </BaseTemplate>
  );
};

export default Page;
